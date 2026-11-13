export interface CategoryPillar {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  metaTitle: string;
  quickAnswer: string;
  matchedProviderSlugs: string[];
  recommendedArticleSlugs: string[];
  relatedCategorySlugs: string[];
  features: string[];
  buyingGuide: string;
  faqList: Array<{ question: string; answer: string }>;
}

export const categoriesData: CategoryPillar[] = [
  {
    slug: 'cost-effective',
    name: '2026 高性价比机场推荐排行榜',
    tagline: '实测对比 2026 好用的性价比机场 · 月均 7.5~15 元享受稳定 IEPL 专线节点',
    description: '基于真实宽带测速、晚高峰连通率与单 GB 流量成本，严选 2026 年好用的高性价比机场推荐名单，拒绝跑路作坊与虚标节点。',
    metaTitle: '2026 性价比机场推荐排行榜 (好用的高性价比机场实测对比)',
    quickAnswer: '2026 年选高性价比机场优先看“运营年限 ≥ 2 年 + IEPL/BGP 稳定线路 + 有效单 GB 价格”。年付追求极致低价可选光速云（均摊约 7.5 元/月，优惠码 AMM）或飞猫云（约 7.0 元/月）；偏好灵活月付试错推荐唯兔云、宇宙云（14.9 元/100GB）及 U1S1 机场（20 元/120GB）；看重老牌稳定与不限时备用可重点对比星岛梦。',
    matchedProviderSlugs: ['guangsucloud', 'muguang', 'feimaocloud', 'weifeng', 'u1s1', 'weitucloud', 'yuzhoucloud', 'xingdaomeng', 'wuyou', 'firefly'],
    recommendedArticleSlugs: [
      'cost-effective-airport-buying-guide-2026',
      'airport-review-methodology-and-2026-evaluation',
      'guangsucloud-in-depth-review-2026',
      'muguang-in-depth-review-2026',
      'weifeng-in-depth-review-2026',
      'wuyou-in-depth-review-2026',
      'xingdaomeng-in-depth-review-2026',
    ],
    relatedCategorySlugs: ['budget-under-15', 'annual-discount', 'clash-recommend'],
    features: ['月付 14.9 元 / 年付 7.5 元起', '真实 IEPL/BGP 稳定机场节点', '兼容 Clash / 小火箭一键订阅', '全天候跑路风险监控绿灯'],
    buyingGuide: '挑选性价比机场不能只看“每月几块钱”，更要算清有效流量单价与晚高峰可用率。我们建议首选运营超过 2 年、支持月付试错的口碑机场（如光速云、U1S1、唯兔云、星岛梦），既有低至 7.5~15 元/月的亲民定价，又能保证晚高峰 4K 不卡顿与 ChatGPT 稳定解锁。',
    faqList: [
      {
        question: '2026 年性价比高的好用机场怎么选？',
        answer: '优先看三点：1) 价格在每月 10~20 元区间且流量≥100GB；2) 线路至少为 BGP 中转或 IEPL 专线，避开纯直连超售节点；3) 支持 Clash Verge、小火箭一键导入并有独立工单客服。',
      },
      {
        question: '性价比机场一般多久续费一次最划算？',
        answer: '首次使用建议先购买月付套餐测试本地宽带（电信/联通/移动）晚高峰速度，确认稳定好用后再选择季付或年付，年付通常可均摊至每月 7.5~10 元。',
      },
      {
        question: '超低价甚至免费公益机场能长期当主力吗？',
        answer: '不建议。免费或几元不限流量的超低价节点普遍采用公共共享入口，存在晚高峰丢包严重、IP 被 ChatGPT 封禁及隐私记录风险。日常开发与流媒体建议选择 14.9 元档以上的独立订阅。',
      },
    ],
  },
  {
    slug: 'clash-recommend',
    name: '2026 Clash 机场推荐与订阅配置精选',
    tagline: '专为 Clash Verge Rev / Mihomo / Clash Meta 优化 · 一键导入机场订阅与自动分流',
    description: '实测精选完美适配 Clash 客户端的好用机场推荐榜单，原生提供 Mihomo 规则集、TUN 模式支持与低延迟高速机场节点，导入即用。',
    metaTitle: '2026 Clash 机场推荐排行榜 (适配 Clash Verge / Mihomo 一键订阅)',
    quickAnswer: '2026 年推荐使用桌面端开源客户端 Clash Verge Rev（基于 Mihomo 内核）或跨平台 sing-box，搭配原生下发 Clash YAML 规则集的专线机场。光速云、U1S1、星岛梦、灵猫网络与唯兔云均支持订阅链接一键导入，并内置国内外分流与 ChatGPT 独立策略组；若客户端不识别订阅格式，可使用站内离线机场订阅转换工具即时转码。',
    matchedProviderSlugs: ['guangsucloud', 'u1s1', 'xingdaomeng', 'weifeng', 'wuyou', 'lingmaonet', 'weitucloud', 'sogoyun'],
    recommendedArticleSlugs: [
      'clash-airport-github-client-and-subscription-guide',
      'clash-verge-rev-complete-tutorial',
      'node-timeout-troubleshooting-guide',
      'cost-effective-airport-buying-guide-2026',
    ],
    relatedCategorySlugs: ['cost-effective', 'airport-nodes', 'ai-access'],
    features: ['原生兼容 Clash Verge Rev / Mihomo', '订阅自带精细化国内外分流规则', '支持 VLESS / Hysteria2 / Trojan', '一键切换 AI 与流媒体专属节点'],
    buyingGuide: '使用 Clash（尤其是 Clash Verge Rev、Clash Nyanpasu 等 Mihomo 内核客户端）时，建议选择订阅下发格式规范、内置完整 GeoSite/GeoIP 分流规则且支持自动测速优选（url-test）的机场，可避免手动写规则的麻烦，大幅提升日常访问体验。',
    faqList: [
      {
        question: '哪些机场最适合搭配 Clash Verge Rev 使用？',
        answer: '榜单中收录的光速云、U1S1、星岛梦、灵猫网络等均提供标准 Clash/Mihomo 订阅链接，点击“一键导入”即可自动同步香港、日本、新加坡、美国等全部节点与分流策略。',
      },
      {
        question: 'Clash 导入机场订阅后节点全部超时怎么办？',
        answer: '先检查电脑系统时间是否自动同步、是否关闭了其他冲突代理软件或旧版 Clash，再更新一次订阅链接；若仍超时，可参考站内节点超时排查指南逐步定位。',
      },
      {
        question: 'GitHub 上的开源 Clash 客户端安全吗？需要自己买机场节点吗？',
        answer: 'GitHub 上的 Clash Verge Rev、Clash Nyanpasu、sing-box 属于纯开源代理客户端（类似浏览器内核），本身不含可用节点，需搭配可信机场提供的加密订阅链接才能联网。请仅从项目官方 GitHub Release 下载安装包。',
      },
    ],
  },
  {
    slug: 'airport-nodes',
    name: '2026 稳定高速机场节点推荐与测评榜',
    tagline: '香港 · 日本 · 新加坡 · 台湾 · 美国高可用机场节点实测 · 晚高峰低延迟低丢包',
    description: '汇总全网实测高可用机场节点，覆盖港日新台亚太低延迟节点与欧美 ChatGPT/TikTok 原生节点，公开晚高峰测速与专线拓扑。',
    metaTitle: '2026 稳定高速机场节点推荐与机场测评榜 (港日新美专线节点实测)',
    quickAnswer: '挑选稳定好用的机场节点，不能只比谁标称“节点多”，而应按场景选地区与线路：日常网页、GitHub 拉取与低延迟办公首选 IEPL/BGP 专线覆盖的香港、日本、新加坡节点；使用 ChatGPT / Claude / Gemini 建议固定在新加坡、日本或美国原生/住宅 IP 节点；流媒体追剧优先确认节点是否标明 Netflix / Disney+ 原生解锁。',
    matchedProviderSlugs: ['guangsucloud', 'muguang', 'weifeng', 'u1s1', 'xingdaomeng', 'wuyou', 'sujie', 'jilianyun', 'kuaili'],
    recommendedArticleSlugs: [
      'airport-nodes-selection-hk-jp-sg-us-guide',
      'airport-review-methodology-and-2026-evaluation',
      'node-timeout-troubleshooting-guide',
      'chatgpt-access-blocked-solution',
    ],
    relatedCategorySlugs: ['ai-access', 'streaming-4k', 'clash-recommend'],
    features: ['港/日/新/台/美全区域节点覆盖', 'IEPL/IPLC 专线晚高峰低丢包', '支持 4K/8K 视频与 GitHub 拉取', '节点在线率与历史档案可查'],
    buyingGuide: '判断一个机场的节点好不好用，关键看晚间 20:00~23:00 的真实单线程吞吐和丢包率，而不是空闲时间的测速峰值。高频办公与开发建议优先选香港、日本、新加坡三地节点充足且具备多入口（电信/联通/移动三网优化）的机场。',
    faqList: [
      {
        question: '选机场节点时，香港、日本、新加坡和美国节点怎么挑？',
        answer: '日常网页与 GitHub 开发首选香港/日本/新加坡节点（物理延迟通常较低）；使用 ChatGPT、Claude 或看美区流媒体则建议切到新加坡、日本或美国原生节点。',
      },
      {
        question: '为什么有些机场节点数量很多但实际都很卡？',
        answer: '部分低质服务商只是把同一台廉价 VPS 映射出几十个不同名称的“假节点”，晚高峰带宽严重拥堵。在 AirportMatrix 机场测评榜中，我们重点核验节点独立落地 IP 与专线实测记录。',
      },
    ],
  },
  {
    slug: 'ai-access',
    name: '海外 AI 场景专线机场推荐',
    tagline: '针对 ChatGPT、Claude 3.5、Gemini 与 Cursor 代码补全专项优化',
    description: '收录具备原生住宅 IP、低欺诈度评分、专线低延迟直连的优质机场，彻底解决 OpenAI 1020 报错与人机验证死循环。',
    metaTitle: '2026 海外 AI 访问专线机场推荐 (ChatGPT / Claude 原生住宅 IP 解锁榜) - AirportMatrix',
    quickAnswer: '访问 ChatGPT、Claude 与 Gemini 频繁触发 Cloudflare 人机验证或 1020/降智错误，通常源于节点共享机房 IP 污染，而非网速不足。优先选用支持新加坡/日本/美国原生或双 ISP 住宅 IP 的专线机场（如光速云、速界、U1S1），并在 Clash 中为 AI 域名固定单一地区节点以防止账号风控。',
    matchedProviderSlugs: ['guangsucloud', 'muguang', 'weifeng', 'sujie', 'u1s1', 'sogoyun', 'jilianyun'],
    recommendedArticleSlugs: [
      'chatgpt-access-blocked-solution',
      'airport-nodes-selection-hk-jp-sg-us-guide',
      'claude-chatgpt-anti-ban-static',
      'residential-dual-isp-ai-risk',
    ],
    relatedCategorySlugs: ['airport-nodes', 'clash-recommend', 'cost-effective'],
    features: ['原生住宅 IP 覆盖', '独立 OpenAI 策略组分流', 'WebRTC 防泄漏支持', 'API 高频并发低延迟'],
    buyingGuide: '访问海外 AI 工具时，最关键指标是 IP 纯净度而非单纯的峰值带宽。机房广播 IP 极易被 Cloudflare 识别并封禁。建议选择部署有 IEPL 企业专线并提供原生住宅 IP 的服务商。',
    faqList: [
      {
        question: '为什么普通中转机场访问 ChatGPT 容易报错？',
        answer: '因为大量超低价机场几万人共享同一个机房 IP，极易触发 OpenAI 的反作弊威胁模型。',
      },
      {
        question: '香港节点为什么经常打不开 ChatGPT 或 Claude？',
        answer: 'OpenAI 与 Anthropic 官方并未对香港地区提供服务支持，香港 IP 访问会被直接拒绝。请在客户端规则中把 AI 服务分流至新加坡、日本或美国节点。',
      },
    ],
  },
  {
    slug: 'streaming-4k',
    name: '4K/8K 海外流媒体极速机场排行',
    tagline: 'Netflix 多区原生解锁 · YouTube 8K 秒开 · Disney+ · 巴哈姆特动画疯',
    description: '精选大带宽、晚高峰 0 丢包、原生支持多国流媒体版权解锁的高速机场矩阵。',
    metaTitle: '2026 4K/8K 海外流媒体解锁机场推荐 (Netflix / Disney+ / YouTube 4K 秒开) - AirportMatrix',
    quickAnswer: '流畅观看 Netflix、Disney+ 与 YouTube 4K/8K 视频需同时满足“晚高峰单线程带宽充足”和“节点落地具备原生或 DNS 版权解锁”。光速云、灵猫网络、一翻云与快狸等机场针对港/台/新/日流媒体区域提供专门解锁节点，适合大屏电视与 Apple TV 用户。',
    matchedProviderSlugs: ['guangsucloud', 'wuyou', 'weifeng', 'lingmaonet', 'yifanyun', 'kuaili', 'sogoyun'],
    recommendedArticleSlugs: [
      'netflix-openconnect-cdn-streaming-unlock',
      'airport-nodes-selection-hk-jp-sg-us-guide',
      'iepl-vs-iplc-physical-fiber',
      'guangsucloud-in-depth-review-2026',
    ],
    relatedCategorySlugs: ['airport-nodes', 'cost-effective', 'clash-recommend'],
    features: ['4K/8K 视频秒开', '支持 Netflix 原生剧集', '双向解锁 Disney+/TikTok', '高峰期不限速'],
    buyingGuide: '看海外视频需要重点关注节点带宽倍率与单线程吞吐能力。专线机场能够保障晚高峰 20:00~23:00 依然能够流畅拖拽 4K 进度条。',
    faqList: [
      {
        question: '流媒体解锁会失效吗？',
        answer: '流媒体平台的封锁是动态博弈。优质大厂通常具备 DNS 解锁与落地 IP 自动漂移轮换机制。',
      },
      {
        question: '看巴哈姆特动画疯和 Netflix 港区应该选哪个地区节点？',
        answer: '巴哈姆特动画疯限台湾原生 IP 解锁；Netflix 则可依据片源字幕选择香港、台湾、新加坡或日本节点。',
      },
    ],
  },
  {
    slug: 'budget-under-15',
    name: '15 元以内便宜高性价比月付机场',
    tagline: '拒绝高昂开销 · 14.9 元即享 100GB 专线 · 学生党与轻度办公首选',
    description: '精选起步门槛在 15 元左右的良心服务商，涵盖 VLESS 协议、三网优化与企业级专线。',
    metaTitle: '2026 15元以内便宜月付机场推荐 (14.9元100GB / 学生党高性价比专线) - AirportMatrix',
    quickAnswer: '预算控制在 15 元以内时，不必冒风险去用不稳定的免费或“1元公益机场”。唯兔云与宇宙云均提供 14.9 元/月含 100GB 流量的 IEPL/BGP 入门月付套餐；若愿选季付或年付，光速云与飞猫云折算月均成本更可压低至 7.0~7.5 元。',
    matchedProviderSlugs: ['weitucloud', 'yuzhoucloud', 'feimaocloud', 'guangsucloud', 'weifeng', 'wuyou', 'yinxingren', 'tiziyun'],
    recommendedArticleSlugs: [
      'free-public-airport-vs-airport-vpn-risks-guide',
      'cost-effective-airport-buying-guide-2026',
      'weitucloud-in-depth-review-2026',
      'yuzhoucloud-in-depth-review-2026',
    ],
    relatedCategorySlugs: ['cost-effective', 'annual-discount', 'unlimited-traffic'],
    features: ['14.9 元月付起', '100GB 充沛月流量', '支持按月续费灵活', 'IEPL 专线保障'],
    buyingGuide: '预算有限的用户建议选择月付 14.9 元档（如唯兔云、宇宙云），或者选择年付均摊 7~8 元档（如飞猫云、光速云）。',
    faqList: [
      {
        question: '15 元以内的机场稳定吗？',
        answer: '我们精选的 15 元品牌均采用真实 IEPL 专线或多地 BGP 入口，不同于容易跑路的不知名垃圾作坊。',
      },
      {
        question: '学生党预算低，买月付好还是找免费机场好？',
        answer: '强烈建议选 14.9 元正规月付机场而非免费机场：月付既不用承担长期跑路押金风险，也能获得独立账号与晚高峰可用保障。',
      },
    ],
  },
  {
    slug: 'unlimited-traffic',
    name: '不限时流量包机场专题',
    tagline: '一次购买不过期 · 适合长期轻度备用与多设备低频用户',
    description: '无需按月扣费，流量永久有效，用多少扣多少，为差旅出海与轻度备用量身定制。',
    metaTitle: '2026 不限时流量机场推荐 (一次购买永久不过期 / 备用出海首选) - AirportMatrix',
    quickAnswer: '月消耗低于 30GB 的轻度查阅用户或需要“第二条备用线路”的用户，最适合购买不限时按量计费机场。选购关键在于服务商抗跑路能力——建议优先考虑星岛梦（2020 年运营至今）或灵猫网络等稳定品牌，避免把不限时套餐买在新开小作坊。',
    matchedProviderSlugs: ['xingdaomeng', 'lingmaonet', 'guangsucloud', 'weifeng'],
    recommendedArticleSlugs: [
      'xingdaomeng-in-depth-review-2026',
      'cost-effective-airport-buying-guide-2026',
      'free-public-airport-vs-airport-vpn-risks-guide',
      'lingmaonet-in-depth-review-2026',
    ],
    relatedCategorySlugs: ['cost-effective', 'budget-under-15', 'annual-discount'],
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
    quickAnswer: '对日常高频上网用户而言，先用月付确认本地宽带兼容性后转季付/年付是最省钱的策略：光速云年付均摊约 7.5 元/月（叠加 8 折码 AMM 更低）、飞猫云约 7.0 元/月（优惠码 flycat888）、星岛梦约 8.0 元/月（优惠码 nmw888），即可长期享受 IEPL 专线体验。',
    matchedProviderSlugs: ['guangsucloud', 'feimaocloud', 'xingdaomeng', 'muguang', 'weifeng', 'firefly'],
    recommendedArticleSlugs: [
      'cost-effective-airport-buying-guide-2026',
      'guangsucloud-in-depth-review-2026',
      'feimaocloud-in-depth-review-2026',
      'xingdaomeng-in-depth-review-2026',
    ],
    relatedCategorySlugs: ['cost-effective', 'budget-under-15', 'unlimited-traffic'],
    features: ['年付折算仅 7-8 元/月', 'IEPL 企业物理专线', 'VLESS 前沿协议', '新人优惠码叠加立减'],
    buyingGuide: '年付折算套餐适合对稳定性有长效要求且追求极致单价的用户，配合光速云【AMM】8折优惠码性价比极高。',
    faqList: [
      {
        question: '年付折算价格怎么理解？',
        answer: '指的是按年一次性支付约 84~96 元左右，包含全年每月高速专线配额，折算每月仅 7~8 元。',
      },
    ],
  },
];
