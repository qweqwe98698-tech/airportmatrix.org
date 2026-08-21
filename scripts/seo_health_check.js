import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const siteUrl = 'https://airportmatrix.org';

const issues = [];
const stats = {
  totalPages: 0,
  indexablePages: 0,
  noindexPages: 0,
  sitemapUrls: 0,
  canonicalErrors: 0,
  brokenLinks: 0,
  duplicateTitles: 0,
  duplicateH1s: 0,
  schemaErrors: 0,
  coreUrlsPass: true,
  robotsPass: true,
  sitemapPass: true,
};

function addIssue(level, category, file, message, fix) {
  issues.push({ level, category, file, message, fix });
}

// Recursively find all HTML files in dist
function getAllHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

console.log('🛡️ [AirportMatrix SEO Publishing Gate] 启动 SEO 防掉索引与发布安全综合检查...\n');

// 1. Build Artifact Check
if (!fs.existsSync(distDir)) {
  addIssue('CRITICAL', 'BUILD', distDir, 'dist 目录不存在，请先执行 npm run build', '运行 npm run build');
}

const htmlFiles = getAllHtmlFiles(distDir);
stats.totalPages = htmlFiles.length;

if (stats.totalPages === 0) {
  addIssue('CRITICAL', 'BUILD', distDir, '未在 dist 目录发现任何编译生成的 HTML 页面', '检查 Astro 编译配置');
}

// 2. Robots.txt Safety Check
const robotsPath = path.join(distDir, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  addIssue('CRITICAL', 'ROBOTS', robotsPath, '未在 dist 根目录生成 robots.txt', '确保 public/robots.txt 存在');
  stats.robotsPass = false;
} else {
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  if (robotsContent.includes('Disallow: /') && !robotsContent.includes('Disallow: /go/')) {
    addIssue('CRITICAL', 'ROBOTS', robotsPath, '发现全站禁止抓取规则 Disallow: /，会导致全站从搜索引擎掉索引！', '移除 Disallow: /，改为 Allow: /');
    stats.robotsPass = false;
  }
  if (!robotsContent.toLowerCase().includes('sitemap:')) {
    addIssue('WARNING', 'ROBOTS', robotsPath, 'robots.txt 中缺少 Sitemap 指令声明', '添加 Sitemap: https://airportmatrix.org/sitemap-index.xml');
  }
}

// 3. Sitemap Safety Check
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
let sitemapUrls = [];

if (fs.existsSync(sitemap0Path)) {
  const sitemapContent = fs.readFileSync(sitemap0Path, 'utf-8');
  const locMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
  sitemapUrls = locMatches.map(m => m.replace(/<\/?loc>/g, '').trim());
  stats.sitemapUrls = sitemapUrls.length;

  for (const url of sitemapUrls) {
    if (url.includes('localhost') || url.includes('127.0.0.1')) {
      addIssue('CRITICAL', 'SITEMAP', sitemap0Path, `Sitemap 包含测试域名/本地地址: ${url}`, '在 astro.config.mjs 中配置 site 正式域名');
      stats.sitemapPass = false;
    }
    if (url.includes('/go/') || url.includes('/admin') || url.includes('404')) {
      addIssue('CRITICAL', 'SITEMAP', sitemap0Path, `Sitemap 包含非规范/重定向/noindex 页面: ${url}`, '使用 sitemap filter 排除该路径');
      stats.sitemapPass = false;
    }
  }

  // Anomaly check: baseline is around 70 indexable pages
  if (stats.sitemapUrls < 40) {
    addIssue('CRITICAL', 'PAGE_COUNT_ANOMALY', sitemap0Path, `Sitemap URL 数量骤降至 ${stats.sitemapUrls} 个（基准约 70），可能存在大面积页面丢失！`, '检查路由文件与数据源');
    stats.sitemapPass = false;
  } else if (stats.sitemapUrls > 500) {
    addIssue('WARNING', 'PAGE_COUNT_ANOMALY', sitemap0Path, `Sitemap URL 数量暴增至 ${stats.sitemapUrls} 个，请确认是否存在重复低质内容生成`, '检查 pSEO 生成器');
  }
} else {
  addIssue('CRITICAL', 'SITEMAP', sitemap0Path, '未在 dist 找到 sitemap-0.xml', '检查 @astrojs/sitemap 插件');
  stats.sitemapPass = false;
}

// 4. HTML Files Deep Scanning (Noindex, Canonical, Internal Links, Titles, H1s, Schema)
const titleMap = new Map();
const h1Map = new Map();
const internalLinksToCheck = [];

