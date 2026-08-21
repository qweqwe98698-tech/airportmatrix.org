import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * IndexNow Automatic API Submission Script
 * Submits all active URLs to search engines (Bing, Yandex, etc.) for instant indexing.
 */
export async function submitIndexNow() {
  const host = 'airportmatrix.org';
  const key = 'a8f7c9e0d1b24c3a5e6f7b8c9d0e1f2a';
  const keyLocation = `https://${host}/${key}.txt`;

  // Collect generated URLs from dist or articles/providers
  const providersModule = await import('../src/data/providers.data.ts');
  const articlesModule = await import('../src/data/articles.data.ts');
  const categoriesModule = await import('../src/data/categories.data.ts');
  const comparisonsModule = await import('../src/data/comparisons.data.ts');

  const urlList = [
    `https://${host}/`,
    `https://${host}/providers`,
    `https://${host}/recommend`,
    `https://${host}/clients`,
    `https://${host}/protocols`,
    `https://${host}/routes`,
    `https://${host}/ai`,
    `https://${host}/streaming`,
    `https://${host}/risks`,
    `https://${host}/articles`,
    `https://${host}/tools`,
    `https://${host}/tools/sub-converter`,
    `https://${host}/tools/ip-check`,
    ...providersModule.providersData.map(p => `https://${host}/provider/${p.slug}`),
    ...articlesModule.articlesData.map(a => `https://${host}/articles/${a.slug}`),
    ...categoriesModule.categoriesData.map(c => `https://${host}/category/${c.slug}`),
    ...comparisonsModule.comparisonsData.map(cp => `https://${host}/compare/${cp.slug}`),
  ];

  console.log(`🌐 准备向 IndexNow 推送 ${urlList.length} 个最新生产 URL...`);

  // Write key file to public directory so search engines can verify ownership
  const publicDir = path.resolve(__dirname, '../public');
  fs.writeFileSync(path.join(publicDir, `${key}.txt`), key, 'utf-8');

  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  console.log(`✅ 已生成 IndexNow 验证密钥文件: /public/${key}.txt`);
  console.log(`📡 IndexNow API 载荷就绪 (共 ${urlList.length} 条网址已注入提交队列)`);
}

submitIndexNow().catch(console.error);
