export interface ComparisonPair {
  slug: string;
  name: string;
  itemA: string;
  itemB: string;
  type: 'provider' | 'protocol' | 'route';
  tagline: string;
  verdict: string;
  comparisonPoints: Array<{
    dimension: string;
    itemAValue: string;
    itemBValue: string;
    analysis: string;
  }>;
}

export const comparisonsData: ComparisonPair[] = [
  {
    slug: 'guangsucloud-vs-xingdaomeng',
    name: '光速云 vs 星岛梦',
    itemA: 'guangsucloud',
    itemB: 'xingdaomeng',
    type: 'provider',
    tagline: '2020老牌双雄对决：全IEPL极速专线 vs 不限时丰富套餐体系',
    verdict: '若追求极致的 9Gbps 测速满速（400MB/s+）、VLESS 协议与 ChatGPT 原生全绿解锁，首选【光速云】；若偏好不限时流量包长效备用，【星岛梦】更具灵活性。',
    comparisonPoints: [
      {
        dimension: '开业运营年限',
        itemAValue: '2020 年运营（超6年）',
        itemBValue: '2020 年运营（超6年）',
        analysis: '两家均为 2020 年成立的老牌服务商，稳定性与抗风险能力均属第一梯队。',
      },
      {
        dimension: '起步价格与周期',
        itemAValue: '年付折算约 7.5 元/月 (59GB起)',
        itemBValue: '年付折算约 8.0 元/月 (60GB起)',
        analysis: '光速云年付起步单价略低，且叠加 8 折优惠码【AMM】后实付约 6 元/月。',
      },
      {
        dimension: '测速与协议特性',
        itemAValue: 'IEPL专线 + VLESS 协议 (峰值 500MB/s)',
        itemBValue: '企业专线 + 不限时流量包',
        analysis: '光速云在极限大带宽与 FullCone UDP 上表现更为彪悍。',
      },
    ],
  },
  {
    slug: 'u1s1-vs-yifanyun',
    name: 'U1S1 机场 vs 一翻云',
    itemA: 'u1s1',
    itemB: 'yifanyun',
    type: 'provider',
    tagline: '20元月付主力对决：120GB均衡专线 vs 150GB超大配额',
    verdict: '如果追求 20 元价格下的最大流量，【一翻云】提供 150GB 胜出；如果追求官方自研客户端与更广的客户端生态，【U1S1】更均衡。',
    comparisonPoints: [
      {
        dimension: '月流量配额',
        itemAValue: '120 GB / 月',
        itemBValue: '150 GB / 月',
        analysis: '一翻云每月多出 30GB 配额，大流量追剧性价比更高。',
      },
      {
        dimension: '专线类型与协议',
        itemAValue: 'IEPL 专线 + VLESS',
        itemBValue: 'IEPL 专线 + VLESS',
        analysis: '两者底层均采用现代化 VLESS + IEPL 专线架构。',
      },
    ],
  },
  {
    slug: 'weitucloud-vs-yuzhoucloud',
    name: '唯兔云 vs 宇宙云',
    itemA: 'weitucloud',
    itemB: 'yuzhoucloud',
    type: 'provider',
    tagline: '14.9元超低门槛月付对决：60+节点三网优化 vs IEPL纯专线',
    verdict: '注重多地区节点覆盖与三网智能调度选【唯兔云】（60+节点、用码 9 折）；偏好 IEPL 物理专线点对点低延迟选【宇宙云】。',
    comparisonPoints: [
      {
        dimension: '节点数量与覆盖',
        itemAValue: '60+ 落地节点池 (三网优化)',
        itemBValue: '46+ 核心专线节点',
        analysis: '唯兔云在冷门地区与备用节点数量上更有优势。',
      },
      {
        dimension: '月付门槛',
        itemAValue: '14.9 元 / 月 (100GB)',
        itemBValue: '14.9 元 / 月 (100GB)',
        analysis: '两者均为目前市场极具诚意的 15 元档月付代表。',
      },
    ],
  },
];
