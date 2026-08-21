export interface CategoryPillar {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  metaTitle: string;
  matchedProviderSlugs: string[];
  features: string[];
  buyingGuide: string;
  faqList: Array<{ question: string; answer: string }>;
}

export const categoriesData: CategoryPillar[] = [
  {
    slug: 'ai-access',
    name: '海外 AI 场景专线机场推荐',
    tagline: '针对 ChatGPT、Claude 3.5、Gemini 与 Cursor 代码补全专项优化',
    description: '收录具备原生住宅 IP、低欺诈度评分、专线低延迟直连的优质机场，彻底解决 OpenAI 1020 报错与人机验证死循环。',
    metaTitle: '2026 海外 AI 访问专线机场推荐 (ChatGPT / Claude 原生住宅 IP 解锁榜) - AirportMatrix',
    matchedProviderSlugs: ['guangsucloud', 'sujie', 'u1s1', 'sogoyun', 'jilianyun'],
    features: ['原生住宅 IP 覆盖', '独立 OpenAI 策略组分流', 'WebRTC 防泄漏支持', 'API 高频并发低延迟'],
    buyingGuide: '访问海外 AI 工具时，最关键指标是 IP 纯净度而非单纯的峰值带宽。机房广播 IP 极易被 Cloudflare 识别并封禁。建议选择部署有 IEPL 企业专线并提供原生住宅 IP 的服务商。',
    faqList: [
      {
        question: '为什么普通中转机场访问 ChatGPT 容易报错？',
        answer: '因为大量超低价机场几万人共享同一个机房 IP，极易触发 OpenAI 的反作弊威胁模型。',
      },
    ],
  },
  {
    slug: 'streaming-4k',
    name: '4K/8K 海外流媒体极速机场排行',
    tagline: 'Netflix 多区原生解锁 · YouTube 8K 秒开 · Disney+ · 巴哈姆特动画疯',
    description: '精选大带宽、晚高峰 0 丢包、原生支持多国流媒体版权解锁的高速机场矩阵。',
    metaTitle: '2026 4K/8K 海外流媒体解锁机场推荐 (Netflix / Disney+ / YouTube 4K 秒开) - AirportMatrix',
    matchedProviderSlugs: ['guangsucloud', 'lingmaonet', 'yifanyun', 'kuaili', 'sogoyun'],
    features: ['4K/8K 视频秒开', '支持 Netflix 原生剧集', '双向解锁 Disney+/TikTok', '高峰期不限速'],
    buyingGuide: '看海外视频需要重点关注节点带宽倍率与单线程吞吐能力。专线机场能够保障晚高峰 20:00~23:00 依然能够流畅拖拽 4K 进度条。',
    faqList: [
      {
        question: '流媒体解锁会失效吗？',
        answer: '流媒体平台的封锁是动态博弈。优质大厂通常具备 DNS 解锁与落地 IP 自动漂移轮换机制。',
      },
    ],
  },
  {
    slug: 'budget-under-15',
    name: '15 元以内便宜高性价比月付机场',
    tagline: '拒绝高昂开销 · 14.9 元即享 100GB 专线 · 学生党与轻度办公首选',
    description: '精选起步门槛在 15 元左右的良心服务商，涵盖 VLESS 协议、三网优化与企业级专线。',
    metaTitle: '2026 15元以内便宜月付机场推荐 (14.9元100GB / 学生党高性价比专线) - AirportMatrix',
    matchedProviderSlugs: ['weitucloud', 'yuzhoucloud', 'feimaocloud', 'guangsucloud'],
    features: ['14.9 元月付起', '100GB 充沛月流量', '支持按月续费灵活', 'IEPL 专线保障'],
    buyingGuide: '预算有限的用户建议选择月付 14.9 元档（如唯兔云、宇宙云），或者选择年付均摊 7~8 元档（如飞猫云、光速云）。',
    faqList: [
      {
        question: '15 元以内的机场稳定吗？',
        answer: '我们精选的 15 元品牌均采用真实 IEPL 专线或多地 BGP 入口，不同于容易跑路的不知名垃圾作坊。',
      },
    ],
  },
  {
    slug: 'unlimited-traffic',
    name: '不限时流量包机场专题',
    tagline: '一次购买不过期 · 适合长期轻度备用与多设备低频用户',
    description: '无需按月扣费，流量永久有效，用多少扣多少，为差旅出海与轻度备用量身定制。',
    metaTitle: '2026 不限时流量机场推荐 (一次购买永久不过期 / 备用出海首选) - AirportMatrix',
    matchedProviderSlugs: ['xingdaomeng', 'lingmaonet'],
    features: ['流量永久有效不过期', '无需按月续费', '专线网络支持', '适合低频轻度备用'],
    buyingGuide: '如果您平时出海频率不高，按月付费往往产生浪费。不限时套餐能够让您一次购买 100GB~500GB 流量，长年稳定备用。',
    faqList: [
      {
        question: '不限时套餐会因为服务商跑路失效吗？',
        answer: '请优先选择运营超过 3~5 年的老牌品牌（如星岛梦），杜绝新开作坊的不限时陷阱。',
      },
    ],
  },
  {
    slug: 'annual-discount',
    name: '年付低至 7 元高性价比专线专区',
    tagline: '年付均摊摊薄成本 · 7.5元/月享受 IEPL 企业专线品质',
    description: '通过长周期摊薄物理专线昂贵单价，以平民月均成本获得顶级专线速度。',
    metaTitle: '2026 年付高性价比专线机场推荐 (均摊7.5元/月 / IEPL企业专线) - AirportMatrix',
    matchedProviderSlugs: ['guangsucloud', 'feimaocloud', 'xingdaomeng'],
    features: ['年付折算仅 7-8 元/月', 'IEPL 企业物理专线', 'VLESS 前沿协议', '新人优惠码叠加立减'],
    buyingGuide: '年付折算套餐适合对稳定性有长效要求且追求极致单价的用户，配合光速云【AMM】8折优惠码性价比极高。',
    faqList: [
      {
        question: '年付折算价格怎么理解？',
        answer: '指的是按年一次性支付约 90 元左右，包含全年每月高速专线配额，折算每月仅 7.5 元。',
      },
    ],
  },
];
