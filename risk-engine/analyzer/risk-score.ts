/**
 * Risk Scoring Engine (0 - 100 Scale)
 */

export interface RiskEvaluation {
  riskScore: number;
  level: 'normal' | 'observe' | 'warning' | 'critical';
  statusText: string;
  signals: string[];
}

export function calculateRiskScore(params: {
  websiteStatus: 'up' | 'warning' | 'down';
  sslValid: boolean;
  sslDaysRemaining: number;
  domainChanged: boolean;
  channelSignalWeight: number;
}): RiskEvaluation {
  let score = 5; // base healthy baseline
  const signals: string[] = [];

  if (params.websiteStatus === 'down') {
    score += 50;
    signals.push('website_down');
  } else if (params.websiteStatus === 'warning') {
    score += 20;
    signals.push('http_warning');
  }

  if (!params.sslValid || params.sslDaysRemaining === 0) {
    score += 30;
    signals.push('ssl_expired');
  } else if (params.sslDaysRemaining < 15) {
    score += 10;
    signals.push('ssl_expiring_soon');
  }

  if (params.domainChanged) {
    score += 20;
    signals.push('domain_change');
  }

  if (params.channelSignalWeight > 0) {
    score += params.channelSignalWeight;
    signals.push('announcement_anomaly');
  }

  // Cap at 100
  score = Math.min(100, Math.max(0, score));

  let level: 'normal' | 'observe' | 'warning' | 'critical' = 'normal';
  let statusText = '🟢 正常运行';

  if (score >= 81) {
    level = 'critical';
    statusText = '🔴 跑路/极高风险';
  } else if (score >= 61) {
    level = 'warning';
    statusText = '🟠 高风险';
  } else if (score >= 31) {
    level = 'observe';
    statusText = '🟡 重点观察';
  } else {
    level = 'normal';
    statusText = '🟢 正常运行';
  }

  return {
    riskScore: score,
    level,
    statusText,
    signals,
  };
}
