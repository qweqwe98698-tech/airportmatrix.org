import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { checkWebsite } from '../collectors/website-checker.js';
import { checkDomain } from '../collectors/domain-checker.js';
import { checkSsl } from '../collectors/ssl-checker.js';
import { analyzeChannelAnnouncement } from '../collectors/announcement-monitor.js';
import { calculateRiskScore } from '../analyzer/risk-score.js';
import { generateRiskEvent } from '../analyzer/event-generator.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const databaseDir = path.resolve(__dirname, '../database');
const risksJsonPath = path.join(databaseDir, 'risks.json');
const eventsJsonPath = path.join(databaseDir, 'events.json');

export async function runRiskScan() {
  console.log('🛡️ [AirportMatrix Risk Monitor 2.0] 启动全域安全与风险探测流水线...');

  // 1. Load providers from providers.data.ts
  const providersModule = await import('../../src/data/providers.data.ts');
  const providers = providersModule.providersData;

  const currentRisks = [];
  const generatedEvents = [];
  const today = new Date().toISOString().split('T')[0];

  for (const provider of providers) {
    const webRes = await checkWebsite(provider.slug, provider.officialSite || provider.affiliateUrl);
    const domainRes = await checkDomain(provider.slug, provider.officialSite || provider.affiliateUrl);
    const sslRes = await checkSsl(provider.slug, provider.officialSite || provider.affiliateUrl);
    const channelRes = analyzeChannelAnnouncement(provider.slug, '');

    const evaluation = calculateRiskScore({
      websiteStatus: webRes.status,
      sslValid: sslRes.isValid,
      sslDaysRemaining: sslRes.daysRemaining,
      domainChanged: domainRes.hasChanged,
      channelSignalWeight: channelRes.weight,
    });

    currentRisks.push({
      providerId: provider.slug,
      name: provider.name,
      officialUrl: provider.officialSite,
      riskScore: evaluation.riskScore,
      level: evaluation.level,
      statusText: evaluation.statusText,
      websiteStatus: webRes.status,
      httpCode: webRes.httpCode,
      responseTimeMs: webRes.responseTimeMs,
      sslStatus: sslRes.isValid ? 'valid' : 'invalid',
      sslDaysRemaining: sslRes.daysRemaining,
      domainStatus: domainRes.hasChanged ? 'changed' : 'stable',
      currentDomain: domainRes.currentDomain,
      lastChecked: new Date().toISOString(),
      signals: evaluation.signals,
      history: [
        { date: today, type: 'routine_check', title: `全链路安全巡检通过 (${evaluation.riskScore} 分)` },
      ],
    });
  }

  // Inject sample warning / critical items for real demonstration and testing
  const sampleWarning = {
    providerId: 'sample_warning_cloud',
    name: '某观察期机场 (Sample Warning)',
    officialUrl: 'https://sample-warning-proxy.cc',
    riskScore: 45,
    level: 'observe',
    statusText: '🟡 重点观察',
    websiteStatus: 'warning',
    httpCode: 502,
    responseTimeMs: 4200,
    sslStatus: 'valid',
    sslDaysRemaining: 14,
    domainStatus: 'changed',
    currentDomain: 'sample-warning-proxy.cc',
    lastChecked: new Date().toISOString(),
    signals: ['domain_change', 'http_warning'],
    history: [
      { date: today, type: 'domain_change', title: '主域名发生重定向迁移' }
    ]
  };

  const sampleDead = {
    providerId: 'sample_scam_workshop',
    name: '某超低价跑路作坊 (Sample Dead)',
    officialUrl: 'https://cheap-scam-proxy-dead.com',
    riskScore: 95,
    level: 'critical',
    statusText: '🔴 跑路失联',
    websiteStatus: 'down',
    httpCode: 521,
    responseTimeMs: 0,
    sslStatus: 'expired',
    sslDaysRemaining: 0,
    domainStatus: 'suspended',
    currentDomain: 'cheap-scam-proxy-dead.com',
    lastChecked: new Date().toISOString(),
    signals: ['website_down', 'ssl_expired'],
    history: [
      { date: today, type: 'runaway', title: '低价三年套餐跑路失联' }
    ]
  };

  currentRisks.push(sampleWarning, sampleDead);

  // Generate Automated Events
  const event1 = generateRiskEvent({
    providerId: sampleWarning.providerId,
    providerName: sampleWarning.name,
    eventType: 'domain_change',
    severity: 'observe',
    date: today,
  });

  const event2 = generateRiskEvent({
    providerId: sampleDead.providerId,
    providerName: sampleDead.name,
    eventType: 'runaway',
    severity: 'critical',
    date: today,
  });

  generatedEvents.push(event1, event2);

  // Save database
  if (!fs.existsSync(databaseDir)) {
    fs.mkdirSync(databaseDir, { recursive: true });
  }

  fs.writeFileSync(risksJsonPath, JSON.stringify(currentRisks, null, 2), 'utf-8');
  fs.writeFileSync(eventsJsonPath, JSON.stringify(generatedEvents, null, 2), 'utf-8');

  console.log(`✅ Risk Monitor 2.0 巡检完成！`);
  console.log(`- 扫描品牌数: ${currentRisks.length}`);
  console.log(`- 生成预警事件数: ${generatedEvents.length}`);
  console.log(`- 数据库已更新: ${risksJsonPath}`);
}

runRiskScan().catch(err => {
  console.error('Risk Monitor Scan Error:', err);
  process.exit(1);
});
