import { db } from '@/data/db';

export interface KeywordMatrixItem {
  keyword: string;
  cluster:
    | 'commercial_recommendation'
    | 'basic_education'
    | 'client_tutorial'
    | 'route_and_protocol'
    | 'ai_solution'
    | 'streaming_unlock'
    | 'overseas_sites'
    | 'troubleshooting'
    | 'brand_review'
    | 'risk_monitor';
  type: string[];
  search_intent: 'solution' | 'comparison' | 'informational' | 'transactional';
  trend_score: number;
  metrics: {
    growth: number;
    competition: number;
    commercial: number;
  };
  recommended_content: string[];
  target_url: string;
  depth_level: 'D1' | 'D2' | 'D3' | 'D4' | 'D5' | 'D6';
  related_entities: string[];
}

export const KEYWORD_CLUSTERS = [
  { id: 'commercial_recommendation', name: '机场推荐商业词', targetCount: 150, intent: '转化与对比' },
  { id: 'basic_education', name: '机场代理基础词', targetCount: 120, intent: '教育与概念科普' },
  { id: 'client_tutorial', name: '客户端教程词', targetCount: 200, intent: '高流量入口与配置' },
  { id: 'route_and_protocol', name: '协议线路词', targetCount: 120, intent: '专业流量与技术解析' },
  { id: 'ai_solution', name: 'AI 访问词', targetCount: 120, intent: '高商业价值与开发者' },
  { id: 'streaming_unlock', name: '流媒体词', targetCount: 80, intent: '场景解锁与影音' },
  { id: 'overseas_sites', name: '海外网站访问词', targetCount: 60, intent: '工作流与跨境需求' },
  { id: 'troubleshooting', name: '故障排查词', targetCount: 100, intent: 'GEO 答案与排错' },
  { id: 'brand_review', name: '品牌评测词', targetCount: 50, intent: '品牌转化与履约' },
] as const;

export const keywordsDatabase: KeywordMatrixItem[] = db.keywords as unknown as KeywordMatrixItem[];

/**
 * 计算搜索机会评分 (Search Opportunity Score)
 * 模型: 搜索增长 + 商业价值 + 意图明确度 - 竞争难度
 */
export function calculateOpportunityScore(item: KeywordMatrixItem): number {
  const { growth, commercial, competition } = item.metrics;
  const score = growth * 0.4 + commercial * 0.4 + item.trend_score * 0.3 - competition * 0.1;
  return Math.min(100, Math.max(0, Math.round(score)));
}

/**
 * 根据搜索意图获取高价值候选词
 */
export function getKeywordsByCluster(clusterId: string): KeywordMatrixItem[] {
  return keywordsDatabase.filter((k) => k.cluster === clusterId);
}

/**
 * Topic Bridge: 根据当前 URL 或关键词，生成上下游自然延伸推荐
 */
export function getTopicBridgeRecommendations(currentPath: string, limit = 4) {
  return keywordsDatabase
    .filter((k) => k.target_url !== currentPath)
    .sort((a, b) => b.trend_score - a.trend_score)
    .slice(0, limit)
    .map((k) => ({
      title: k.keyword,
      href: k.target_url,
      desc: `针对【${k.keyword}】的深度解决方案与权威指南（${k.depth_level} 深度标准）。`,
      type: k.search_intent.toUpperCase(),
    }));
}
