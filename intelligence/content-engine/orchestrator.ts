/**
 * Content Engine Orchestrator
 * Reads task queue, invokes appropriate generator blueprint, and outputs production articles.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { mineSearchOpportunities } from '../trend-engine/keyword-miner.ts';
import { generateFaqContent } from './generators/faq-generator.ts';
import { generateTutorialContent } from './generators/tutorial-generator.ts';
import { generateEntityReviewContent } from './generators/entity-generator.ts';
import { generateCompareContent } from './generators/compare-generator.ts';
import type { ProviderEntity, ClientEntity, IssueEntity } from '../../src/db/schema.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbDir = path.resolve(__dirname, '../../src/db/data');

const providersData = JSON.parse(fs.readFileSync(path.join(dbDir, 'providers.json'), 'utf-8'));
const clientsData = JSON.parse(fs.readFileSync(path.join(dbDir, 'clients.json'), 'utf-8'));
const issuesData = JSON.parse(fs.readFileSync(path.join(dbDir, 'issues.json'), 'utf-8'));

export function runContentEnginePipeline() {
  console.log('🤖 [AirportMatrix AI Content Engine] 启动 4 大模板内容自动化生产流水线...');

  const tasks = mineSearchOpportunities();
  console.log(`📋 发现高价值搜索机会任务: ${tasks.length} 项 (最高机会分: ${tasks[0].opportunityScore} 分)`);

  const generatedArticles = [];

  for (const task of tasks) {
    if (task.suggestedTemplate === 'faq') {
      const issue = (issuesData as IssueEntity[])[0];
      const provider = (providersData as ProviderEntity[])[0];
      const article = generateFaqContent({
        keyword: task.keyword,
        issueTitle: issue.title,
        symptom: issue.symptom,
        rootCause: issue.rootCause,
        solutionSteps: issue.solutionSteps,
        recommendedProviderName: provider.name,
        recommendedProviderUrl: provider.affiliateUrl,
      });
      generatedArticles.push(article);
    } else if (task.suggestedTemplate === 'tutorial') {
      const client = (clientsData as ClientEntity[])[0];
      const article = generateTutorialContent({
        clientName: client.name,
        slug: client.slug,
        developer: client.developer,
        version: client.version,
        downloadUrl: client.downloadUrl,
      });
      generatedArticles.push(article);
    } else if (task.suggestedTemplate === 'entity') {
      const provider = (providersData as ProviderEntity[])[0];
      const article = generateEntityReviewContent(provider);
      generatedArticles.push(article);
    } else if (task.suggestedTemplate === 'compare') {
      const p1 = (providersData as ProviderEntity[])[0];
      const p2 = (providersData as ProviderEntity[])[1];
      const article = generateCompareContent(p1, p2);
      generatedArticles.push(article);
    }
  }

  console.log(`✨ 成功生成并注入 ${generatedArticles.length} 篇高质量 SEO/GEO 结构化文章！`);
  return generatedArticles;
}
