import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const taskQueuePath = path.resolve(__dirname, '../intelligence/content-engine/task-queue.json');

async function autoGenerateContent() {
  console.log('🤖 [AirportMatrix AI Content Engine] 执行全自动搜索智能与内容生成流水线...');

  const { mineSearchOpportunities } = await import('../intelligence/trend-engine/keyword-miner.ts');
  const tasks = mineSearchOpportunities();

  if (!fs.existsSync(path.dirname(taskQueuePath))) {
    fs.mkdirSync(path.dirname(taskQueuePath), { recursive: true });
  }

  fs.writeFileSync(taskQueuePath, JSON.stringify(tasks, null, 2), 'utf-8');
  console.log(`✅ [Search Intelligence] 成功挖掘 ${tasks.length} 条高价值关键词机会，并已写入任务队列：`);
  tasks.forEach((t, i) => {
    console.log(`   ${i + 1}. [${t.suggestedTemplate.toUpperCase()}] ${t.keyword} (机会分: ${t.opportunityScore} | 增长: +${t.searchVolumeGrowth}%)`);
  });

  const { runContentEnginePipeline } = await import('../intelligence/content-engine/orchestrator.ts');
  const articles = runContentEnginePipeline();

  console.log(`\n🎉 内容生成引擎就绪！成功产出 ${articles.length} 篇 5.0 结构化实体文章。`);
}

autoGenerateContent().catch(err => {
  console.error('Content Engine Error:', err);
  process.exit(1);
});