for (const filePath of htmlFiles) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relPath = path.relative(distDir, filePath).replace(/\\/g, '/');
  const isNoindexExpected = relPath.startsWith('go/') || relPath.startsWith('admin/') || relPath === '404.html';

  // --- Noindex Check ---
  const hasNoindexMeta = /<meta\s+name=["'](robots|googlebot|bingbot)["']\s+content=["'][^"']*noindex[^"']*["']/i.test(content);
  if (hasNoindexMeta) {
    stats.noindexPages++;
    if (!isNoindexExpected) {
      addIssue('CRITICAL', 'NOINDEX', relPath, `正式 SEO 页面被意外标记了 noindex: ${relPath}`, '移除 noindex 标签以允许收录');
    }
  } else {
    stats.indexablePages++;
    if (isNoindexExpected && !relPath.startsWith('go/')) {
      addIssue('WARNING', 'NOINDEX', relPath, `管理/中转页面建议配置 noindex: ${relPath}`, '在页面元数据中设置 noindex={true}');
    }
  }

  // --- Canonical Check ---
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    if (!relPath.startsWith('go/')) {
      addIssue('CRITICAL', 'CANONICAL', relPath, `页面缺少 <link rel="canonical"> 规范标签`, '在 SEOHead 中注入 canonical 标签');
      stats.canonicalErrors++;
    }
  } else {
    const canonical = canonicalMatch[1];
    if (canonical.includes('localhost') || canonical.includes('127.0.0.1')) {
      addIssue('CRITICAL', 'CANONICAL', relPath, `Canonical 指向了本地测试地址: ${canonical}`, '统一使用 https://airportmatrix.org');
      stats.canonicalErrors++;
    }
    if (canonical.includes('?') || canonical.includes('&')) {
      addIssue('CRITICAL', 'CANONICAL', relPath, `Canonical 包含了动态参数: ${canonical}`, '剥离 QueryString');
      stats.canonicalErrors++;
    }
    if (!isNoindexExpected && canonical === siteUrl && relPath !== 'index.html') {
      addIssue('CRITICAL', 'CANONICAL', relPath, `内页 Canonical 错误指向了网站首页: ${canonical}`, '指向当前页面的唯一规范 URL');
      stats.canonicalErrors++;
    }
  }

  // --- Title & H1 Duplicate Check ---
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (titleMatch && !isNoindexExpected) {
    const titleText = titleMatch[1].trim();
    if (titleMap.has(titleText)) {
      stats.duplicateTitles++;
      addIssue('WARNING', 'DUPLICATE_TITLE', relPath, `发现重复 Title: "${titleText}" 与 ${titleMap.get(titleText)} 冲突`, '使每个页面的 Title 保持独立唯一');
    } else {
      titleMap.set(titleText, relPath);
    }
  }

  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (h1Match && !isNoindexExpected) {
    const h1Text = h1Match[1].trim();
    if (h1Map.has(h1Text)) {
      stats.duplicateH1s++;
      // Only warn if they are separate articles/guides
      if (relPath.includes('articles/') || relPath.includes('provider/')) {
        addIssue('WARNING', 'DUPLICATE_H1', relPath, `发现重复 H1: "${h1Text}" 与 ${h1Map.get(h1Text)} 冲突`, '使核心 H1 标题保持独立');
      }
    } else {
      h1Map.set(h1Text, relPath);
    }
  }

  // --- Schema JSON-LD Validation ---
  const schemaMatches = content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  for (const sMatch of schemaMatches) {
    const jsonStr = sMatch.replace(/<\/?script[^>]*>/gi, '').trim();
    try {
      JSON.parse(jsonStr);
    } catch (e) {
      stats.schemaErrors++;
      addIssue('CRITICAL', 'SCHEMA_SYNTAX', relPath, `Schema.org JSON-LD 语法解析错误: ${e.message}`, '修复结构化数据 JSON 语法');
    }
  }

  // --- Internal Link Extraction ---
  const hrefMatches = content.match(/href=["']([^"']+)["']/gi) || [];
  for (const hMatch of hrefMatches) {
    const rawHref = hMatch.replace(/^href=["']|["']$/gi, '').trim();
    if (rawHref.startsWith('/') && !rawHref.startsWith('//')) {
      internalLinksToCheck.push({ source: relPath, target: rawHref });
    } else if (rawHref === '' || rawHref === '#') {
      // Empty link warning
      if (!relPath.startsWith('admin/')) {
        addIssue('WARNING', 'EMPTY_LINK', relPath, `页面包含无效或空链接 href="${rawHref}"`, '修复为正确目标 URL');
      }
    }
  }
}

// 5. Internal Dead Link Verification
const existingRoutes = new Set(
  htmlFiles.map(f => {
    let p = '/' + path.relative(distDir, f).replace(/\\/g, '/');
    if (p.endsWith('/index.html')) p = p.slice(0, -11);
    else if (p === '/index.html') p = '/';
    else if (p.endsWith('.html')) p = p.slice(0, -5);
    return p === '' ? '/' : p;
  })
);

for (const link of internalLinksToCheck) {
  let cleanTarget = link.target.split('#')[0].split('?')[0];
  if (cleanTarget.endsWith('/') && cleanTarget !== '/') {
    cleanTarget = cleanTarget.slice(0, -1);
  }
  if (cleanTarget === '') cleanTarget = '/';

  // Ignore static assets like .svg, .png, .css, .js
  if (cleanTarget.includes('.') && !cleanTarget.endsWith('.html')) continue;

  if (!existingRoutes.has(cleanTarget) && !existingRoutes.has(cleanTarget + '.html')) {
    stats.brokenLinks++;
    addIssue('CRITICAL', 'BROKEN_LINK', link.source, `内部死链: 从 ${link.source} 指向不存在的 URL "${link.target}"`, '修复或删除该死链');
  }
}

// 6. Core URL Availability Check
const coreUrls = [
  '/',
  '/providers',
  '/recommend',
  '/recommend/wizard',
  '/clients',
  '/risks',
  '/articles',
  '/tools',
  '/tools/sub-converter',
  '/tools/ip-check',
];

for (const cUrl of coreUrls) {
  if (!existingRoutes.has(cUrl)) {
    stats.coreUrlsPass = false;
    addIssue('CRITICAL', 'CORE_URL_MISSING', cUrl, `核心重要 SEO 页面未生成: ${cUrl}`, '检查 Astro 对应页面模版');
  }
}

// --- PRINT COMPREHENSIVE REPORT ---
console.log('================================================================');
console.log('                   SEO HEALTH CHECK REPORT                      ');
console.log('================================================================\n');

console.log(`📦 总编译页面数 (Total Pages):       ${stats.totalPages}`);
console.log(`📑 规范可索引页面 (Indexable Pages): ${stats.indexablePages}`);
console.log(`🗺️  Sitemap 洁净 URL 数:             ${stats.sitemapUrls}`);
console.log(`🚫 noindex 隔离页面数:              ${stats.noindexPages}`);
console.log(`🔗 规范 Canonical 异常数:           ${stats.canonicalErrors}`);
console.log(`💔 内部死链数 (Broken Links):       ${stats.brokenLinks}`);
console.log(`🧩 Schema.org 结构化错误:          ${stats.schemaErrors}`);
console.log(`📑 重复 Title / H1 警告:            ${stats.duplicateTitles} / ${stats.duplicateH1s}\n`);

const criticalIssues = issues.filter(i => i.level === 'CRITICAL');
const warningIssues = issues.filter(i => i.level === 'WARNING');

if (issues.length > 0) {
  console.log('--------------------------- 发现问题清单 ---------------------------');
  issues.forEach((iss, idx) => {
    const tag = iss.level === 'CRITICAL' ? '❌ [CRITICAL]' : '⚠️  [WARNING]';
    console.log(`${idx + 1}. ${tag} [${iss.category}] in ${iss.file}:`);
    console.log(`   原因: ${iss.message}`);
    console.log(`   建议: ${iss.fix}\n`);
  });
}

console.log('================================================================');
console.log(`Build:          ${stats.totalPages > 0 ? 'PASS ✅' : 'FAIL ❌'}`);
console.log(`Robots:         ${stats.robotsPass ? 'PASS ✅' : 'FAIL ❌'}`);
console.log(`Noindex:        ${criticalIssues.filter(i => i.category === 'NOINDEX').length === 0 ? 'PASS ✅' : 'FAIL ❌'}`);
console.log(`Canonical:      ${stats.canonicalErrors === 0 ? 'PASS ✅' : 'FAIL ❌'}`);
console.log(`Sitemap:        ${stats.sitemapPass ? 'PASS ✅' : 'FAIL ❌'}`);
console.log(`Internal Links: ${stats.brokenLinks === 0 ? 'PASS ✅' : 'FAIL ❌'}`);
console.log(`Core URLs:      ${stats.coreUrlsPass ? 'PASS ✅' : 'FAIL ❌'}`);
console.log(`Schema:         ${stats.schemaErrors === 0 ? 'PASS ✅' : 'FAIL ❌'}`);
console.log(`Page Count:     ${stats.sitemapUrls >= 40 ? 'PASS ✅' : 'FAIL ❌'}`);
console.log('================================================================\n');

if (criticalIssues.length === 0) {
  console.log('🎉 RELEASE_DECISION: READY (安全门禁检查全部通过，允许发布生产环境)\n');
  process.exit(0);
} else {
  console.log('🛑 RELEASE_DECISION: BLOCKED (存在阻止发布的严重 SEO 隐患，已终止流水线！)\n');
  process.exit(1);
}
