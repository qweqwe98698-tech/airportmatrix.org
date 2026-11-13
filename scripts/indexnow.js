import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const HOST = 'airportmatrix.org';
const INDEXNOW_KEY = 'efcc1c0aece448bca27cb8fb5cf3d3e8';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

/**
 * Collect canonical URLs from built sitemap XMLs in dist/, falling back to source data files.
 */
function collectUrls() {
  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    const sitemapFiles = fs
      .readdirSync(distDir)
      .filter((name) => /^sitemap-\d+\.xml$/i.test(name));

    if (sitemapFiles.length > 0) {
      const urls = new Set();
      for (const file of sitemapFiles) {
        const xml = fs.readFileSync(path.join(distDir, file), 'utf-8');
        const matches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
        for (const match of matches) {
          const url = match.replace(/<\/?loc>/g, '').trim();
          if (url) urls.add(url);
        }
      }
      if (urls.size > 0) {
        return [...urls];
      }
    }
  }

  // Fallback when dist/ has not been built yet
  const extractSlugs = (fileName) => {
    const filePath = path.join(rootDir, 'src/data', fileName);
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf-8');
    const slugs = new Set();
    const regex = /["']?slug["']?\s*:\s*["']([^"']+)["']/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
      slugs.add(m[1]);
    }
    return [...slugs];
  };

  const matrixDir = path.join(rootDir, 'src/data/matrix-articles');
  const matrixSlugs = fs.existsSync(matrixDir)
    ? fs
        .readdirSync(matrixDir)
        .filter((f) => f.endsWith('.json'))
        .map((f) => f.replace(/\.json$/, ''))
    : [];

  return [
    `https://${HOST}/`,
    `https://${HOST}/providers`,
    `https://${HOST}/recommend`,
    `https://${HOST}/recommend/wizard`,
    `https://${HOST}/clients`,
    `https://${HOST}/protocols`,
    `https://${HOST}/routes`,
    `https://${HOST}/ai`,
    `https://${HOST}/streaming`,
    `https://${HOST}/risks`,
    `https://${HOST}/articles`,
    `https://${HOST}/tools`,
    `https://${HOST}/tools/sub-converter`,
    `https://${HOST}/tools/ip-check`,
    ...extractSlugs('providers.data.ts').map((s) => `https://${HOST}/provider/${s}`),
    ...extractSlugs('articles.data.ts').map((s) => `https://${HOST}/articles/${s}`),
    ...matrixSlugs.map((s) => `https://${HOST}/articles/${s}`),
    ...extractSlugs('categories.data.ts').map((s) => `https://${HOST}/category/${s}`),
    ...extractSlugs('comparisons.data.ts').map((s) => `https://${HOST}/compare/${s}`),
    ...extractSlugs('clients.data.ts').map((s) => `https://${HOST}/client/${s}`),
    ...extractSlugs('protocols.data.ts').map((s) => `https://${HOST}/protocol/${s}`),
    ...extractSlugs('routes.data.ts').map((s) => `https://${HOST}/route/${s}`),
  ];
}

/**
 * Ensure the IndexNow verification file exists in public/ and optionally submit URLs.
 */
export async function submitIndexNow({ dryRun = false } = {}) {
  const publicDir = path.join(rootDir, 'public');
  const keyFilePath = path.join(publicDir, `${INDEXNOW_KEY}.txt`);
  fs.writeFileSync(keyFilePath, INDEXNOW_KEY, 'utf-8');
  console.log(`✅ IndexNow 验证密钥文件已就绪: public/${INDEXNOW_KEY}.txt`);

  const urlList = [...new Set(collectUrls())];
  console.log(`🌐 准备推送 ${urlList.length} 个生产 URL 至 IndexNow (${KEY_LOCATION})...`);

  if (dryRun) {
    console.log('🧪 [Dry Run] 仅校验密钥与 URL 列表，跳过远程 API 提交。');
    console.log(`   示例 URL (前 5 条): ${urlList.slice(0, 5).join(', ')}`);
    return;
  }

  const batchSize = 10000;
  for (let i = 0; i < urlList.length; i += batchSize) {
    const batch = urlList.slice(i, i + batchSize);
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch,
    };

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    if (!response.ok) {
      throw new Error(
        `IndexNow API 返回异常 (${response.status} ${response.statusText}): ${responseText}`
      );
    }

    console.log(
      `📡 IndexNow 提交成功 (HTTP ${response.status})：已提交 ${batch.length} 条 URL`
    );
  }
}

const isDryRun = process.argv.includes('--dry-run');
const isDirectRun =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectRun) {
  submitIndexNow({ dryRun: isDryRun }).catch((err) => {
    console.error('❌ IndexNow 提交失败:', err.message || err);
    process.exit(1);
  });
}
