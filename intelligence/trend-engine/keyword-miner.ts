/**
 * Search Intelligence Engine (搜索机会挖掘机)
 * Discovers search trends, calculates Opportunity Scores, and feeds the content queue.
 */

export interface KeywordOpportunity {
  id: string;
  keyword: string;
  searchIntent: 'troubleshooting' | 'tutorial' | 'comparison' | 'recommendation' | 'commercial';
  searchVolumeGrowth: number;  // percentage e.g. 180 = +180%
  commercialValueScore: number; // 1 - 10
  intentClarityScore: number;   // 1 - 10
  contentValueScore: number;    // 1 - 10
  difficultyScore: number;      // 1 - 10
  opportunityScore: number;     // 0 - 100 calculated
  suggestedTemplate: 'faq' | 'tutorial' | 'entity' | 'compare';
  targetEntities: { id: string; type: string }[];
  discoveredAt: string;
}

export function calculateOpportunityScore(params: {
  searchVolumeGrowth: number;
  commercialValueScore: number;
  intentClarityScore: number;
  contentValueScore: number;
  difficultyScore: number;
}): number {
  const growthPart = Math.min(30, params.searchVolumeGrowth * 0.15);
  const commercialPart = params.commercialValueScore * 3.5;
  const intentPart = params.intentClarityScore * 2.0;
  const contentPart = params.contentValueScore * 1.5;
  const difficultyPenalty = params.difficultyScore * 2.0;

  const rawScore = growthPart + commercialPart + intentPart + contentPart - difficultyPenalty;
  return Math.min(100, Math.max(10, Math.round(rawScore)));
}

export function mineSearchOpportunities(): KeywordOpportunity[] {
  const rawCandidateKeywords = [
    {
      keyword: 'ChatGPT 1020 Access Denied 报错怎么解决',
      searchIntent: 'troubleshooting' as const,
      searchVolumeGrowth: 180,
      commercialValueScore: 9.6,
      intentClarityScore: 9.5,
      contentValueScore: 9.8,
      difficultyScore: 3.0,
      suggestedTemplate: 'faq' as const,
      targetEntities: [
        { id: 'chatgpt_1020', type: 'issue' },
        { id: 'guangsucloud', type: 'provider' },
      ],
    },
    {
      keyword: 'Clash Verge Rev TUN 模式与全局分流配置全教程',
      searchIntent: 'tutorial' as const,
      searchVolumeGrowth: 240,
      commercialValueScore: 8.9,
      intentClarityScore: 9.8,
      contentValueScore: 9.5,
      difficultyScore: 2.5,
      suggestedTemplate: 'tutorial' as const,
      targetEntities: [
        { id: 'clash-verge', type: 'client' },
        { id: 'vless', type: 'protocol' },
      ],
    },
    {
      keyword: '光速云 2026 深度评测：9Gbps实测与IEPL专线质量分析',
      searchIntent: 'commercial' as const,
      searchVolumeGrowth: 120,
      commercialValueScore: 9.9,
      intentClarityScore: 9.0,
      contentValueScore: 9.2,
      difficultyScore: 2.0,
      suggestedTemplate: 'entity' as const,
      targetEntities: [
        { id: 'guangsucloud', type: 'provider' },
        { id: 'iepl', type: 'route' },
      ],
    },
    {
      keyword: '光速云对比星岛梦：不限时流量包与极速专线深度对决',
      searchIntent: 'comparison' as const,
      searchVolumeGrowth: 110,
      commercialValueScore: 9.5,
      intentClarityScore: 9.2,
      contentValueScore: 9.0,
      difficultyScore: 2.2,
      suggestedTemplate: 'compare' as const,
      targetEntities: [
        { id: 'guangsucloud', type: 'provider' },
        { id: 'xingdaomeng', type: 'provider' },
      ],
    },
    {
      keyword: 'Shadowrocket 小火箭一键订阅导入与规则分流新手指南',
      searchIntent: 'tutorial' as const,
      searchVolumeGrowth: 190,
      commercialValueScore: 9.0,
      intentClarityScore: 9.6,
      contentValueScore: 9.2,
      difficultyScore: 2.8,
      suggestedTemplate: 'tutorial' as const,
      targetEntities: [
        { id: 'shadowrocket', type: 'client' },
        { id: 'u1s1', type: 'provider' },
      ],
    },
  ];

  const now = new Date().toISOString();

  return rawCandidateKeywords.map((k, index) => {
    const oppScore = calculateOpportunityScore({
      searchVolumeGrowth: k.searchVolumeGrowth,
      commercialValueScore: k.commercialValueScore,
      intentClarityScore: k.intentClarityScore,
      contentValueScore: k.contentValueScore,
      difficultyScore: k.difficultyScore,
    });

    return {
      id: `task_${Date.now()}_0${index + 1}`,
      keyword: k.keyword,
      searchIntent: k.searchIntent,
      searchVolumeGrowth: k.searchVolumeGrowth,
      commercialValueScore: k.commercialValueScore,
      intentClarityScore: k.intentClarityScore,
      contentValueScore: k.contentValueScore,
      difficultyScore: k.difficultyScore,
      opportunityScore: oppScore,
      suggestedTemplate: k.suggestedTemplate,
      targetEntities: k.targetEntities,
      discoveredAt: now,
    };
  });
}
