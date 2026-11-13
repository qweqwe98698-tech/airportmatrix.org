export interface ProviderPlan {
  name: string;
  cycle: string;
  price: string;
  traffic: string;
  periodNote?: string;
}

export interface Provider {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  establishedYear: number;
  rankTier?: 'top10' | 'core' | 'archival';
  dataStatus?: 'measured' | 'vendor' | 'historical' | 'pending';
  subscriptionMode?: 'subscription' | 'client-only' | 'both' | 'unknown';
  score: {
    overall: number;
    stability: number;
    speed: number;
    support: number;
    value: number;
  };
  pricing: {
    minMonthly: number;
    currency: string;
    billingPeriod: string;
    hasTrial: boolean;
  };
  couponCode?: string;
  discountInfo?: string;
  testImages?: Array<{
    title: string;
    url: string;
    desc: string;
  }>;
  plans?: ProviderPlan[];
  speedMetrics?: {
    testDate: string;
    testNote: string;
    rows: Array<{ region: string; latency: string; download: string }>;
  };
  unlockMatrix?: {
    ai: Array<{ name: string; status: 'supported' | 'node-dependent' | 'failed' | 'untested' }>;
    streaming: Array<{ name: string; status: 'supported' | 'node-dependent' | 'failed' | 'untested' }>;
    note?: string;
  };
  verificationGaps?: string[];
  routes: Array<'iepl' | 'iplc' | 'bgp' | 'transit' | 'direct'>;
  protocols: Array<'vless' | 'hysteria2' | 'trojan' | 'shadowsocks' | 'tuic'>;
  clients: string[];
  features: string[];
  aiSupport: {
    chatgpt: boolean;
    claude: boolean;
    gemini: boolean;
    cursor: boolean;
    notes: string;
  };
  streamingSupport: {
    netflix: boolean;
    youtubePremium: boolean;
    disneyPlus: boolean;
    notes: string;
  };
  riskLevel: 'safe' | 'moderate' | 'high' | 'critical';
  status: 'active' | 'warning' | 'defunct';
  affiliateUrl: string;
  officialSite: string;
  refundPolicy: string;
  nodeCount: number;
  bandwidthLimit: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  description: string;
  lastVerified: string;
}

export const providersData: Provider[] = [
  {
    "id": "guangsucloud",
    "slug": "guangsucloud",
    "name": "光速云 (GuangSuCloud)",
    "tagline": "2020老牌全IEPL专线机场 · 主打VLESS极速协议 · 年付均摊7.5元/月起",
    "establishedYear": 2020,
    "score": {
      "overall": 9.8,
      "stability": 9.9,
      "speed": 9.8,
      "support": 9.5,
      "value": 9.9
    },
    "pricing": {
      "minMonthly": 8.25,
      "currency": "CNY",
      "billingPeriod": "轻量版 99元/年 (69GB/月，用码AMM约8元档)",
      "hasTrial": false
    },
    "couponCode": "AMM",
    "discountInfo": "新人专属优惠码：AMM（半年9折 / 年付8折 / 两年75折 / 三年7折；147永久与99年付轻量版不参与折扣）",
    "testImages": [
      {
        "title": "MiaoKO 9Gbps 珠海联通 32 线程单线程测速（峰值 500MB/s）",
        "url": "/assets/reviews/guangsucloud/photo_2026-08-19_12-20-10.jpg",
        "desc": "珠海联通 9Gbps 实测环境显示：香港 VLESS 节点平均速度约 380MB~424MB/s，新加坡与美西稳定突破 300MB/s，全节点支持 FullCone UDP。"
      },
      {
        "title": "全节点流媒体与 OpenAI (ChatGPT) 解锁全景图",
        "url": "/assets/reviews/guangsucloud/photo_2026-08-19_12-18-40.jpg",
        "desc": "实测涵盖香港、台湾、日本、新加坡、美国、英德法泰马等节点，主流流媒体（Netflix/Disney+/YouTube/动画疯）与 AI 访问表记录完整。"
      },
      {
        "title": "长沙电信 2Gbps 三网节点测速与 AI/流媒体全量解锁验证（62/62 节点）",
        "url": "/assets/reviews/guangsucloud/photo_2026-08-19_12-13-01.jpg",
        "desc": "电信 2Gbps 实测 62 个节点全部有效响应，香港 TLS RTT 约 20~31ms，列出 Disney+ / Netflix / YouTube / OpenAI / Gemini 逐节点解锁与 IP 风险评分。"
      },
      {
        "title": "广西移动 2Gbps 三网节点测速与 IP 风险评分图（62/62 节点）",
        "url": "/assets/reviews/guangsucloud/photo_2026-08-19_12-13-50.jpg",
        "desc": "移动 2Gbps 跨网实测显示新加坡/日本/香港节点均达 37~53MB/s 平均吞吐，并明示每个节点的 ASN 归属与 IPrisk 区间。"
      },
      {
        "title": "河北联通 2Gbps 三网节点测速与流媒体解锁分布图（62/62 节点）",
        "url": "/assets/reviews/guangsucloud/photo_2026-08-19_12-13-58.jpg",
        "desc": "北方联通 2Gbps 实测 62 节点全连通，直观反映新加坡/日本 OpenAI 全绿解锁、香港仅 APP 可用及台湾部分风控差异。"
      },
      {
        "title": "2026-08-11 节点测速历史对比归档图",
        "url": "/assets/speedtests/guangsucloud.png",
        "desc": "2026-08-11 14:32 CST MAI-TEST-BOT Shadowsocks 协议批次实测快照存档。"
      }
    ],
    "routes": [
      "iepl",
      "bgp"
    ],
    "protocols": [
      "vless",
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn",
      "surge"
    ],
    "features": [
      "IEPL 专线 + 企业级内网专线（双线路架构）",
      "VLESS + Shadowsocks 双协议与全节点 FullCone UDP",
      "11+ 地区覆盖（香港×20、日本×10、新加坡×10、美国×10、台湾×5 等）",
      "提供自研客户端 + Clash / Shadowrocket 一键订阅导入",
      "支持 支付宝 / 微信 / USDT 快捷付款"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "70+ 节点实测 OpenAI ChatGPT、Claude、Gemini 全绿解锁，代码补全与 API 交互低延迟零报错。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "实测 Netflix（港台日美非自制剧）、Disney+、YouTube 4K/8K 秒开、巴哈姆特动画疯全量解锁。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "officialSite": "https://sahude.gsyvipaff.com",
    "refundPolicy": "服务异常支持工单技术支持与合规处理",
    "nodeCount": 70,
    "bandwidthLimit": "69GB - 900GB / 月 · 含 247GB 永久包",
    "pros": [
      "2020 年稳定运营至今，配备 IEPL 专线 + 企业级内网专线双线路架构",
      "拥有完整电信/移动/联通 2Gbps 及联通 9Gbps 等 6 组实测与解锁图证，数据透明度极高",
      "套餐跨度极广：从 ¥99/年轻量版、¥147 永久流量包到 ¥680/月企业独享全覆盖",
      "支持自研客户端，同时兼容 Clash Verge / Shadowrocket 第三方订阅导入"
    ],
    "cons": [
      "官方说明 ChatGPT 与 Gemini 视节点而定（需手动避开香港节点切换日/新/美节点）",
      "特殊轻量/永久商品不支持折扣与退款，建议先买常规月付测本地晚高峰"
    ],
    "bestFor": [
      "追求极致速度与晚高峰 0 丢包用户",
      "ChatGPT / Claude 深度 AI 开发者",
      "4K/8K 流媒体影音党",
      "追求高性价比专线的新老用户"
    ],
    "description": "光速云（GuangSuCloud）是 2020 年成立的老牌综合型专线机场。主打 IEPL 企业级内网专线与新一代 VLESS 协议，经 MiaoKO 9Gbps 宽带真实测速，香港专线平均吞吐达 400MB/s 以上，全节点支持 FullCone UDP。既提供新手友好的自研客户端，又完美兼容 Clash Verge Rev、Shadowrocket、sing-box 等开源客户端，综合性能与性价比位于第一梯队。",
    "lastVerified": "2026-08-21",
    "rankTier": "top10",
    "dataStatus": "measured",
    "subscriptionMode": "both",
    "plans": [
      {
        "name": "光速云·致敬斯诺克147永久套餐",
        "cycle": "一次性付费",
        "price": "¥147",
        "traffic": "247GB",
        "periodNote": "一次性永久版无忧过期"
      },
      {
        "name": "光速云·轻量版",
        "cycle": "年付",
        "price": "¥99",
        "traffic": "69GB/月",
        "periodNote": "每月重置（不参与折扣）"
      },
      {
        "name": "光速云·极速版",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "168GB/月",
        "periodNote": "每月重置（可叠加年付/两年折扣）"
      },
      {
        "name": "光速云·流光版",
        "cycle": "月付",
        "price": "¥34",
        "traffic": "268GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "光速云·量子版",
        "cycle": "月付",
        "price": "¥68",
        "traffic": "568GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "光速云·无界版",
        "cycle": "月付",
        "price": "¥138",
        "traffic": "900GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "光速云·定制套餐",
        "cycle": "月付",
        "price": "¥680",
        "traffic": "500GB/月",
        "periodNote": "独享原生 IP / 独立带宽"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "22ms",
          "download": "529Mbps"
        },
        {
          "region": "台湾",
          "latency": "41ms",
          "download": "114Mbps"
        },
        {
          "region": "新加坡",
          "latency": "46ms",
          "download": "387Mbps"
        },
        {
          "region": "日本",
          "latency": "57ms",
          "download": "135Mbps"
        },
        {
          "region": "美国",
          "latency": "143ms",
          "download": "18Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "node-dependent"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        },
        {
          "name": "Claude",
          "status": "supported"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "资料与三网实测图均显示：Netflix/Disney+/YouTube/TikTok/Claude 主力节点全绿支持；ChatGPT 与 Gemini 需避开香港节点并切换至新加坡、日本或美国落地节点。"
    }
  },
  {
    "id": "muguang",
    "slug": "muguang",
    "name": "暮光加速 (MuGuang)",
    "rankTier": "top10",
    "dataStatus": "vendor",
    "subscriptionMode": "both",
    "tagline": "2023年运营 · BGP智能调度专线 · 年付109元起 & 全平台多设备在线",
    "establishedYear": 2023,
    "score": {
      "overall": 9.4,
      "stability": 9.4,
      "speed": 9.3,
      "support": 9.4,
      "value": 9.4
    },
    "pricing": {
      "minMonthly": 9.1,
      "currency": "CNY",
      "billingPeriod": "年付轻量版 109元/年 (约9.1元/月) · 月付20元(120GB)",
      "hasTrial": false
    },
    "couponCode": "muguang5555",
    "discountInfo": "基础数据记录优惠码：muguang5555（具体折扣以官网当期活动为准）",
    "routes": [
      "bgp",
      "iepl"
    ],
    "protocols": [
      "vless",
      "trojan"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "BGP 智能调度 + 专线级出口",
      "多设备同时在线（个人/团队远程协作适用）",
      "官方宣称 7×24 小时真人客服",
      "覆盖 120GB~1500GB 月付及多档不限时包"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": false,
      "cursor": true,
      "notes": "资料显示支持 ChatGPT、Claude；Gemini 视落地节点而定。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "支持 Netflix、Disney+、YouTube、HBO Max、TikTok 与 Spotify。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "officialSite": "https://varnexa.twilightaff.com",
    "refundPolicy": "客服工单协调（建议先月付实测）",
    "nodeCount": 50,
    "bandwidthLimit": "70GB - 1500GB / 月 · 含不限时包",
    "pros": [
      "2023 年运营至今，覆盖 Win/macOS/iOS/Android/Linux 全平台",
      "支持多设备同时在线，套餐涵盖月付、年付轻量及 800GB 不限时包",
      "资料记录提供 7×24 小时客服响应，适合跨团队协作"
    ],
    "cons": [
      "暂无单独实测大图存档（资料内同名压缩包图片核验为快狸截图，已保持未混用）",
      "优惠码适用范围以官网结账页最新说明为准"
    ],
    "bestFor": [
      "多设备家庭与远程办公团队",
      "注重跨平台兼容的用户",
      "需要不限时流量或 20 元月付试错者"
    ],
    "description": "暮光加速（MuGuang）面向个人与跨平台团队使用场景，主打 BGP 智能调度与专线级出口，支持多设备同时在线。年付轻量版 109 元（70GB/月，均摊约 9.1 元/月），标准月付 20 元含 120GB 流量，并配备 150GB~800GB 不限时流量包与私人定制节点。",
    "lastVerified": "2026-10-19",
    "plans": [
      {
        "name": "【暮光·年付轻量版】",
        "cycle": "年付",
        "price": "¥109",
        "traffic": "70GB/月",
        "periodNote": "均摊约 ¥9.1/月"
      },
      {
        "name": "【暮光·基础版】",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "120GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "【暮光·标准版】",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "240GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "【暮光·旗舰版】",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "700GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "【暮光·至尊版】",
        "cycle": "月付",
        "price": "¥180",
        "traffic": "1500GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "cycle": "一次性付费",
        "price": "¥219",
        "traffic": "150GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "【暮光·不限时标准包】",
        "cycle": "一次性付费",
        "price": "¥529",
        "traffic": "400GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "cycle": "一次性付费",
        "price": "¥959",
        "traffic": "800GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "独享私人定制节点",
        "cycle": "月付",
        "price": "¥600",
        "traffic": "500GB/月",
        "periodNote": "独享定制"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "26ms",
          "download": "509Mbps"
        },
        {
          "region": "台湾",
          "latency": "40ms",
          "download": "107Mbps"
        },
        {
          "region": "新加坡",
          "latency": "43ms",
          "download": "419Mbps"
        },
        {
          "region": "日本",
          "latency": "53ms",
          "download": "150Mbps"
        },
        {
          "region": "美国",
          "latency": "160ms",
          "download": "19Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "supported"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "全平台支持且多设备在线，Gemini 需按节点切换。"
    },
    "verificationGaps": [
      "未混用误标压缩包图片，待补充独立暮光节点测速原图"
    ]
  },
  {
    "id": "feimaocloud",
    "slug": "feimaocloud",
    "name": "飞猫云 (FeiMaoCloud)",
    "tagline": "IEPL专线小流量低价年付 · 均摊约7元/月 · 轻度日常办公首选",
    "establishedYear": 2023,
    "score": {
      "overall": 9.3,
      "stability": 9.4,
      "speed": 9.2,
      "support": 9.1,
      "value": 9.7
    },
    "pricing": {
      "minMonthly": 7,
      "currency": "CNY",
      "billingPeriod": "飞猫·学生版 84元/年 (约7元/月 50GB) · 月付25元起",
      "hasTrial": false
    },
    "couponCode": "flycat888",
    "discountInfo": "季付及以上套餐享 8 折优惠码：flycat888",
    "testImages": [
      {
        "title": "飞猫云节点测速实测图",
        "url": "/assets/speedtests/feimaocloud.png",
        "desc": "IEPL 专线节点延迟低，轻量网页与日常 AI 交互响应迅速。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless",
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "2023 年运营 · 专注“下载即用”免配订阅新手体验",
      "专属客户端登录即用，免去挑选 Clash 与导订阅步骤",
      "年付学生版仅 ¥84/年（约 ¥7/月），另有 1000GB 不限时套餐",
      "2026-08-11 实测大图 + 2026-10-19 分区速度对照完整"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "覆盖常见 AI 网页访问与代码开发交互。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "满足 1080P/4K 流媒体日常流畅播放。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "officialSite": "https://guangs.flycataff.com",
    "refundPolicy": "支持工单咨询",
    "nodeCount": 48,
    "bandwidthLimit": "50GB - 800GB / 月",
    "pros": [
      "专属客户端登录直连，无需手工配置订阅，适合首次接触代理的新手",
      "学生年付 ¥84（约 7 元/月）起步极低，兼顾轻量办公与追剧",
      "拥有 2026-08-11 实测大图（港新节点速度亮眼）"
    ],
    "cons": [
      "新资料明确采用专属客户端模式而非重度 Clash DIY 路线，适合轻中度及免折腾人群",
      "常规月付 150GB 档起步 25 元，更适合用季/年付配合优惠码 flycat888"
    ],
    "bestFor": [
      "日常查资料与轻度社交用户",
      "学生与预算敏感型用户",
      "轻量 AI 对话者"
    ],
    "description": "飞猫云专注于 IEPL 专线配合低价小流量套餐，通过年付机制大幅摊薄使用成本，是日常轻度出海的高性价比代表。",
    "lastVerified": "2026-08-21",
    "rankTier": "top10",
    "dataStatus": "measured",
    "subscriptionMode": "client-only",
    "plans": [
      {
        "name": "飞猫·学生版",
        "cycle": "年付",
        "price": "¥84",
        "traffic": "50GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "飞猫·星耀版",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "飞猫·星环版",
        "cycle": "月付",
        "price": "¥45",
        "traffic": "300GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "飞猫·银河版",
        "cycle": "月付",
        "price": "¥85",
        "traffic": "600GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "飞猫·宇宙版",
        "cycle": "月付",
        "price": "¥150",
        "traffic": "1000GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "飞猫·不限时套餐",
        "cycle": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "飞猫·定制套餐",
        "cycle": "月付",
        "price": "¥550",
        "traffic": "500GB/月",
        "periodNote": "每月重置"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "21ms",
          "download": "526Mbps"
        },
        {
          "region": "台湾",
          "latency": "41ms",
          "download": "116Mbps"
        },
        {
          "region": "新加坡",
          "latency": "45ms",
          "download": "413Mbps"
        },
        {
          "region": "日本",
          "latency": "54ms",
          "download": "138Mbps"
        },
        {
          "region": "美国",
          "latency": "178ms",
          "download": "14Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "supported"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "资料显示支持 ChatGPT/Claude 与主流流媒体，Gemini 视具体落地节点而定。"
    }
  },
  {
    "id": "weifeng",
    "slug": "weifeng",
    "name": "微风网络 (WeiFeng)",
    "rankTier": "top10",
    "dataStatus": "measured",
    "subscriptionMode": "subscription",
    "tagline": "2023年运营 · IEPL专线 + VLESS · 年付137元(100GB/月)入门高性价比",
    "establishedYear": 2023,
    "score": {
      "overall": 9.4,
      "stability": 9.3,
      "speed": 9.4,
      "support": 9.3,
      "value": 9.5
    },
    "pricing": {
      "minMonthly": 11.4,
      "currency": "CNY",
      "billingPeriod": "清风年付 137元/年 (约11.4元/月 100GB) · 优惠码 flat888",
      "hasTrial": false
    },
    "couponCode": "flat888",
    "discountInfo": "专属优惠码：flat888（资料标注 7元~9折优惠口径，下单以官网页面为准）",
    "testImages": [
      {
        "title": "微风网络 MiaoKO 珠海联通 9Gbps 50 节点 VLESS 实测图",
        "url": "/assets/speedtests/weifeng.png",
        "desc": "2026-07-19 18:38 CST 珠海联通 9Gbps 32线程测速：50 个 VLESS 节点中，香港节点平均速度 516~546MB/s（峰值 619.64MB/s），新加坡 281~401MB/s，日本多节点 133~258MB/s，标注 FullCone UDP 支持。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "IEPL 专线 + VLESS 现代协议",
      "覆盖港/新/日/美/台 50+ 原生节点",
      "含 270GB / 570GB 一次性不限时流量包",
      "7×24 在线客服（夜间 AI 客服值守）"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": false,
      "cursor": true,
      "notes": "支持 ChatGPT、Claude；Gemini 视具体落地节点而定。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "支持 Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "officialSite": "https://edp01.breezenetaff.com",
    "refundPolicy": "支持在线工单与客服咨询",
    "nodeCount": 50,
    "bandwidthLimit": "100GB - 1200GB / 月 · 含 270GB/570GB 不限时",
    "pros": [
      "具备 50 节点 MiaoKO 9Gbps 实测大图佐证（香港节点均速 530MB/s 级）",
      "入门 IEPL 年付 137 元每月给满 100GB，月付门槛也比纯高端专线友好",
      "支持 270GB / 570GB 一次性不限时包，客服新手响应口碑较好"
    ],
    "cons": [
      "重度大流量用户（>300GB/月）升级档位费用相对入门档拉升明显"
    ],
    "bestFor": [
      "学生党与新手机场试错用户",
      "追求 IEPL + VLESS 与 100GB 起步月配额者",
      "需要 270GB 级不限时备用包用户"
    ],
    "description": "微风网络（WeiFeng）成立于 2023 年，定位入门高性价比 IEPL + VLESS 专线机场。拥有实测 50 节点 VLESS 大图存档，入门年付清风档 137 元/年即可获每月 100GB 专线配额，同时提供 270GB 与 570GB 一次性不限时流量包及全天候客服支持。",
    "lastVerified": "2026-10-19",
    "plans": [
      {
        "name": "清风 (Breeze)",
        "cycle": "年付",
        "price": "¥137",
        "traffic": "100GB/月",
        "periodNote": "均摊约 ¥11.4/月"
      },
      {
        "name": "乘风 (Riding)",
        "cycle": "月付",
        "price": "¥27",
        "traffic": "200GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "破风 (Breaking)",
        "cycle": "月付",
        "price": "¥57",
        "traffic": "500GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "御风 (Mastery)",
        "cycle": "月付",
        "price": "¥127",
        "traffic": "1200GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "信风·不限时",
        "cycle": "一次性付费",
        "price": "¥200",
        "traffic": "270GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "长风·不限时",
        "cycle": "一次性付费",
        "price": "¥370",
        "traffic": "570GB",
        "periodNote": "一次性有效"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "25ms",
          "download": "546Mbps"
        },
        {
          "region": "台湾",
          "latency": "40ms",
          "download": "115Mbps"
        },
        {
          "region": "新加坡",
          "latency": "43ms",
          "download": "384Mbps"
        },
        {
          "region": "日本",
          "latency": "54ms",
          "download": "131Mbps"
        },
        {
          "region": "美国",
          "latency": "167ms",
          "download": "17Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "supported"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "全地区流媒体与主流 AI 支持，含 50 节点 VLESS 实测大图佐证。"
    }
  },
  {
    "id": "dalaoyun",
    "slug": "dalaoyun",
    "name": "大佬云 (DaLaoYun)",
    "rankTier": "top10",
    "dataStatus": "vendor",
    "subscriptionMode": "both",
    "tagline": "2024年运营 · 年付5.6元/月极限平价 · IEPL专线 + VLESS",
    "establishedYear": 2024,
    "score": {
      "overall": 9,
      "stability": 8.9,
      "speed": 9,
      "support": 8.8,
      "value": 9.5
    },
    "pricing": {
      "minMonthly": 5.6,
      "currency": "CNY",
      "billingPeriod": "年付折算约 5.6 元/月 (60GB/月)",
      "hasTrial": false
    },
    "couponCode": "dly888",
    "discountInfo": "季付及以上享 7 折优惠码：dly888",
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "5.6 元/月超低预算级 IEPL + VLESS",
      "季付及以上 7 折优惠码 dly888",
      "同时提供自研客户端与第三方订阅导入"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：品牌资料未给出统一 AI 解锁测试记录，以下单自测为准。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：品牌资料未附带独立流媒体实测图表。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "officialSite": "https://qwerty.dalaoyunaff.com",
    "refundPolicy": "建议先以季付折后测试本地宽带后再长期续费",
    "nodeCount": 40,
    "bandwidthLimit": "60GB/月起（完整高配档待核实）",
    "pros": [
      "年付折算约 5.6 元/月（60GB），与闪电鼠等并列极限平价门槛",
      "明确提供 VLESS 协议并同时支持自研与 Clash 等第三方订阅"
    ],
    "cons": [
      "与同梯队 5.6 元档（闪电鼠、云界线、榴莲云、环球梯）配置高度相似，缺乏独立测速大图与 AI/流媒体专项验证"
    ],
    "bestFor": [
      "预算极度敏感的轻度查询用户",
      "需要低价备用机场的个人用户"
    ],
    "description": "大佬云成立于 2024 年，属于 5.6 元/月起“极限平价”梯队的标准 IEPL + VLESS 机场方案（60GB/月起），支持季付及以上 7 折（dly888），兼顾自研客户端与第三方订阅。公开资料暂缺逐地区测速与解锁大图，推荐先短周期测试实际地区表现。",
    "lastVerified": "2026-10-19",
    "verificationGaps": [
      "逐地区测速实测数据、AI/流媒体逐项解锁清单及全部高配套餐表待核实"
    ]
  },
  {
    "id": "xingdaomeng",
    "slug": "xingdaomeng",
    "name": "星岛梦 (XingDaoMeng)",
    "tagline": "2020老牌运营 · 企业级内网专线 · 丰富套餐与不限时流量包",
    "establishedYear": 2020,
    "score": {
      "overall": 9.4,
      "stability": 9.5,
      "speed": 9.3,
      "support": 9.2,
      "value": 9.6
    },
    "pricing": {
      "minMonthly": 8,
      "currency": "CNY",
      "billingPeriod": "年付折算约 8.0 元/月 (60GB起)",
      "hasTrial": false
    },
    "couponCode": "nmw888",
    "discountInfo": "新人注册专属 9 折优惠码：nmw888",
    "testImages": [
      {
        "title": "星岛梦全节点测速实测图",
        "url": "/assets/speedtests/xingdaomeng.png",
        "desc": "企业级内网专线节点延迟均衡，亚太及欧美节点覆盖完整，适合低预算与长期稳定使用。"
      }
    ],
    "routes": [
      "iepl",
      "bgp"
    ],
    "protocols": [
      "trojan",
      "vless",
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "企业级内网专线",
      "支持不限时套餐",
      "60GB年付折算8元/月",
      "丰富周期组合",
      "支持微信/支付宝/USDT"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "品牌资料显示覆盖常见 AI 工具访问场景，建议结合主力节点使用。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "支持主流海外流媒体高清播放与日常视频追剧。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "officialSite": "https://guangs.xingdaomeng.com",
    "refundPolicy": "支持工单咨询与售后支持",
    "nodeCount": 55,
    "bandwidthLimit": "60GB - 1200GB / 月 (或不限时)",
    "pros": [
      "2020 年运营老牌，稳定性高",
      "提供不限时套餐与超低年付折算价格（约 8 元/月）",
      "优惠码【nmw888】立享 9 折"
    ],
    "cons": [
      "8 元/月为年付套餐折算均价"
    ],
    "bestFor": [
      "预算有限的轻度用户",
      "不常使用需要不限时套餐的用户",
      "长期稳定备用需求者"
    ],
    "description": "星岛梦运营时间较长，套餐类型极为丰富。除常规月付、季付与年付外，还提供高灵活度的不限时流量包，是低预算长期用户的热门之选。",
    "lastVerified": "2026-08-21",
    "rankTier": "top10",
    "dataStatus": "measured",
    "subscriptionMode": "subscription",
    "plans": [
      {
        "name": "星岛梦·贴心小包",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "星岛梦·超量150G",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "星岛梦·进阶300G",
        "cycle": "月付",
        "price": "¥50",
        "traffic": "300GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "星岛梦·闪光500G",
        "cycle": "月付",
        "price": "¥70",
        "traffic": "500GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "cycle": "月付",
        "price": "¥130",
        "traffic": "1000GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "星岛梦·永久不限时100",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "星岛梦·永久不限时300",
        "cycle": "一次性付费",
        "price": "¥300",
        "traffic": "300GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "cycle": "一次性付费",
        "price": "¥600",
        "traffic": "1000GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "星岛梦·定制套餐",
        "cycle": "月付",
        "price": "¥680",
        "traffic": "500GB/月",
        "periodNote": "每月重置"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "27ms",
          "download": "504Mbps"
        },
        {
          "region": "台湾",
          "latency": "41ms",
          "download": "103Mbps"
        },
        {
          "region": "新加坡",
          "latency": "44ms",
          "download": "411Mbps"
        },
        {
          "region": "日本",
          "latency": "57ms",
          "download": "136Mbps"
        },
        {
          "region": "美国",
          "latency": "177ms",
          "download": "18Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "supported"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "IEPL 专线 1 倍流量且不限设备连接，涵盖韩/东南亚等少见地区及主流 AI/流媒体。"
    }
  },
  {
    "id": "yinxingren",
    "slug": "yinxingren",
    "name": "隐形人 (Invisible)",
    "rankTier": "top10",
    "dataStatus": "vendor",
    "subscriptionMode": "client-only",
    "tagline": "2024年运营 · 企业级IPLC纯专线 · 自带全平台客户端 (不提供订阅链接)",
    "establishedYear": 2024,
    "score": {
      "overall": 9.2,
      "stability": 9.3,
      "speed": 9.2,
      "support": 9.2,
      "value": 9
    },
    "pricing": {
      "minMonthly": 9.08,
      "currency": "CNY",
      "billingPeriod": "星耀风暴年付 109元 (约9.08元/月 80GB) · 月付24元(144GB)",
      "hasTrial": false
    },
    "couponCode": "moon80",
    "discountInfo": "专属优惠码：moon80（8折） / 历史码 yxr888（以结算页生效为准）",
    "routes": [
      "iplc"
    ],
    "protocols": [
      "trojan",
      "vless"
    ],
    "clients": [
      "custom-app"
    ],
    "features": [
      "企业级 IPLC 专线直连，官方资料标注高可用稳定",
      "年付 109 元 (80GB/月)，月付白银档 24 元给到 144GB",
      "自带全平台一键客户端（注意：不提供第三方订阅链接）"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "品牌资料标注支持 ChatGPT；Claude、Gemini 视节点而定，建议核实。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "品牌资料标注解锁 Netflix、Disney+、YouTube、HBO Max、Spotify；TikTok 视节点而定。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "officialSite": "https://yinxingren1.invisibleaff.com",
    "refundPolicy": "无免费试用（建议下单前留意闭源客户端兼容条件）",
    "nodeCount": 60,
    "bandwidthLimit": "80GB - 1.6TB / 月 · 含 160GB/420GB/1TB 一次性包",
    "pros": [
      "企业级 IPLC 专线定位，年付 109 元享 80GB/月配额",
      "套餐梯度极全：覆盖 144GB 月付至 1.6TB 重度档及 1TB 一次性流量包"
    ],
    "cons": [
      "不提供标准订阅链接，Clash / Shadowrocket 等第三方客户端用户无法使用",
      "清单中 2026-10-19 各地区测速表尚未填充可比实测数值（待核实）"
    ],
    "bestFor": [
      "习惯直接安装官方客户端、不折腾 Clash 配置的纯应用使用者",
      "需要大流量月付（360GB~1.6TB）的企业或高频个人"
    ],
    "description": "隐形人成立于 2024 年，定位企业级 IPLC 专线直连服务，特点是全面使用自带全平台一键客户端（**不提供第三方订阅链接**）。年付小包 ¥109/年（80GB/月），常规月付白银版 ¥24 起含 144GB 流量，支持 Netflix/Disney+/ChatGPT 等官方标注场景，优惠码 moon80 / yxr888。",
    "lastVerified": "2026-10-19",
    "plans": [
      {
        "name": "星耀风暴 365天不熄",
        "cycle": "年付",
        "price": "¥109",
        "traffic": "80GB/月",
        "periodNote": "折约 ¥9.08/月"
      },
      {
        "name": "隐形人 白银纪元",
        "cycle": "月付",
        "price": "¥24",
        "traffic": "144GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "隐形人 黄金序列",
        "cycle": "月付",
        "price": "¥48",
        "traffic": "360GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "隐形人 铂金至臻",
        "cycle": "月付",
        "price": "¥105",
        "traffic": "750GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "隐形人 钻石穹顶",
        "cycle": "月付",
        "price": "¥185",
        "traffic": "1.6TB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "王者定制版",
        "cycle": "月付",
        "price": "¥680",
        "traffic": "500GB/月",
        "periodNote": "定制独享"
      },
      {
        "name": "一次性小流量",
        "cycle": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "一次性标准流量包",
        "cycle": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "一次性精英流量包",
        "cycle": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "periodNote": "一次性有效"
      }
    ],
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "node-dependent"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "node-dependent"
        }
      ],
      "note": "所有节点功能基于官方品牌资料描述，未附独立分区测速大图；仅支持自研专属客户端。"
    },
    "verificationGaps": [
      "未提供第三方订阅链接",
      "官方“1小时修复承诺”属品牌方单方面说明",
      "各地区测速实测数据与协议明细待核实"
    ]
  },
  {
    "id": "ermaoyun",
    "slug": "ermaoyun",
    "name": "二猫云 (ErMaoYun)",
    "tagline": "20元月付130GB · VLESS + IEPL专线 · 中等流量稳健型选择",
    "establishedYear": 2023,
    "score": {
      "overall": 9.3,
      "stability": 9.4,
      "speed": 9.3,
      "support": 9.1,
      "value": 9.4
    },
    "pricing": {
      "minMonthly": 20,
      "currency": "CNY",
      "billingPeriod": "月付 20 元 (130GB)",
      "hasTrial": false
    },
    "couponCode": "ermao5555",
    "discountInfo": "优惠码：ermao5555",
    "testImages": [
      {
        "title": "二猫云节点测速实测图",
        "url": "/assets/speedtests/ermaoyun.png",
        "desc": "IEPL 专线节点延迟均衡，VLESS 协议表现稳健。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "20 元月付",
      "130GB 流量",
      "VLESS 协议",
      "IEPL 专线",
      "全平台订阅"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "覆盖常见 AI 网页访问与调用。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "覆盖主流流媒体高清追剧。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "officialSite": "https://guangs.2maoyunaff.cc",
    "refundPolicy": "支持工单咨询",
    "nodeCount": 45,
    "bandwidthLimit": "130GB - 900GB / 月",
    "pros": [
      "20 元提供 130GB 流量，介于 120GB 与 150GB 之间的黄金档位",
      "IEPL 专线保障高峰期不丢包"
    ],
    "cons": [
      "以月付订阅为主要计费模式"
    ],
    "bestFor": [
      "每月 100-130GB 流量需求者",
      "20元档专线用户",
      "日常稳健出海者"
    ],
    "description": "二猫云提供 20 元 130GB 的月付组合，采用 VLESS 和 IEPL 专线，流量与价格拿捏适中，运行稳健。",
    "lastVerified": "2026-08-21",
    "rankTier": "top10",
    "dataStatus": "measured",
    "subscriptionMode": "client-only",
    "plans": [
      {
        "name": "二猫年付小包",
        "cycle": "年付",
        "price": "¥89",
        "traffic": "60GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "二猫云·不限时套餐",
        "cycle": "一次性付费",
        "price": "¥99",
        "traffic": "100GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "二猫云·白猫套餐",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "130GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "230GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "cycle": "月付",
        "price": "¥80",
        "traffic": "430GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "cycle": "月付",
        "price": "¥160",
        "traffic": "850GB/月",
        "periodNote": "每月重置"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "22ms",
          "download": "481Mbps"
        },
        {
          "region": "台湾",
          "latency": "41ms",
          "download": "118Mbps"
        },
        {
          "region": "新加坡",
          "latency": "46ms",
          "download": "407Mbps"
        },
        {
          "region": "日本",
          "latency": "53ms",
          "download": "143Mbps"
        },
        {
          "region": "美国",
          "latency": "134ms",
          "download": "17Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "node-dependent"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "官方明确不做超低价走量，配独家定制客户端、不限设备数量；Claude 与 Gemini 视具体节点而定。"
    }
  },
  {
    "id": "wuyou",
    "slug": "wuyou",
    "name": "无忧链接 (WorryFree)",
    "rankTier": "top10",
    "dataStatus": "measured",
    "subscriptionMode": "both",
    "tagline": "2025年运营 · 订阅免转换 & 年付79元起 · 含50节点测速与三家流媒体实测图",
    "establishedYear": 2025,
    "score": {
      "overall": 9.3,
      "stability": 9.2,
      "speed": 9.4,
      "support": 9.2,
      "value": 9.4
    },
    "pricing": {
      "minMonthly": 6.58,
      "currency": "CNY",
      "billingPeriod": "MINI链接年付 79元/年 (约6.58元/月 40GB) · 舒心月付 19元(100GB)",
      "hasTrial": false
    },
    "couponCode": "wuyou666",
    "discountInfo": "专属优惠码：wuyou666（以官网结算为准）",
    "testImages": [
      {
        "title": "无忧链接 MiaoKO 珠海联通 9Gbps 50 节点测速图（峰值 638.48MB/s）",
        "url": "/assets/speedtests/wuyou-speed.jpg",
        "desc": "2026-07-18 21:40 CST 实测 50 个 VLESS 节点全通：香港节点均值普遍 518~547MB/s（最高 638.48MB/s），新加坡主节点 211~352MB/s，日本节点 96~198MB/s，支持 FullCone UDP。"
      },
      {
        "title": "无忧链接 YouTube / Netflix / Disney+ 御三家流媒体解锁实测图（50/50 节点）",
        "url": "/assets/speedtests/wuyou-unlock.jpg",
        "desc": "2026-07-18 21:47 CST 实测：50 个节点全量解锁 Netflix 与 Disney+（涵盖美/新/台/日/港）；YouTube 除香港01显示送中外其余 49 个节点均正确解锁对应区域。"
      }
    ],
    "routes": [
      "iepl",
      "bgp"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "全线无倍率、不限速、不限设备同时在线",
      "同时提供通用直连订阅（无需转换）与官方专属客户端",
      "拥有 50 节点 VLESS 晚间实测 + 御三家流媒体解锁双图验证",
      "支持 TikTok 跨区与跨境电商辅助使用"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": false,
      "cursor": true,
      "notes": "品牌资料显示支持 ChatGPT 与 Claude，Gemini 视具体落地节点而定。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "拥有 2026-07-18 50 节点实测图证：Netflix/Disney+ 全地区解锁，YouTube 49/50 解锁。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "officialSite": "https://wep01.worryfreeaff.com",
    "refundPolicy": "7×24 在线客服支持（2026年10月起推荐搭配官方专属客户端）",
    "nodeCount": 50,
    "bandwidthLimit": "40GB - 1000GB / 月 · 含 100GB/300GB 永久包",
    "pros": [
      "同时具备 2026-07-18 MiaoKO 测速大图与流媒体御三家解锁大图，实测可信度高",
      "年付 MINI 档仅 ¥79/年（折约 ¥6.58/月），舒心月付 ¥19 含 100GB 且无倍率限速",
      "兼顾 TikTok 跨区直连、不限设备以及 100G/300G 永久不限时流量包"
    ],
    "cons": [
      "2025 年上线品牌相对较新，MINI 年付 40GB/月仅适合轻度备用或单一电商辅助，重度使用建议选 ¥19 以上档位"
    ],
    "bestFor": [
      "轻度备用及跨境电商/TikTok 辅助运营",
      "注重有流媒体解锁实测大图作证的性价比玩家",
      "偏好无需订阅转换即可直接使用的省心用户"
    ],
    "description": "无忧链接（WorryFree）运营于 2025 年，兼具约 6.58 元/月的极低入门年付门槛（MINI 79元/年）与 50 节点 MiaoKO 晚间实测及流媒体解锁双图证。全线 1 倍流量不限设备，2026 年 10 月起同时推官方专属客户端模式并保留免转换订阅体验。",
    "lastVerified": "2026-10-19",
    "plans": [
      {
        "name": "MINI链接",
        "cycle": "年付",
        "price": "¥79",
        "traffic": "40GB/月",
        "periodNote": "折约 ¥6.58/月"
      },
      {
        "name": "舒心链接",
        "cycle": "月付",
        "price": "¥19",
        "traffic": "100GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "省心链接",
        "cycle": "月付",
        "price": "¥33",
        "traffic": "200GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "随心链接",
        "cycle": "月付",
        "price": "¥77",
        "traffic": "500GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "忘忧链接",
        "cycle": "月付",
        "price": "¥117",
        "traffic": "1000GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "cycle": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "cycle": "一次性付费",
        "price": "¥298",
        "traffic": "300GB",
        "periodNote": "一次性有效"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "23ms",
          "download": "531Mbps"
        },
        {
          "region": "台湾",
          "latency": "41ms",
          "download": "107Mbps"
        },
        {
          "region": "新加坡",
          "latency": "42ms",
          "download": "418Mbps"
        },
        {
          "region": "日本",
          "latency": "55ms",
          "download": "147Mbps"
        },
        {
          "region": "美国",
          "latency": "145ms",
          "download": "17Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "supported"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "附 2026-07-18 实测图确认 YouTube / Netflix / Disney+ 美新台日港多区解锁能力。"
    }
  },
  {
    "id": "weitucloud",
    "slug": "weitucloud",
    "name": "唯兔云 (WeiTuCloud)",
    "tagline": "14.9元月付100GB · 60+多地区节点覆盖 · 三网优化与智能负载均衡",
    "establishedYear": 2023,
    "score": {
      "overall": 9.3,
      "stability": 9.3,
      "speed": 9.3,
      "support": 9,
      "value": 9.5
    },
    "pricing": {
      "minMonthly": 14.9,
      "currency": "CNY",
      "billingPeriod": "月付 14.9 元 (100GB)",
      "hasTrial": false
    },
    "couponCode": "weitu666",
    "discountInfo": "最新专属优惠码：weitu666（历史老码 rabbit 仍可对照尝试）",
    "testImages": [
      {
        "title": "唯兔云节点测速实测图",
        "url": "/assets/speedtests/weitucloud.png",
        "desc": "60+ 节点三网优化调度，电信联通移动均能自动分配最优低延迟入口。"
      }
    ],
    "routes": [
      "iplc",
      "bgp",
      "iepl"
    ],
    "protocols": [
      "trojan",
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "14.9 元超低月付",
      "100GB 流量",
      "60+ 节点覆盖",
      "三网智能优化",
      "智能负载均衡"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "覆盖常见 AI 网页访问场景。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "多节点支持流媒体高清观看。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "officialSite": "https://guangs.v2yunvipaff.com",
    "refundPolicy": "支持工单处理",
    "nodeCount": 65,
    "bandwidthLimit": "100GB - 800GB / 月",
    "pros": [
      "月付仅 14.9 元即可享受 100GB 流量",
      "节点数量多达 60+，三网智能调度好",
      "优惠码【rabbit】再享 9 折"
    ],
    "cons": [
      "更偏向网络调度与基础多节点配置"
    ],
    "bestFor": [
      "注重多节点选择的用户",
      "跨地区网络适配需求者",
      "15元预算月付用户"
    ],
    "description": "唯兔云公开卖点聚焦于扎实的基础网络配置：VLESS 协议、60+ 节点池、三网优化与智能负载均衡，14.9 元月付性价比亮眼。",
    "lastVerified": "2026-08-21",
    "rankTier": "top10",
    "dataStatus": "measured",
    "subscriptionMode": "subscription",
    "plans": [
      {
        "name": "唯兔云·年付版限量款",
        "cycle": "年付",
        "price": "¥79.9",
        "traffic": "45GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "唯兔云·年付加强专线",
        "cycle": "年付",
        "price": "¥120",
        "traffic": "75GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "唯兔云·节假日限时开启",
        "cycle": "月付",
        "price": "¥14.9",
        "traffic": "100GB/月",
        "periodNote": "限时开放"
      },
      {
        "name": "唯兔云·普通版",
        "cycle": "月付",
        "price": "¥19.9",
        "traffic": "150GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "唯兔云·进阶版",
        "cycle": "月付",
        "price": "¥29.9",
        "traffic": "200GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "唯兔云·专业版",
        "cycle": "月付",
        "price": "¥59.9",
        "traffic": "500GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "唯兔云·至尊版",
        "cycle": "月付",
        "price": "¥119.9",
        "traffic": "1000GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "唯兔云·永久不限时",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "唯兔云·永久不限时",
        "cycle": "一次性付费",
        "price": "¥160",
        "traffic": "200GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "唯兔云·永久不限时",
        "cycle": "一次性付费",
        "price": "¥340",
        "traffic": "500GB",
        "periodNote": "一次性有效"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "27ms",
          "download": "500Mbps"
        },
        {
          "region": "台湾",
          "latency": "37ms",
          "download": "100Mbps"
        },
        {
          "region": "新加坡",
          "latency": "44ms",
          "download": "414Mbps"
        },
        {
          "region": "日本",
          "latency": "56ms",
          "download": "147Mbps"
        },
        {
          "region": "美国",
          "latency": "179ms",
          "download": "17Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "supported"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "1 倍流量、不限速、不限设备，覆盖 60+ 节点与三网智能负载均衡，性价比突出。"
    }
  },
  {
    "id": "firefly",
    "slug": "firefly",
    "name": "Firefly (萤火虫)",
    "rankTier": "top10",
    "dataStatus": "vendor",
    "subscriptionMode": "client-only",
    "tagline": "IPLC 纯专线 + VLESS · 年付 96元(60GB/月) · 不限设备原生 IP & 免翻墙官网",
    "establishedYear": 2023,
    "score": {
      "overall": 9.3,
      "stability": 9.3,
      "speed": 9.3,
      "support": 9.1,
      "value": 9.3
    },
    "pricing": {
      "minMonthly": 8,
      "currency": "CNY",
      "billingPeriod": "Firefly 年付版 96元/年 (8元/月 60GB) · 月付25元(150GB)",
      "hasTrial": false
    },
    "couponCode": "firefly",
    "discountInfo": "新用户 8 折优惠码：firefly（年付版与部分特惠包不适用）",
    "routes": [
      "iplc"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "custom-app"
    ],
    "features": [
      "IPLC 专线 + VLESS 协议，不限速与不限设备",
      "8 年老牌同源团队技术支持（与微风/飞鸟存在关联背景）",
      "原生 IP 覆盖香港、新加坡、日本、美国",
      "支持免翻墙直连官网 + 专属客户端登录即连"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": false,
      "cursor": true,
      "notes": "品牌资料注明支持 ChatGPT、Claude 与 Meta AI；Gemini 视节点情况而定。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "原生 IP 面向 Netflix、Disney+、YouTube、HBO Max、TikTok 与 Spotify 解锁。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "officialSite": "https://vip02.fireflyaff.com",
    "refundPolicy": "无免费试用；支持 支付宝 / USDT 购买",
    "nodeCount": 50,
    "bandwidthLimit": "60GB - 1000GB / 月 · 含 100GB 不限时包",
    "pros": [
      "年付 96 元起享受 IPLC + VLESS 架构，老牌技术背景叠加 8 折码性价比稳健",
      "套餐齐全（60G 年付、150G~1TB 多周期折扣、100G 永久包）且免翻墙访问官网"
    ],
    "cons": [
      "清单明确 2026 年 10 月后仅提供专属客户端（不提供通用订阅链接）",
      "文中“萤火虫”属同品牌双入口汇总，已合并整理避免重复误导"
    ],
    "bestFor": [
      "认可专属客户端简便操作且需 IPLC 原生 IP 的长期用户",
      "高频 ChatGPT / 流媒体消费者"
    ],
    "description": "Firefly（中文名萤火虫，已与文末同名条目去重合并）主打 IPLC 纯专线与 VLESS 协议，不限速、不限设备且具备原生 IP。年付版仅 96 元/年（折 8 元/月），并有 Lite/Plus/Blaze/Nova 月付至三年付及 100GB 不限时包，优惠码 firefly 享新用户 8 折（年付版除外）。",
    "lastVerified": "2026-10-19",
    "plans": [
      {
        "name": "Firefly 年付版",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB/月",
        "periodNote": "均摊 ¥8/月（不适用优惠码）"
      },
      {
        "name": "Firefly Lite",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB/月",
        "periodNote": "支持季9/半年85/年8折"
      },
      {
        "name": "Firefly Plus",
        "cycle": "月付",
        "price": "¥45",
        "traffic": "300GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "Firefly Blaze",
        "cycle": "月付",
        "price": "¥85",
        "traffic": "600GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "Firefly Nova",
        "cycle": "月付",
        "price": "¥150",
        "traffic": "1000GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "Firefly 不限时",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "periodNote": "一次性有效"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "27ms",
          "download": "547Mbps"
        },
        {
          "region": "台湾",
          "latency": "39ms",
          "download": "135Mbps"
        },
        {
          "region": "新加坡",
          "latency": "42ms",
          "download": "445Mbps"
        },
        {
          "region": "日本",
          "latency": "57ms",
          "download": "147Mbps"
        },
        {
          "region": "美国",
          "latency": "143ms",
          "download": "30Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "supported"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "合并 Firefly 与萤火虫两条资料记录；当前专属客户端直接登录使用，无独立测速截图归档。"
    }
  },
  {
    "id": "yuzhoucloud",
    "slug": "yuzhoucloud",
    "name": "宇宙云 (YuZhouCloud)",
    "tagline": "14.9元月付低门槛 · VLESS + IEPL专线 · 性价比专线标杆",
    "establishedYear": 2023,
    "score": {
      "overall": 9.3,
      "stability": 9.4,
      "speed": 9.3,
      "support": 9,
      "value": 9.6
    },
    "pricing": {
      "minMonthly": 14.9,
      "currency": "CNY",
      "billingPeriod": "月付 14.9 元 (100GB)",
      "hasTrial": false
    },
    "couponCode": "YUZHOU553",
    "discountInfo": "优惠码：YUZHOU553（历史资料记录新用户 8 折，下单前以官网最新显示为准）",
    "testImages": [
      {
        "title": "宇宙云节点测速实测图",
        "url": "/assets/speedtests/yuzhoucloud.png",
        "desc": "15 元档 IEPL 专线稳定连接，VLESS 协议吞吐流畅。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "14.9 元月付",
      "100GB 流量",
      "VLESS 协议",
      "IEPL 专线",
      "自研客户端"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "支持常见 AI 网页访问。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "覆盖主流海外流媒体高清播放。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "officialSite": "https://wzjc.yuzoucloud.cc",
    "refundPolicy": "支持工单咨询",
    "nodeCount": 46,
    "bandwidthLimit": "100GB - 800GB / 月",
    "pros": [
      "14.9 元即可月付使用 VLESS + IEPL 专线",
      "价格门槛极低，适合学生与轻度用户",
      "自研与第三方订阅双轨支持"
    ],
    "cons": [
      "按月付周期计费需按月续订"
    ],
    "bestFor": [
      "15元档预算用户",
      "VLESS + 专线追求者",
      "高性价比出海用户"
    ],
    "description": "宇宙云主打 14.9 元月付 + 100GB + VLESS + IEPL 专线，属于价格门槛极低、诚意十足的月付专线型品牌。",
    "lastVerified": "2026-08-21",
    "rankTier": "core",
    "dataStatus": "measured",
    "subscriptionMode": "unknown",
    "verificationGaps": [
      "完整周期套餐明细与当期非晚高峰逐地区测速表待官网核实"
    ]
  },
  {
    "id": "u1s1",
    "slug": "u1s1",
    "name": "U1S1 机场",
    "tagline": "20元月付标杆 · 120GB充足流量 · VLESS + IEPL专线均衡型",
    "establishedYear": 2023,
    "score": {
      "overall": 9.4,
      "stability": 9.5,
      "speed": 9.4,
      "support": 9.2,
      "value": 9.4
    },
    "pricing": {
      "minMonthly": 20,
      "currency": "CNY",
      "billingPeriod": "月付 20 元 (120GB)",
      "hasTrial": false
    },
    "couponCode": "akaka",
    "discountInfo": "优惠码：akaka",
    "testImages": [
      {
        "title": "U1S1 节点测速实测图",
        "url": "/assets/speedtests/u1s1.png",
        "desc": "VLESS 协议与 IEPL 专线结合，节点延迟稳定在 30-50ms 优质区间。"
      }
    ],
    "routes": [
      "iplc",
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "纯月付 20 元",
      "120GB 大配额",
      "IEPL 专线",
      "VLESS 协议",
      "自研客户端"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "支持常见 AI 场景，节点连接顺畅。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "覆盖主流海外流媒体 4K 播放。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "officialSite": "https://guangs.vipaff.cc",
    "refundPolicy": "支持工单咨询",
    "nodeCount": 52,
    "bandwidthLimit": "120GB - 1000GB / 月",
    "pros": [
      "真正灵活月付，20 元即可获得 120GB 专线流量",
      "VLESS + IEPL 组合，线路稳定度好",
      "自研与第三方订阅双轨支持"
    ],
    "cons": [
      "起步价为 20 元常规月付"
    ],
    "bestFor": [
      "不想一次年付的月付用户",
      "每月 100GB 左右中度流量用户",
      "追求线路与价格平衡者"
    ],
    "description": "U1S1 以 20 元月付、120GB 流量、VLESS 和 IEPL 专线为核心卖点，在灵活性、流量和线路品质之间达成了极佳平衡。",
    "lastVerified": "2026-08-21",
    "rankTier": "core",
    "dataStatus": "measured",
    "subscriptionMode": "subscription",
    "plans": [
      {
        "name": "u1s1·就是好用包",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "u1s1·普通人真够了包",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "120GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "u1s1·你以为用不到包",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "300GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "700GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "u1s1·我全都要包",
        "cycle": "月付",
        "price": "¥180",
        "traffic": "1500GB/月",
        "periodNote": "每月重置"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "24ms",
          "download": "538Mbps"
        },
        {
          "region": "台湾",
          "latency": "39ms",
          "download": "107Mbps"
        },
        {
          "region": "新加坡",
          "latency": "46ms",
          "download": "414Mbps"
        },
        {
          "region": "日本",
          "latency": "57ms",
          "download": "133Mbps"
        },
        {
          "region": "美国",
          "latency": "134ms",
          "download": "20Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "supported"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "2026-08-11 22:33 晚间测速截图 + 2026-10-19 分区测试完整，不限设备连接。"
    }
  },
  {
    "id": "lingmaonet",
    "slug": "lingmaonet",
    "name": "灵猫网络 (LingMaoNet)",
    "tagline": "19元月付150GB大流量 · 企业级内网专线 · 提供不限时套餐",
    "establishedYear": 2024,
    "score": {
      "overall": 9.4,
      "stability": 9.4,
      "speed": 9.4,
      "support": 9.1,
      "value": 9.7
    },
    "pricing": {
      "minMonthly": 19,
      "currency": "CNY",
      "billingPeriod": "月付 19 元 (150GB)",
      "hasTrial": false
    },
    "couponCode": "lmao888",
    "discountInfo": "新人优惠码 lmao888 / lingmao（年付小包通常不参与，以官网结算为准）",
    "testImages": [
      {
        "title": "灵猫网络节点测速实测图",
        "url": "/assets/speedtests/lingmaonet.png",
        "desc": "企业级内网专线大流量吞吐稳定，适合高频多设备下载与刷视频。"
      }
    ],
    "routes": [
      "iepl",
      "bgp"
    ],
    "protocols": [
      "vless",
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "19 元月付 150GB 大流量",
      "企业级内网专线",
      "不限时套餐可选",
      "支持全平台订阅"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "覆盖常见 AI 对话与开发交互。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "满足高码率视频与日常追剧大流量需求。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "officialSite": "https://vip01.civetnet.com",
    "refundPolicy": "支持工单售后",
    "nodeCount": 50,
    "bandwidthLimit": "150GB - 1500GB / 月 (或不限时)",
    "pros": [
      "19 元月付提供高达 150GB 流量，大流量性价比极高",
      "企业级内网专线保障速度与连通率",
      "提供不限时套餐选项"
    ],
    "cons": [
      "不同周期套餐规格以官网为准"
    ],
    "bestFor": [
      "每月需要 150GB 以上大流量用户",
      "追剧与视频重度用户",
      "月付大流量追求者"
    ],
    "description": "灵猫网络在中低价月付档中以 19 元 150GB 大流量脱颖而出，结合企业专线与丰富套餐体系，满足中重度流量用户。",
    "lastVerified": "2026-08-21",
    "rankTier": "core",
    "dataStatus": "measured",
    "subscriptionMode": "client-only",
    "plans": [
      {
        "name": "灵猫·年付小包",
        "cycle": "年付",
        "price": "¥85",
        "traffic": "45GB/月",
        "periodNote": "折约 ¥7.1/月"
      },
      {
        "name": "灵猫·月付Small",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "灵猫·月付Big",
        "cycle": "月付",
        "price": "¥45",
        "traffic": "300GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "灵猫·季付Big",
        "cycle": "季付",
        "price": "¥125",
        "traffic": "300GB/月",
        "periodNote": "每季重置"
      },
      {
        "name": "灵猫·年付Small",
        "cycle": "年付",
        "price": "¥195",
        "traffic": "150GB/月",
        "periodNote": "每年有效"
      },
      {
        "name": "灵猫·年付Big",
        "cycle": "年付",
        "price": "¥295",
        "traffic": "300GB/月",
        "periodNote": "每年有效"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "22ms",
          "download": "492Mbps"
        },
        {
          "region": "台湾",
          "latency": "40ms",
          "download": "109Mbps"
        },
        {
          "region": "新加坡",
          "latency": "46ms",
          "download": "409Mbps"
        },
        {
          "region": "日本",
          "latency": "57ms",
          "download": "147Mbps"
        },
        {
          "region": "美国",
          "latency": "164ms",
          "download": "19Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "supported"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "1 倍流量不限速不限设备，2026-10 起官方资料注明采用专属客户端登录使用。"
    }
  },
  {
    "id": "jilianyun",
    "slug": "jilianyun",
    "name": "极连云 (JiLianYun)",
    "tagline": "18元月付100GB · IEPL物理专线 · AI与流媒体综合型出海方案",
    "establishedYear": 2024,
    "score": {
      "overall": 9.3,
      "stability": 9.4,
      "speed": 9.3,
      "support": 9,
      "value": 9.4
    },
    "pricing": {
      "minMonthly": 18,
      "currency": "CNY",
      "billingPeriod": "月付 18 元 (100GB)",
      "hasTrial": false
    },
    "couponCode": "ji8888",
    "discountInfo": "优惠码：ji8888",
    "testImages": [
      {
        "title": "极连云节点测速实测图",
        "url": "/assets/speedtests/jilianyun.png",
        "desc": "IEPL 专线保障 20 元以内综合使用场景的平稳低延迟。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless",
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "18 元月付",
      "100GB 配额",
      "IEPL 物理专线",
      "自研客户端支持",
      "AI与流媒体兼顾"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "覆盖主流海外 AI 访问需求。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "支持常见流媒体多区视频播放。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "officialSite": "https://guangs.jlyvipaff.com",
    "refundPolicy": "支持工单咨询",
    "nodeCount": 45,
    "bandwidthLimit": "100GB - 800GB / 月",
    "pros": [
      "将 IEPL 专线月付控制在 18 元，性价比突出",
      "AI 与流媒体场景综合覆盖均衡",
      "自研客户端新手即开即用"
    ],
    "cons": [
      "动态解锁能力以实测为准"
    ],
    "bestFor": [
      "月预算 20 元以内用户",
      "AI 与影音兼顾者",
      "追求专线稳定者"
    ],
    "description": "极连云主打 18 元月付 + 100GB + IEPL 专线，适合希望将月度支出控制在 20 元以内同时享受高品质专线的用户。",
    "lastVerified": "2026-08-21",
    "rankTier": "core",
    "dataStatus": "measured",
    "subscriptionMode": "both"
  },
  {
    "id": "guangnianti",
    "slug": "guangnianti",
    "name": "光年梯 (GuangNianTi)",
    "tagline": "18元月付110GB · 新锐VLESS+IEPL专线 · AI与视频双场景优化",
    "establishedYear": 2025,
    "score": {
      "overall": 9.2,
      "stability": 9.3,
      "speed": 9.3,
      "support": 9,
      "value": 9.5
    },
    "pricing": {
      "minMonthly": 18,
      "currency": "CNY",
      "billingPeriod": "月付 18 元 (110GB)",
      "hasTrial": false
    },
    "couponCode": "gnt6666",
    "discountInfo": "优惠码：gnt6666",
    "testImages": [
      {
        "title": "光年梯节点测速实测图",
        "url": "/assets/speedtests/guangnianti.png",
        "desc": "2025 新锐专线架构，结合 VLESS 协议低开销特性。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "18 元月付",
      "110GB 流量",
      "VLESS 协议",
      "IEPL 专线",
      "提供自研客户端"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "优化常见 AI 工具访问与 API 连接。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "支持主流流媒体 4K 播放。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "officialSite": "https://guangs.gntaff.com",
    "refundPolicy": "支持工单咨询",
    "nodeCount": 42,
    "bandwidthLimit": "110GB - 700GB / 月",
    "pros": [
      "18 元月付给到 110GB 流量，比同价位多 10GB",
      "VLESS + IEPL 现代化网络底座",
      "自研客户端方便快速配置"
    ],
    "cons": [
      "新锐品牌，持续运营表现继续保持追踪"
    ],
    "bestFor": [
      "中低预算专线需求者",
      "AI 与视频兼顾用户",
      "18元月付档选择者"
    ],
    "description": "光年梯提供 18 元/月 110GB 套餐，结合 VLESS 与 IEPL 专线，定位介于低价小流量与重度专线之间，表现均衡。",
    "lastVerified": "2026-08-21",
    "rankTier": "core",
    "dataStatus": "measured",
    "subscriptionMode": "both"
  },
  {
    "id": "yifanyun",
    "slug": "yifanyun",
    "name": "一翻云 (YiFanYun)",
    "tagline": "20元月付150GB大流量 · VLESS + IEPL专线 · 性价比大流量标杆",
    "establishedYear": 2024,
    "score": {
      "overall": 9.4,
      "stability": 9.5,
      "speed": 9.4,
      "support": 9.1,
      "value": 9.7
    },
    "pricing": {
      "minMonthly": 20,
      "currency": "CNY",
      "billingPeriod": "月付 20 元 (150GB)",
      "hasTrial": false
    },
    "couponCode": "yfy6666",
    "discountInfo": "优惠码：yfy6666 / 1FLYYUN（以官网当前结算规则为准）",
    "testImages": [
      {
        "title": "一翻云节点测速实测图",
        "url": "/assets/speedtests/yifanyun.png",
        "desc": "20 元档 150GB 大流量专线实测，吞吐表现稳定突出。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "hysteria2",
      "vless",
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "20 元月付",
      "150GB 大流量",
      "VLESS 协议",
      "IEPL 专线",
      "支持第三方订阅"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "覆盖常见 AI 场景使用。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "支持主流流媒体多区视频播放。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "officialSite": "https://guangs.1flyunaff.cc",
    "refundPolicy": "支持工单售后",
    "nodeCount": 48,
    "bandwidthLimit": "150GB - 1200GB / 月",
    "pros": [
      "20 元档独享 150GB 超大月流量，同价位规格拔尖",
      "VLESS + IEPL 专线保障不缩水",
      "适合月流量需求超 100GB 的用户"
    ],
    "cons": [
      "主要通过第三方客户端订阅导入使用"
    ],
    "bestFor": [
      "20元档大流量追求者",
      "重度追剧与下载用户",
      "月付高性价比党"
    ],
    "description": "一翻云最大的亮点是 20 元月付即可获得 150GB 专线流量，在 20 元主流价格区间内流量规格极其突出。",
    "lastVerified": "2026-08-21",
    "rankTier": "core",
    "dataStatus": "measured",
    "subscriptionMode": "subscription",
    "plans": [
      {
        "name": "98¥·年付小包",
        "cycle": "年付",
        "price": "¥98",
        "traffic": "60GB/月",
        "periodNote": "折约 ¥8.2/月"
      },
      {
        "name": "轻享版",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "150GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "舒享版",
        "cycle": "月付",
        "price": "¥35",
        "traffic": "350GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "尊享版",
        "cycle": "月付",
        "price": "¥55",
        "traffic": "600GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "极致版",
        "cycle": "月付",
        "price": "¥95",
        "traffic": "1.2TB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "轻享版·不限时包",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "舒享版·不限时包",
        "cycle": "一次性付费",
        "price": "¥200",
        "traffic": "250GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "尊享版·不限时包",
        "cycle": "一次性付费",
        "price": "¥400",
        "traffic": "500GB",
        "periodNote": "一次性有效"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "23ms",
          "download": "477Mbps"
        },
        {
          "region": "台湾",
          "latency": "40ms",
          "download": "117Mbps"
        },
        {
          "region": "新加坡",
          "latency": "42ms",
          "download": "390Mbps"
        },
        {
          "region": "日本",
          "latency": "53ms",
          "download": "136Mbps"
        },
        {
          "region": "美国",
          "latency": "180ms",
          "download": "20Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "supported"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "IEPL 物理专线搭配原生住宅 IP，支持 Hysteria2 / VLESS / Shadowsocks 三协议，含台湾节点与不限时包。"
    }
  },
  {
    "id": "sogoyun",
    "slug": "sogoyun",
    "name": "SOGO 云 (SOGOYun)",
    "tagline": "25元月付150GB · 2026新锐全IEPL专线 · VLESS高速综合型",
    "establishedYear": 2026,
    "score": {
      "overall": 9.4,
      "stability": 9.4,
      "speed": 9.5,
      "support": 9.2,
      "value": 9.3
    },
    "pricing": {
      "minMonthly": 25,
      "currency": "CNY",
      "billingPeriod": "月付 25 元 (150GB)",
      "hasTrial": false
    },
    "couponCode": "sss777",
    "discountInfo": "优惠码：SOGO10000（9 折） / sss777，注意采用自研客户端不支持 Clash 订阅导入",
    "testImages": [
      {
        "title": "SOGO 云节点测速实测图",
        "url": "/assets/speedtests/sogoyun.png",
        "desc": "新锐 IEPL 专线架构，VLESS 节点吞吐爆发力强。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "25 元月付",
      "150GB 流量",
      "VLESS 协议",
      "IEPL 专线",
      "自研客户端支持"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "覆盖常见海外 AI 工具使用场景。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "主流海外流媒体高清秒开。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "officialSite": "https://guangs.sogoyunaff.cc",
    "refundPolicy": "支持工单咨询",
    "nodeCount": 46,
    "bandwidthLimit": "150GB - 1000GB / 月",
    "pros": [
      "25 元档 150GB 充足配额",
      "VLESS + IEPL 综合型高速专线",
      "自研客户端降低新手门槛"
    ],
    "cons": [
      "2026 新品牌，长期稳定性持续纳入监测"
    ],
    "bestFor": [
      "追求新专线大带宽用户",
      "150GB 视频与 AI 综合用户",
      "25元档位选择者"
    ],
    "description": "SOGO 云以 25 元、150GB、VLESS 和 IEPL 专线为主打组合，整体定位偏向综合型高速服务商。",
    "lastVerified": "2026-08-21",
    "rankTier": "core",
    "dataStatus": "measured",
    "subscriptionMode": "client-only",
    "plans": [
      {
        "name": "小包-年付版",
        "cycle": "年付",
        "price": "¥98",
        "traffic": "60GB/月",
        "periodNote": "折约 ¥8.2/月"
      },
      {
        "name": "基础版",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "优选版",
        "cycle": "月付",
        "price": "¥45",
        "traffic": "350GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "强化版",
        "cycle": "月付",
        "price": "¥80",
        "traffic": "550GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "顶配版",
        "cycle": "月付",
        "price": "¥150",
        "traffic": "1.1TB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "SOGO基础餐不限时版",
        "cycle": "一次性付费",
        "price": "¥120",
        "traffic": "120GB",
        "periodNote": "一次性"
      },
      {
        "name": "SOGO优选餐不限时版",
        "cycle": "一次性付费",
        "price": "¥220",
        "traffic": "250GB",
        "periodNote": "一次性"
      },
      {
        "name": "SOGO强化餐不限时版",
        "cycle": "一次性付费",
        "price": "¥450",
        "traffic": "500GB",
        "periodNote": "一次性"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "cycle": "一次性付费",
        "price": "¥850",
        "traffic": "1.0TB",
        "periodNote": "一次性"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "26ms",
          "download": "488Mbps"
        },
        {
          "region": "台湾",
          "latency": "39ms",
          "download": "118Mbps"
        },
        {
          "region": "新加坡",
          "latency": "43ms",
          "download": "401Mbps"
        },
        {
          "region": "日本",
          "latency": "57ms",
          "download": "137Mbps"
        },
        {
          "region": "美国",
          "latency": "140ms",
          "download": "17Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "node-dependent"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "node-dependent"
        },
        {
          "name": "Spotify",
          "status": "node-dependent"
        }
      ],
      "note": "覆盖 15 国和地区，自研跨平台客户端但不提供第三方订阅链接。"
    }
  },
  {
    "id": "kexinyun",
    "slug": "kexinyun",
    "name": "可信云 (KeXinYun)",
    "tagline": "25元月付150GB · IEPL物理专线 · 多设备与家庭日常出海专线",
    "establishedYear": 2024,
    "score": {
      "overall": 9.3,
      "stability": 9.4,
      "speed": 9.3,
      "support": 9.1,
      "value": 9.3
    },
    "pricing": {
      "minMonthly": 25,
      "currency": "CNY",
      "billingPeriod": "月付 25 元 (150GB)",
      "hasTrial": false
    },
    "couponCode": "kkk333",
    "discountInfo": "优惠码：kkk333",
    "testImages": [
      {
        "title": "可信云节点测速实测图",
        "url": "/assets/speedtests/kexinyun.png",
        "desc": "IEPL 专线全天候稳定，适合多设备同时在线。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "25 元月付",
      "150GB 流量",
      "VLESS 协议",
      "IEPL 专线",
      "多设备适配"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "覆盖常见 AI 网页访问场景。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "支持主流流媒体多区视频播放。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "officialSite": "https://guangs.kosingaff.com",
    "refundPolicy": "支持工单咨询",
    "nodeCount": 48,
    "bandwidthLimit": "150GB - 1000GB / 月",
    "pros": [
      "25 元月付 150GB，多设备共享压力小",
      "VLESS + IEPL 物理专线传输"
    ],
    "cons": [
      "流媒体与 AI 解锁以节点实际为准"
    ],
    "bestFor": [
      "多设备办公用户",
      "每月需要 150GB 专线流量用户",
      "25元预算用户"
    ],
    "description": "可信云提供 25 元/月 150GB 套餐，以 VLESS 和 IEPL 专线为核心，更偏向常规网页、视频和多设备日常使用。",
    "lastVerified": "2026-08-21",
    "rankTier": "core",
    "dataStatus": "measured",
    "subscriptionMode": "subscription",
    "verificationGaps": [
      "品牌资料明确声明“AI 与流媒体目前缺乏统一实测数据”"
    ]
  },
  {
    "id": "sujie",
    "slug": "sujie",
    "name": "速界 (SuJie)",
    "tagline": "25元月付150GB · 重点优化 ChatGPT / Claude / Gemini AI 场景",
    "establishedYear": 2024,
    "score": {
      "overall": 9.5,
      "stability": 9.5,
      "speed": 9.4,
      "support": 9.2,
      "value": 9.4
    },
    "pricing": {
      "minMonthly": 25,
      "currency": "CNY",
      "billingPeriod": "月付 25 元 (150GB)",
      "hasTrial": false
    },
    "couponCode": "sss1111",
    "discountInfo": "优惠码：sss1111",
    "testImages": [
      {
        "title": "速界节点测速实测图",
        "url": "/assets/speedtests/sujie.png",
        "desc": "专线针对 OpenAI 与 Claude 路由优化，降低 API 握手延迟。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "25 元月付",
      "150GB 流量",
      "重点优化 AI 场景",
      "VLESS + IEPL 专线",
      "自研客户端"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "品牌资料重点强调 ChatGPT、Claude、Gemini 等 AI 场景，交互低延迟。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "支持常见流媒体正常播放。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "officialSite": "https://guangs.speedworldaff.cc",
    "refundPolicy": "支持工单咨询",
    "nodeCount": 50,
    "bandwidthLimit": "150GB - 1200GB / 月",
    "pros": [
      "针对 ChatGPT、Claude、Gemini 等 AI 场景做过专项优化",
      "25 元月付 150GB 专线流量，配置充裕",
      "自研客户端方便快速连接"
    ],
    "cons": [
      "AI 可用性受平台策略影响需结合节点选择"
    ],
    "bestFor": [
      "AI 深度使用者与开发者",
      "需要专线大流量出海者",
      "25元档 AI 偏好者"
    ],
    "description": "速界在 25 元 150GB 档位中更突出 AI 工具访问场景，配合 VLESS、IEPL 专线与自研客户端，是 AI 用户的品质之选。",
    "lastVerified": "2026-08-21",
    "rankTier": "core",
    "dataStatus": "measured",
    "subscriptionMode": "both"
  },
  {
    "id": "shanyue",
    "slug": "shanyue",
    "name": "闪跃 (FlashLeap)",
    "rankTier": "core",
    "dataStatus": "vendor",
    "subscriptionMode": "client-only",
    "tagline": "纯 IPLC 顶级专线 · 年付 96元(60GB/月) · 专属客户端低延迟设计",
    "establishedYear": 2024,
    "score": {
      "overall": 9.2,
      "stability": 9.3,
      "speed": 9.3,
      "support": 9,
      "value": 9
    },
    "pricing": {
      "minMonthly": 8,
      "currency": "CNY",
      "billingPeriod": "闪跃年付版 96元/年 (8元/月 60GB) · 闪动月付 24元(150GB)",
      "hasTrial": false
    },
    "couponCode": "shanyue",
    "discountInfo": "专属 8 折优惠码：shanyue（仅限闪动 / 飞跃 / 瞬移 / 跃迁，年付版不适用）",
    "routes": [
      "iplc"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "custom-app"
    ],
    "features": [
      "定位纯 IPLC 专线接入与骨干网防拥堵",
      "专属客户端下载登录即用（不提供订阅链接）",
      "年付 96 元，常规月付 24 元给到 150GB"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": false,
      "cursor": true,
      "notes": "资料显示支持 ChatGPT、Claude；Gemini 视节点而定。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "资料显示原生 IP 支持 Netflix、Disney+、YouTube、HBO Max 与 Spotify。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "officialSite": "https://vip02.flashleapaff.com",
    "refundPolicy": "无免费试用，建议先体验月付闪动档",
    "nodeCount": 45,
    "bandwidthLimit": "60GB - 1000GB / 月",
    "pros": [
      "IPLC 纯专线定位下年付起价仍控制在 8 元/月档，且月付闪动档叠加 8 折较划算",
      "原生 IP 解锁面向重度 AI 办公与追剧人群"
    ],
    "cons": [
      "仅支持官方专属客户端，无法导入 Clash Verge / 小火箭",
      "具体底层加密协议名称在原清单中未明确标注"
    ],
    "bestFor": [
      "长期高频追求纯 IPLC 且不想配置第三方客户端的用户"
    ],
    "description": "闪跃定位高端纯 IPLC 专线通道，采用专属客户端登录模式（不提供第三方订阅链接）。提供年付版 96 元/年（60GB/月）与闪动/飞跃/瞬移/跃迁 4 档月付方案，配合 shanyue 优惠码可对月付及以上周期打 8 折。",
    "lastVerified": "2026-10-19",
    "plans": [
      {
        "name": "闪跃年付版",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB/月",
        "periodNote": "折 ¥8/月（不适用优惠码）"
      },
      {
        "name": "闪动 (Flicker)",
        "cycle": "月付",
        "price": "¥24",
        "traffic": "150GB/月",
        "periodNote": "可用 shanyue 8 折"
      },
      {
        "name": "飞跃 (Leap)",
        "cycle": "月付",
        "price": "¥44",
        "traffic": "300GB/月",
        "periodNote": "可用 shanyue 8 折"
      },
      {
        "name": "瞬移 (Teleport)",
        "cycle": "月付",
        "price": "¥84",
        "traffic": "600GB/月",
        "periodNote": "可用 shanyue 8 折"
      },
      {
        "name": "跃迁 (Warp)",
        "cycle": "月付",
        "price": "¥134",
        "traffic": "1000GB/月",
        "periodNote": "可用 shanyue 8 折"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "23ms",
          "download": "548Mbps"
        },
        {
          "region": "台湾",
          "latency": "38ms",
          "download": "110Mbps"
        },
        {
          "region": "新加坡",
          "latency": "44ms",
          "download": "383Mbps"
        },
        {
          "region": "日本",
          "latency": "53ms",
          "download": "144Mbps"
        },
        {
          "region": "美国",
          "latency": "143ms",
          "download": "18Mbps"
        }
      ]
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "supported"
        },
        {
          "name": "Claude",
          "status": "supported"
        },
        {
          "name": "Gemini",
          "status": "node-dependent"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "supported"
        },
        {
          "name": "Disney+",
          "status": "supported"
        },
        {
          "name": "YouTube",
          "status": "supported"
        },
        {
          "name": "HBO Max",
          "status": "supported"
        },
        {
          "name": "TikTok",
          "status": "supported"
        },
        {
          "name": "Spotify",
          "status": "supported"
        }
      ],
      "note": "专属客户端模式，底层协议待官网进一步明示。"
    }
  },
  {
    "id": "quanqiuyun",
    "slug": "quanqiuyun",
    "name": "全球云 (QuanQiuYun)",
    "tagline": "2026新锐 · 20元月付120GB · VLESS + IEPL专线综合档位",
    "establishedYear": 2026,
    "score": {
      "overall": 9.3,
      "stability": 9.3,
      "speed": 9.4,
      "support": 9,
      "value": 9.4
    },
    "pricing": {
      "minMonthly": 20,
      "currency": "CNY",
      "billingPeriod": "月付 20 元 (120GB)",
      "hasTrial": false
    },
    "couponCode": "qq88",
    "discountInfo": "优惠码：qq88 / qqy7777（以官网当前结算页面为准）",
    "testImages": [
      {
        "title": "全球云节点测速实测图",
        "url": "/assets/speedtests/quanqiuyun.png",
        "desc": "新一代 VLESS 专线架构，20 元档位均衡吞吐。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "trojan",
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "20 元月付",
      "120GB 流量",
      "VLESS 协议",
      "IEPL 专线",
      "支持第三方订阅"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "覆盖常见 AI 工具访问场景。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "支持网页与常见海外流媒体播放。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "officialSite": "https://guangs.gcvipaff.com",
    "refundPolicy": "支持工单咨询",
    "nodeCount": 45,
    "bandwidthLimit": "120GB - 900GB / 月",
    "pros": [
      "20 元月付 120GB 专线配额，均衡实用",
      "VLESS + IEPL 现代化网络底座"
    ],
    "cons": [
      "2026 新品牌，保持持续监测追踪"
    ],
    "bestFor": [
      "20元档综合型需求者",
      "每月 100GB 左右用户",
      "新专线尝试者"
    ],
    "description": "全球云提供 20 元月付、120GB、VLESS 与 IEPL 专线，整体规格均衡，属于典型的 20 元综合主力档位。",
    "lastVerified": "2026-08-21",
    "rankTier": "core",
    "dataStatus": "measured",
    "subscriptionMode": "client-only",
    "plans": [
      {
        "name": "轻量版",
        "cycle": "年付",
        "price": "¥99",
        "traffic": "59GB/月",
        "periodNote": "折约 ¥8.25/月"
      },
      {
        "name": "BGP智能优化·入门方案",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "120GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "BGP智能优化·进阶方案",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "300GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "BGP智能优化·高端方案",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "700GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "BGP智能优化·商业方案",
        "cycle": "月付",
        "price": "¥180",
        "traffic": "1500GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "BGP不限时轻量包",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "periodNote": "一次性"
      },
      {
        "name": "BGP不限时标准包",
        "cycle": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "periodNote": "一次性"
      },
      {
        "name": "BGP不限时大容量包",
        "cycle": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "periodNote": "一次性"
      },
      {
        "name": "独享私人专线节点",
        "cycle": "月付",
        "price": "¥680",
        "traffic": "500GB/月",
        "periodNote": "每月重置"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-10-19",
      "testNote": "资料记录（非晚高峰单次参考，不代表长期实时带宽）",
      "rows": [
        {
          "region": "香港",
          "latency": "25ms",
          "download": "489Mbps"
        },
        {
          "region": "台湾",
          "latency": "37ms",
          "download": "117Mbps"
        },
        {
          "region": "新加坡",
          "latency": "45ms",
          "download": "430Mbps"
        },
        {
          "region": "日本",
          "latency": "55ms",
          "download": "133Mbps"
        },
        {
          "region": "美国",
          "latency": "138ms",
          "download": "18Mbps"
        }
      ]
    }
  },
  {
    "id": "kuaili",
    "slug": "kuaili",
    "name": "快狸 (KuaiLi)",
    "tagline": "25元月付150GB · VLESS + IEPL专线 · 影音与日常综合使用型",
    "establishedYear": 2023,
    "score": {
      "overall": 9.3,
      "stability": 9.4,
      "speed": 9.4,
      "support": 9.1,
      "value": 9.3
    },
    "pricing": {
      "minMonthly": 25,
      "currency": "CNY",
      "billingPeriod": "月付 25 元 (150GB)",
      "hasTrial": false
    },
    "couponCode": "kkk2222",
    "discountInfo": "优惠码：kkk2222",
    "testImages": [
      {
        "title": "快狸节点测速实测图",
        "url": "/assets/speedtests/kuaili.png",
        "desc": "IEPL 专线全天候吞吐流畅，影音追剧与网页访问低延迟。"
      }
    ],
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "25 元月付",
      "150GB 流量",
      "VLESS 协议",
      "IEPL 专线",
      "自研客户端"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true,
      "notes": "覆盖常见 AI 服务使用场景。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "覆盖常见流媒体高清追剧需求。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://guangs.kuailicloud.cc/#/register?code=AiqyM8oG",
    "officialSite": "https://guangs.kuailicloud.cc",
    "refundPolicy": "支持工单咨询",
    "nodeCount": 48,
    "bandwidthLimit": "150GB - 1000GB / 月",
    "pros": [
      "25 元月付 150GB 流量，影音与 AI 兼顾",
      "VLESS + IEPL 专线稳定性好",
      "提供自研专属客户端"
    ],
    "cons": [
      "动态能力以实测节点为准"
    ],
    "bestFor": [
      "影音与日常综合使用用户",
      "中等月流量需求者",
      "25元档专线选择者"
    ],
    "description": "快狸采用 VLESS + IEPL 专线，25 元档提供 150GB 月流量，同时覆盖 AI、影音与常规代理需求，整体属于稳健综合型。",
    "lastVerified": "2026-08-21",
    "rankTier": "core",
    "dataStatus": "measured",
    "subscriptionMode": "subscription"
  },
  {
    "id": "shandianshu",
    "slug": "shandianshu",
    "name": "闪电鼠 (ShanDianShu)",
    "rankTier": "core",
    "dataStatus": "vendor",
    "subscriptionMode": "both",
    "tagline": "2024年运营 · 5.6元/月极限平价 · IEPL + VLESS + 60GB/月",
    "establishedYear": 2024,
    "score": {
      "overall": 8.9,
      "stability": 8.9,
      "speed": 9,
      "support": 8.8,
      "value": 9.6
    },
    "pricing": {
      "minMonthly": 5.6,
      "currency": "CNY",
      "billingPeriod": "年付折算约 5.6 元/月 (60GB/月)",
      "hasTrial": false
    },
    "couponCode": "sd88",
    "discountInfo": "季付及以上享 7 折优惠码：sd88",
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "5.6 元/月超低预算级门槛",
      "明确提供 IEPL + VLESS + 自研/三方双兼容",
      "季付及以上可叠 sd88 七折优惠"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：暂无独立 AI 解锁测速图支持。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：暂无流媒体独立测试图表。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "officialSite": "https://qwerty.shandianshuaff.com",
    "refundPolicy": "建议先以季付折后测试稳定性",
    "nodeCount": 40,
    "bandwidthLimit": "60GB/月起（高流量档位待核实）",
    "pros": [
      "目前库中入门门槛最低的 IEPL+VLESS 方案之一（约 5.6 元/月）",
      "兼具自研客户端与第三方通用订阅导入能力"
    ],
    "cons": [
      "与大佬云、云界线、榴莲云、环球梯参数同质化较高，尚缺独立实测大图与解锁核验"
    ],
    "bestFor": [
      "预算卡在 5~6 元/月的轻量查阅及临时备用群体"
    ],
    "description": "闪电鼠于 2024 年起运营，面向极低预算用户提供 IEPL 专线与 VLESS 协议方案，年付均摊约 5.6 元/月（60GB/月），季付以上支持优惠码 sd88 打 7 折。因缺乏第三方实测图表，推荐按最小可折期先测后续。",
    "lastVerified": "2026-10-19",
    "verificationGaps": [
      "完整各档套餐价格表、逐地区测速与 AI/流媒体解锁待核实"
    ]
  },
  {
    "id": "yunjiexian",
    "slug": "yunjiexian",
    "name": "云界线 (YunJieXian)",
    "rankTier": "core",
    "dataStatus": "vendor",
    "subscriptionMode": "both",
    "tagline": "2024年运营 · 5.6元/月 IEPL+VLESS · 注册链接格式特殊提示",
    "establishedYear": 2024,
    "score": {
      "overall": 8.8,
      "stability": 8.8,
      "speed": 8.9,
      "support": 8.7,
      "value": 9.4
    },
    "pricing": {
      "minMonthly": 5.6,
      "currency": "CNY",
      "billingPeriod": "年付折算约 5.6 元/月 (60GB/月)",
      "hasTrial": false
    },
    "couponCode": "yjx888",
    "discountInfo": "季付及以上享 7 折优惠码：yjx888",
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "5.6 元/月平价 IEPL + VLESS",
      "支持季付及以上 7 折",
      "注意官方联盟链接采用无 # 号直连路径"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：缺独立 AI 测试证据。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：缺独立流媒体实测图表。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://qwerty.yunjiexianaff.com/?code=aycnwNUi",
    "officialSite": "https://qwerty.yunjiexianaff.com",
    "refundPolicy": "打开注册页时先确认浏览器地址跳转正常",
    "nodeCount": 40,
    "bandwidthLimit": "60GB/月起",
    "pros": [
      "年付门槛低至 5.6 元/月档，支持 VLESS 协议与 Clash 通用订阅",
      "季付及以上可用 yjx888 激活 7 折"
    ],
    "cons": [
      "联盟链接格式缺少常规前端 # 路由，注册前需核实页面可正常访问；尚无独立测速图"
    ],
    "bestFor": [
      "超低预算备用或希望尝试不同路由链接格式的平价档用户"
    ],
    "description": "云界线（2024 年起运营）属于 5.6 元/月、60GB/月规格的平价 IEPL + VLESS 机场，支持季付及以上 7 折（yjx888）。特别提示其推广链接结构与常规同类略异（缺少 #），注册前请核实跳转及最新套餐信息。",
    "lastVerified": "2026-10-19",
    "verificationGaps": [
      "逐地区测速表、完整套餐梯度及推广链接稳定性待进一步核实"
    ]
  },
  {
    "id": "liulianyun",
    "slug": "liulianyun",
    "name": "榴莲云 (LiuLianYun)",
    "rankTier": "core",
    "dataStatus": "vendor",
    "subscriptionMode": "both",
    "tagline": "2024年运营 · 5.6元/月 IEPL 专线平价方案（协议类型待明确）",
    "establishedYear": 2024,
    "score": {
      "overall": 8.7,
      "stability": 8.7,
      "speed": 8.8,
      "support": 8.6,
      "value": 9.3
    },
    "pricing": {
      "minMonthly": 5.6,
      "currency": "CNY",
      "billingPeriod": "年付折算约 5.6 元/月 (60GB/月)",
      "hasTrial": false
    },
    "couponCode": "ll88",
    "discountInfo": "季付及以上享 7 折优惠码：ll88",
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "IEPL 专线 + 5.6 元/月起价",
      "支持自研客户端与第三方订阅导入",
      "季付及以上优惠码 ll88"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：暂无 AI 解锁测试记录。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：暂无流媒体测试记录。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "officialSite": "https://qwerty.liulianyunaff.com",
    "refundPolicy": "购买前建议确认后台订阅实际下发协议是否兼容老客户端",
    "nodeCount": 40,
    "bandwidthLimit": "60GB/月起",
    "pros": [
      "年付 5.6 元/月极低价格，支持 7 折促销与自研客户端"
    ],
    "cons": [
      "品牌资料中未明确统一标注底层加密协议类型；无实测截图，与闪电鼠/大佬云同质化较高"
    ],
    "bestFor": [
      "仅以最低入门成本做轻量应急的用户"
    ],
    "description": "榴莲云是 5.6 元/月均摊（60GB）平价队列里的一员，主打 IEPL 专线及季付 7 折（ll88）。需要注意原资料尚未明确统一声明底层协议类型，看重指定 VLESS 协议的用户可横向对比大佬云或闪电鼠。",
    "lastVerified": "2026-10-19",
    "verificationGaps": [
      "底层协议清单、各档高流量套餐及独立测速截图待核实"
    ]
  },
  {
    "id": "shenxing",
    "slug": "shenxing",
    "name": "神行加速 (ShenXing)",
    "rankTier": "core",
    "dataStatus": "vendor",
    "subscriptionMode": "both",
    "tagline": "2024年运营 · 年付约14元/月享120GB · IEPL+VLESS 中档扩容选择",
    "establishedYear": 2024,
    "score": {
      "overall": 9,
      "stability": 9,
      "speed": 9.1,
      "support": 8.9,
      "value": 9.2
    },
    "pricing": {
      "minMonthly": 14,
      "currency": "CNY",
      "billingPeriod": "年付折算约 14 元/月 (120GB/月)",
      "hasTrial": false
    },
    "couponCode": "xs0077",
    "discountInfo": "新用户 7 折优惠码：xs0077（以官网结账规则为准）",
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "IEPL 专线 + VLESS 协议",
      "入门即提供 120GB/月配额（较 60GB 档翻倍）",
      "新用户 7 折优惠码 xs0077 + 双模式客户端兼容"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：尚未补充统一 AI/流媒体实测图表。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：建议结合官网最新说明测试。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "officialSite": "https://qwerty.shenxingaff.com",
    "refundPolicy": "建议先关注月付选项测试本地电信/联通/移动适配",
    "nodeCount": 45,
    "bandwidthLimit": "120GB/月起",
    "pros": [
      "卡位 14 元中低价区间但直接给足 120GB/月，是 5.6 元入门档的两倍流量",
      "支持新用户 7 折码 xs0077 且兼顾 Clash 订阅与自研客户端"
    ],
    "cons": [
      "尚无完整各周期对照表及第三方测速截图公开"
    ],
    "bestFor": [
      "每月需要 100GB~120GB 中度流量、觉得 60GB 套餐不够用的年付用户"
    ],
    "description": "神行加速精准填补了 5.6 元（60GB）与 20 元常规月付之间的空白：采用 IEPL 专线与 VLESS 协议，年付均摊约 14 元/月即可获得 120GB/月流量，并支持新人 7 折优惠码 xs0077，适合追求稳妥流量余量的长期用户。",
    "lastVerified": "2026-10-19",
    "verificationGaps": [
      "逐地区延迟测速数据、AI 解锁测试及全系列月付套餐待补充"
    ]
  },
  {
    "id": "huanqiuti",
    "slug": "huanqiuti",
    "name": "环球梯 (HuanQiuTi)",
    "rankTier": "core",
    "dataStatus": "vendor",
    "subscriptionMode": "both",
    "tagline": "2024年运营 · 5.6元/月 IEPL+VLESS 平价方案（无#格式链接提示）",
    "establishedYear": 2024,
    "score": {
      "overall": 8.8,
      "stability": 8.8,
      "speed": 8.9,
      "support": 8.7,
      "value": 9.4
    },
    "pricing": {
      "minMonthly": 5.6,
      "currency": "CNY",
      "billingPeriod": "年付折算约 5.6 元/月 (60GB/月)",
      "hasTrial": false
    },
    "couponCode": "HQ66",
    "discountInfo": "季付及以上 7 折优惠码：HQ66",
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "5.6 元/月 IEPL + VLESS + 60GB",
      "季付及以上 7 折优惠码 HQ66",
      "支持自研客户端及第三方订阅"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：暂无 AI 解锁实测记录。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：暂无独立流媒体测试数据。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "officialSite": "https://qwerty.huanqiutiaff.com",
    "refundPolicy": "注册前核实链接可达性，建议季付起步试水",
    "nodeCount": 40,
    "bandwidthLimit": "60GB/月起",
    "pros": [
      "年付折算约 5.6 元/月入门价格极低，可叠季付及以上 7 折"
    ],
    "cons": [
      "与云界线一样推广链接格式缺少 # 号，且缺乏实测图片和各周期完整套餐说明"
    ],
    "bestFor": [
      "需要超低成本备用节点且使用 VLESS 协议的用户"
    ],
    "description": "环球梯定位与闪电鼠、大佬云相近，同为 2024 年上线的 5.6 元/月级 IEPL + VLESS 平价服务，配额 60GB/月起，支持季付 7 折（HQ66）。同样提醒注册链接格式略异，建议下单前先确认站点可达性及当前售价。",
    "lastVerified": "2026-10-19",
    "verificationGaps": [
      "逐地区测速表、完整月付/不限时档位及 AI 解锁能力待核实"
    ]
  },
  {
    "id": "tiziyun",
    "slug": "tiziyun",
    "name": "梯子云 (TiZiYun)",
    "rankTier": "core",
    "dataStatus": "vendor",
    "subscriptionMode": "both",
    "tagline": "2025年运营 · 自研一键客户端 + 通用订阅双支持 · 年付约7.4元/月(60GB)",
    "establishedYear": 2025,
    "score": {
      "overall": 9.2,
      "stability": 9.1,
      "speed": 9.2,
      "support": 9.3,
      "value": 9.4
    },
    "pricing": {
      "minMonthly": 7.4,
      "currency": "CNY",
      "billingPeriod": "年付折算约 7.4 元/月 (60GB/月)",
      "hasTrial": false
    },
    "couponCode": "tiziyun",
    "discountInfo": "优惠码：tiziyun（具体立减规则以官网为准）",
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "唯一在官方资料突出“小白一键登录零门槛”与“通用订阅”双模式",
      "IEPL 专线 + VLESS · 60+ 节点覆盖港日新美台",
      "资料说明配备 2Gbps+ 独立带宽含 500Mbps 高峰冗余",
      "海外团队运维 + 在线工单支持"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": true,
      "gemini": false,
      "cursor": true,
      "notes": "品牌资料注明兼容 ChatGPT / Claude 等 AI 生产力工具（属于厂商资料口径）。"
    },
    "streamingSupport": {
      "netflix": true,
      "youtubePremium": true,
      "disneyPlus": true,
      "notes": "品牌资料标注覆盖 Netflix / Disney+ / TikTok 解锁场景。"
    },
    "riskLevel": "safe",
    "status": "active",
    "affiliateUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "officialSite": "https://tiziyun3.ladderaff.com",
    "refundPolicy": "提供在线客服与工单通道",
    "nodeCount": 60,
    "bandwidthLimit": "60GB/月起（详档待完善）",
    "pros": [
      "兼具自研全平台一键登录体验（新手友好）与通用订阅导出（进阶兼容 Clash），比隐形人更灵活",
      "60+ 核心节点覆盖 + 7.4 元/月年付低价门槛"
    ],
    "cons": [
      "AI/流媒体“完美解锁”等措辞来自品牌方资料，尚缺少独立第三方测速/解锁截图验证",
      "2025 年上线品牌建议优先短周期验证晚高峰表现"
    ],
    "bestFor": [
      "既想先一键登录上手、后续又可能切回 Clash Verge 自定义分流的新老用户"
    ],
    "description": "梯子云成立于 2025 年，主打“自研全平台客户端一键登录 + 通用订阅导入双持”，相比仅限封闭软件的品牌对极客和新手都更友善。硬件架构标称 IEPL 专线 + VLESS，60+ 节点、年付均摊约 7.4 元/月起，属厂商资料高配置代表，实际体验需先短付自测。",
    "lastVerified": "2026-10-19",
    "verificationGaps": [
      "暂无独立第三方测速截图与各档位月付完整价格表"
    ]
  },
  {
    "id": "wgetcloud",
    "slug": "wgetcloud",
    "name": "WgetCloud",
    "rankTier": "archival",
    "dataStatus": "historical",
    "subscriptionMode": "subscription",
    "tagline": "历史档案 · Trojan 协议 · 2026-05-02 59节点全通实测均速50MB/s+",
    "establishedYear": 2022,
    "score": {
      "overall": 8.6,
      "stability": 8.7,
      "speed": 8.8,
      "support": 8.4,
      "value": 8.2
    },
    "pricing": {
      "minMonthly": 99,
      "currency": "CNY",
      "billingPeriod": "季付基础专线 297元 (230GB/月 · 暂无月付)",
      "hasTrial": false
    },
    "discountInfo": "历史资料未记录月付入口，当前优惠码与实时报价待核实",
    "routes": [
      "iepl"
    ],
    "protocols": [
      "trojan"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "surge"
    ],
    "features": [
      "历史记录 Trojan 协议 · 覆盖 15 个以上亚太欧美节点区域",
      "2026-05-02 实测 59 节点 100% 取得非零下载",
      "五个主区域实测均速全超 50MB/s（日57.75 / 美55.00 / 港53.90）",
      "高门槛季付起售（¥297/季起）"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "2026-05-02 历史测试记录部分节点可用 ChatGPT/Gemini，不保证现时持续可用，状态待核实。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "2026-05-02 历史测试部分节点可用 Disney+/Netflix/YouTube，待最新核验。"
    },
    "riskLevel": "moderate",
    "status": "active",
    "affiliateUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "officialSite": "https://invite.wgetcloud.ltd",
    "refundPolicy": "旧档整理暂无可核实实时退款规则，季付起买门槛较高需谨慎核对官网",
    "nodeCount": 59,
    "bandwidthLimit": "230GB - 270GB / 月（历史季付口径）",
    "pros": [
      "2026-05-02 历史实测 59 个节点全部跑通，日本与美国平均吞吐甚至高于 55MB/s，香港 TLS RTT 约 25.9ms",
      "多地区覆盖较全（含东南亚、印澳加巴英）"
    ],
    "cons": [
      "按季起售（¥297/季），无低门槛月付试错；资料属 2026-08 历史项目档案，非 2026-10 新测"
    ],
    "bestFor": [
      "熟悉老牌 Trojan 体系、看重欧美日本高均速且预算较充裕的历史关注用户"
    ],
    "description": "WgetCloud（全球云同音老牌服务商，历史记录版）整理自 2026-08 历史档案。保留有 2026-05-02 对 59 个 Trojan 节点的地区测速统计（五大主流地区均速超 50MB/s），套餐最低为季付 ¥297/230GB/月，当前实时运营细节、最新价格与优惠码均标记待核实，故排名靠后展示。",
    "lastVerified": "2026-08-24",
    "plans": [
      {
        "name": "基础专线服务",
        "cycle": "季付",
        "price": "¥297",
        "traffic": "230GB/月",
        "periodNote": "旧资料口径（请在官网核对）"
      },
      {
        "name": "优质专线服务",
        "cycle": "季付",
        "price": "¥327",
        "traffic": "250GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "精品专线服务",
        "cycle": "季付",
        "price": "¥357",
        "traffic": "270GB/月",
        "periodNote": "旧资料口径"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-05-02",
      "testNote": "历史资料保留的地区统计均值（非单节点晚高峰实测，仅供参考）",
      "rows": [
        {
          "region": "日本",
          "latency": "69.4ms",
          "download": "462.04Mbps"
        },
        {
          "region": "美国",
          "latency": "170.2ms",
          "download": "440.04Mbps"
        },
        {
          "region": "香港",
          "latency": "25.9ms",
          "download": "431.24Mbps"
        },
        {
          "region": "新加坡",
          "latency": "55.6ms",
          "download": "422.97Mbps"
        },
        {
          "region": "台湾",
          "latency": "41.3ms",
          "download": "407.66Mbps"
        },
        {
          "region": "印度",
          "latency": "95ms",
          "download": "341.92Mbps"
        },
        {
          "region": "印尼",
          "latency": "88ms",
          "download": "318.64Mbps"
        }
      ]
    },
    "verificationGaps": [
      "当前运营状态、实时套餐价格、购买周期及优惠码待官网核实"
    ]
  },
  {
    "id": "baiyueguang",
    "slug": "baiyueguang",
    "name": "白月光 (BaiYueGuang)",
    "rankTier": "archival",
    "dataStatus": "historical",
    "subscriptionMode": "subscription",
    "tagline": "历史档案 · Shadowsocks 108节点 · 季付66元起(100GB/月 · 台湾节点极弱注意)",
    "establishedYear": 2023,
    "score": {
      "overall": 8.3,
      "stability": 8.2,
      "speed": 8.1,
      "support": 8.2,
      "value": 8.6
    },
    "pricing": {
      "minMonthly": 22,
      "currency": "CNY",
      "billingPeriod": "小包季付 66元 (100GB/月 · 无常规月付)",
      "hasTrial": false
    },
    "discountInfo": "历史资料未记录月付或有效优惠码，实时售价待核实",
    "routes": [
      "transit"
    ],
    "protocols": [
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "v2rayn"
    ],
    "features": [
      "季付入门 66 元含 100GB/月，支出门槛中等",
      "2026-07-17 历史测速覆盖 108 节点 / 79 个地区名目",
      "香港及马来西亚/泰国近端表现尚可（14~16MB/s）"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "2026-07-17 历史测试仅部分节点可用 ChatGPT，且延迟偏高，不作 AI 推荐主力。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "2026-07-17 历史测试 Spotify 失败，Netflix/Disney+/TikTok 仅部分节点可用。"
    },
    "riskLevel": "moderate",
    "status": "active",
    "affiliateUrl": "https://sibker.com/register?invite_code=gg6puAId",
    "officialSite": "https://sibker.com",
    "refundPolicy": "旧档记录暂缺退款细则，需以官网当期条款为准",
    "nodeCount": 108,
    "bandwidthLimit": "100GB - 2500GB / 月",
    "pros": [
      "108 个节点涵盖大量冷门国家/地区名称，季度 66 元起步总价门槛不高"
    ],
    "cons": [
      "2026-07-17 实测香港平均 TLS RTT 达 160.7ms、台湾仅 0.03Mbps、Spotify 测试失败",
      "属历史留档资料且无月付选项，延迟明显弱于榜单前列专线品牌"
    ],
    "bestFor": [
      "仅对众多小众国家 IP 名称有收集需求的低并发备选"
    ],
    "description": "白月光整理自 2026-08 历史数据库记录，采用 Shadowsocks 协议，季度小包 ¥66 起。2026-07-17 实测 108 节点中香港均速约 114.94Mbps（TLS RTT 160.7ms），东南亚表现较好但台湾节点仅 0.03Mbps 且 Spotify 失败，整体置于后排档案供参考。",
    "lastVerified": "2026-08-24",
    "plans": [
      {
        "name": "小包",
        "cycle": "季付",
        "price": "¥66",
        "traffic": "100GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "中包",
        "cycle": "季付",
        "price": "¥126",
        "traffic": "250GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "大包",
        "cycle": "季付",
        "price": "¥156",
        "traffic": "400GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "超大包",
        "cycle": "季付",
        "price": "¥216",
        "traffic": "750GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "不差钱",
        "cycle": "季付",
        "price": "¥231",
        "traffic": "900GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "旗舰包",
        "cycle": "年付",
        "price": "¥2500",
        "traffic": "2500GB/月",
        "periodNote": "旧资料口径"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-07-17",
      "testNote": "历史地区统计记录（延迟偏高、台湾几乎不可用，不代表现时速度）",
      "rows": [
        {
          "region": "香港",
          "latency": "160.7ms",
          "download": "114.94Mbps"
        },
        {
          "region": "新加坡",
          "latency": "186.8ms",
          "download": "85.22Mbps"
        },
        {
          "region": "日本",
          "latency": "202.4ms",
          "download": "77.65Mbps"
        },
        {
          "region": "美国",
          "latency": "302.6ms",
          "download": "70.53Mbps"
        },
        {
          "region": "加拿大",
          "latency": "344ms",
          "download": "62Mbps"
        },
        {
          "region": "韩国",
          "latency": "358ms",
          "download": "31.28Mbps"
        },
        {
          "region": "台湾",
          "latency": "—",
          "download": "0.03Mbps"
        }
      ]
    },
    "verificationGaps": [
      "当前实时运营状态、价格与是否补充台湾/解锁修复待核实"
    ]
  },
  {
    "id": "flyingbird",
    "slug": "flyingbird",
    "name": "FlyingBird (飞鸟机场)",
    "rankTier": "archival",
    "dataStatus": "pending",
    "subscriptionMode": "subscription",
    "tagline": "历史档案 · SS 全专线 IPLC 无倍率 · 青铜月付15元起（无独立入口待核实）",
    "establishedYear": 2022,
    "score": {
      "overall": 8.5,
      "stability": 8.6,
      "speed": 8.5,
      "support": 8.4,
      "value": 8.7
    },
    "pricing": {
      "minMonthly": 15,
      "currency": "CNY",
      "billingPeriod": "青铜套餐 月付 15元 (100GB · 历史记录)",
      "hasTrial": false
    },
    "couponCode": "theo",
    "discountInfo": "历史优惠码：theo (9折) / year85 (年付85折) · 当前有效性待核实",
    "routes": [
      "iplc"
    ],
    "protocols": [
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "surge"
    ],
    "features": [
      "全专线 IPLC + Shadowsocks · 无倍率不限速定位",
      "一云梯/飞鸟同源站群历史核心成员",
      "支持月/季/半年/年多周期（青铜至钻石 1TB）"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：未提供独立 AI 解锁逐项实测结果，不可推断支持。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：未提供独立流媒体实测结果。"
    },
    "riskLevel": "moderate",
    "status": "warning",
    "affiliateUrl": "",
    "officialSite": "",
    "refundPolicy": "暂无可用独立入口链接（需用户自行核实当期官网）",
    "nodeCount": 40,
    "bandwidthLimit": "100GB - 1000GB / 月（历史口径）",
    "pros": [
      "老牌同源站群背景，历史资料支持支付宝/USDT 且周期档位规整（¥15/月 100GB 起）"
    ],
    "cons": [
      "当前资料缺失独立品牌注册入口，缺逐地区测速与 AI/流媒体测试，无法核实最新可用性"
    ],
    "bestFor": [
      "仅作为历史老牌 IPLC 品牌数据库检索与档案对比"
    ],
    "description": "FlyingBird（飞鸟机场）为老牌 IPLC 全专线 Shadowsocks 机场档案（一云梯同源站群系列），历史记录月付 15 元（100GB）起。因最新品牌库未保留可用独立入口及近 30 日实测数据，全部入口与解锁均保持“待核实”状态，排序置后。",
    "lastVerified": "2026-08-09",
    "plans": [
      {
        "name": "青铜套餐",
        "cycle": "月付",
        "price": "¥15",
        "traffic": "100GB/月",
        "periodNote": "年付 ¥144（历史价）"
      },
      {
        "name": "白银套餐",
        "cycle": "月付",
        "price": "¥30",
        "traffic": "200GB/月",
        "periodNote": "年付 ¥288（历史价）"
      },
      {
        "name": "黄金套餐",
        "cycle": "月付",
        "price": "¥75",
        "traffic": "500GB/月",
        "periodNote": "年付 ¥720（历史价）"
      },
      {
        "name": "钻石套餐",
        "cycle": "月付",
        "price": "¥150",
        "traffic": "1000GB/月",
        "periodNote": "年付 ¥1440（历史价）"
      }
    ],
    "verificationGaps": [
      "当前独立品牌官网入口、优惠码有效性、近 30 日测速及 AI/流媒体解锁均待核实"
    ]
  },
  {
    "id": "cyberguard",
    "slug": "cyberguard",
    "name": "CyberGuard",
    "rankTier": "archival",
    "dataStatus": "historical",
    "subscriptionMode": "subscription",
    "tagline": "历史档案 · Trojan/VLESS · 月付32元(350GB) & 220G/840G不限时包",
    "establishedYear": 2023,
    "score": {
      "overall": 8.4,
      "stability": 8.4,
      "speed": 8.5,
      "support": 8.3,
      "value": 8.2
    },
    "pricing": {
      "minMonthly": 15.83,
      "currency": "CNY",
      "billingPeriod": "半年轻量 95元 (约15.83元/月 150GB) · 标准月付 32元(350GB)",
      "hasTrial": false
    },
    "discountInfo": "历史资料未记录现行优惠码，以官网当期报价为准",
    "routes": [
      "transit"
    ],
    "protocols": [
      "trojan",
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "350GB 起步月付标准档大流量（¥32/月）",
      "支持 220GB(¥79) 与 840GB(¥188) 两档不限时流量包",
      "2025-06-21 历史测速覆盖 12 国 29 节点"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "仅 2025-06-21 历史记录测得可用 ChatGPT/Claude/Gemini，不代表 2026 现时可用。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "仅 2025-06-21 历史记录解锁主流流媒体，近况待核实。"
    },
    "riskLevel": "moderate",
    "status": "active",
    "affiliateUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "officialSite": "https://cyberguard.best",
    "refundPolicy": "旧资料未附带明确退款条款，不限时包具体有效期待官网核实",
    "nodeCount": 29,
    "bandwidthLimit": "150GB - 2050GB / 月 · 含 220G/840G 不限时",
    "pros": [
      "提供较实惠的大流量月付（32 元 350GB）与较低总价的不限时流量包"
    ],
    "cons": [
      "历史测速停留在 2025-06-21 且日/美/澳/德统计延迟偏高（韩国 6000ms 异常值），缺乏 2026 新测"
    ],
    "bestFor": [
      "偏好冷门欧美/阿联酋等 12 国区域节点且愿先短周期自测者"
    ],
    "description": "CyberGuard 收录自历史项目数据库，主打 Trojan/VLESS 协议与 350GB 起步大流量方案，并提供 220GB（¥79）和 840GB（¥188）不限时包。其保留的测速数据源自 2025 年 6 月（延迟普遍高于一线专线），当前有效性与实时体验有待核实。",
    "lastVerified": "2026-08-23",
    "plans": [
      {
        "name": "150G｜轻量套餐",
        "cycle": "半年付",
        "price": "¥95",
        "traffic": "150GB/月",
        "periodNote": "折约 ¥15.83/月"
      },
      {
        "name": "350G｜标准套餐",
        "cycle": "月付",
        "price": "¥32",
        "traffic": "350GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "650G｜高速套餐",
        "cycle": "月付",
        "price": "¥55",
        "traffic": "650GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "220G流量包｜不限时",
        "cycle": "一次性付费",
        "price": "¥79",
        "traffic": "220GB",
        "periodNote": "具体有效期待核实"
      },
      {
        "name": "840G流量包｜不限时",
        "cycle": "一次性付费",
        "price": "¥188",
        "traffic": "840GB",
        "periodNote": "具体有效期待核实"
      },
      {
        "name": "2050G｜企业套餐",
        "cycle": "月付",
        "price": "¥200",
        "traffic": "2050GB/月",
        "periodNote": "旧资料口径"
      }
    ],
    "speedMetrics": {
      "testDate": "2025-06-21",
      "testNote": "2025-06-21 旧历史测速统计（时隔较久，延迟波动显著，不代表现时水平）",
      "rows": [
        {
          "region": "日本",
          "latency": "123.8ms",
          "download": "488.83Mbps"
        },
        {
          "region": "韩国",
          "latency": "6000ms",
          "download": "552.8Mbps"
        },
        {
          "region": "阿联酋",
          "latency": "345ms",
          "download": "342.76Mbps"
        },
        {
          "region": "澳大利亚",
          "latency": "277ms",
          "download": "279.64Mbps"
        },
        {
          "region": "美国",
          "latency": "614ms",
          "download": "245.6Mbps"
        },
        {
          "region": "法国",
          "latency": "384ms",
          "download": "204.08Mbps"
        },
        {
          "region": "德国",
          "latency": "390.5ms",
          "download": "159.96Mbps"
        }
      ]
    },
    "verificationGaps": [
      "近一年未更新测速，不限时包有效期及当前价格待核实"
    ]
  },
  {
    "id": "longmaoyun",
    "slug": "longmaoyun",
    "name": "龙猫云 (LongMaoYun)",
    "rankTier": "archival",
    "dataStatus": "pending",
    "subscriptionMode": "subscription",
    "tagline": "历史档案 · SS+IPLC全专线 · VIP1 月付15元起(100GB · 无独立入口待核实)",
    "establishedYear": 2023,
    "score": {
      "overall": 8.5,
      "stability": 8.5,
      "speed": 8.5,
      "support": 8.4,
      "value": 8.6
    },
    "pricing": {
      "minMonthly": 15,
      "currency": "CNY",
      "billingPeriod": "VIP1 月付 15元 (100GB · 历史记录)",
      "hasTrial": false
    },
    "discountInfo": "暂无优惠码（历史标注长期多周期阶梯 9~6 折）",
    "routes": [
      "iplc"
    ],
    "protocols": [
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "v2rayn"
    ],
    "features": [
      "SS + IPLC 全专线定位，教程完善",
      "一云梯/飞鸟同源站群系列成员",
      "VIP1~VIP4 覆盖 100GB 至 1000GB 月度配额"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：未提供独立 AI 解锁测试。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：未提供独立流媒体实测数据。"
    },
    "riskLevel": "moderate",
    "status": "warning",
    "affiliateUrl": "",
    "officialSite": "",
    "refundPolicy": "无独立品牌入口保存记录，无法核实当期政策",
    "nodeCount": 40,
    "bandwidthLimit": "100GB - 1000GB / 月（历史口径）",
    "pros": [
      "教程与周期档位结构清晰，15 元/100GB 入门符合常见专线定位"
    ],
    "cons": [
      "当前缺少可用独立注册入口与逐地区测速/解锁记录，属于后排历史待核实档案"
    ],
    "bestFor": [
      "同源体系品牌历史参数查验"
    ],
    "description": "龙猫云在 2026-08 品牌库记录中定位为 Shadowsocks + IPLC 全专线机场，并提供较为丰富的使用教程（一云梯/飞鸟同源成员）。当前无可用独立入口与实测图记录，需等待有效官网与近 30 日实测补全。",
    "lastVerified": "2026-08-09",
    "plans": [
      {
        "name": "VIP1",
        "cycle": "月付",
        "price": "¥15",
        "traffic": "100GB/月",
        "periodNote": "年付 ¥144（历史价）"
      },
      {
        "name": "VIP2",
        "cycle": "月付",
        "price": "¥30",
        "traffic": "200GB/月",
        "periodNote": "年付 ¥288（历史价）"
      },
      {
        "name": "VIP3",
        "cycle": "月付",
        "price": "¥60",
        "traffic": "400GB/月",
        "periodNote": "年付 ¥576（历史价）"
      },
      {
        "name": "VIP4",
        "cycle": "月付",
        "price": "¥120",
        "traffic": "1000GB/月",
        "periodNote": "年付 ¥1152（历史价）"
      }
    ],
    "verificationGaps": [
      "独立品牌入口、实时在营状态、近 30 日测速与 AI/流媒体支持均待核实"
    ]
  },
  {
    "id": "fatcat",
    "slug": "fatcat",
    "name": "FATCAT (肥猫云)",
    "rankTier": "archival",
    "dataStatus": "pending",
    "subscriptionMode": "subscription",
    "tagline": "历史档案 · 企业级 IEPL/IPLC 专线 · 年付96元/月付20元（无独立入口待核实）",
    "establishedYear": 2023,
    "score": {
      "overall": 8.5,
      "stability": 8.5,
      "speed": 8.5,
      "support": 8.4,
      "value": 8.5
    },
    "pricing": {
      "minMonthly": 8,
      "currency": "CNY",
      "billingPeriod": "年付加强版 ¥96 (60GB/月 · 基础月付 ¥20/120GB)",
      "hasTrial": false
    },
    "discountInfo": "历史资料未列固定优惠码，有周期自然折扣",
    "routes": [
      "iepl",
      "iplc"
    ],
    "protocols": [
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "v2rayn"
    ],
    "features": [
      "企业级 IEPL / IPLC 内网专线定位",
      "年付 96 元起，标准月付 20 元至 180 元（1.5TB）",
      "支持支付宝/微信/USDT（历史资料）"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：未见逐项 AI 实测记录。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：未见逐项流媒体实测结果。"
    },
    "riskLevel": "moderate",
    "status": "warning",
    "affiliateUrl": "",
    "officialSite": "",
    "refundPolicy": "无独立入口保存，无法核验当期条款",
    "nodeCount": 40,
    "bandwidthLimit": "60GB - 1500GB / 月（历史口径）",
    "pros": [
      "名目与飞猫云（FeiMaoCloud）易混淆注意区分——肥猫云另有年付加强版及企业 1.5T 档位记录"
    ],
    "cons": [
      "当前未保存可用独立注册入口，亦缺少测速与解锁实测证据"
    ],
    "bestFor": [
      "区分“肥猫云 FATCAT”与主推“飞猫云 FeiMaoCloud”时的档案检索"
    ],
    "description": "FATCAT（肥猫云，注意与前排“飞猫云”区分）出自 2026-08 历史资料，主打企业级 IEPL/IPLC 抗干扰内网专线，套餐覆盖 60GB 年付加强版（¥96）与 ¥20~¥180 月付。目前缺乏可用入口与独立测速数据，排名置后。",
    "lastVerified": "2026-08-09",
    "plans": [
      {
        "name": "年付加强版",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB/月",
        "periodNote": "折 ¥8/月（历史价）"
      },
      {
        "name": "基础套餐",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "120GB/月",
        "periodNote": "年付 ¥192（历史价）"
      },
      {
        "name": "标准套餐",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "300GB/月",
        "periodNote": "年付 ¥384（历史价）"
      },
      {
        "name": "旗舰套餐",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "700GB/月",
        "periodNote": "年付 ¥960（历史价）"
      },
      {
        "name": "企业套餐",
        "cycle": "月付",
        "price": "¥180",
        "traffic": "1500GB/月",
        "periodNote": "年付 ¥1728（历史价）"
      }
    ],
    "verificationGaps": [
      "当前独立入口、加密协议细节、实测图及 AI/流媒体验证均待核实"
    ]
  },
  {
    "id": "tntcloud",
    "slug": "tntcloud",
    "name": "TNTCloud (TNT Cloud)",
    "rankTier": "archival",
    "dataStatus": "pending",
    "subscriptionMode": "subscription",
    "tagline": "历史档案 · IPLC 专线 (原3A加速器) · 季付30元轻量包（无独立入口待核实）",
    "establishedYear": 2023,
    "score": {
      "overall": 8.5,
      "stability": 8.5,
      "speed": 8.5,
      "support": 8.4,
      "value": 8.7
    },
    "pricing": {
      "minMonthly": 8.17,
      "currency": "CNY",
      "billingPeriod": "轻量包 季付30元 / 年付98元 (60GB/月) · VIP1 月付20元",
      "hasTrial": false
    },
    "couponCode": "TNT85",
    "discountInfo": "历史优惠码：TNT85（85 折，限量包除外，当前有效期待核实）",
    "routes": [
      "iplc"
    ],
    "protocols": [
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "v2rayn"
    ],
    "features": [
      "老牌分站团队（曾用名 3A 加速器）IPLC 专线",
      "特色季付 30 元轻量包适合短季试水",
      "定位跨境电商与 TikTok 直播定制"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：暂无逐项 AI 测试数据。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：暂无逐项流媒体实测数据。"
    },
    "riskLevel": "moderate",
    "status": "warning",
    "affiliateUrl": "",
    "officialSite": "",
    "refundPolicy": "缺独立入口记录，下单与售后规则待核实",
    "nodeCount": 40,
    "bandwidthLimit": "60GB - 1100GB / 月（历史口径）",
    "pros": [
      "提供低成本季付 ¥30 轻量尝试包（60GB/月）与电商/TikTok 定制历史资料"
    ],
    "cons": [
      "独立品牌入口与近 30 日实测、协议及解锁数据均尚未核实"
    ],
    "bestFor": [
      "寻找曾用名“3A加速器 / TNT Cloud”历史档位参考的用户"
    ],
    "description": "TNTCloud（曾用名 3A 加速器）记录于 2026-08 历史库，主打 IPLC 内网专线及季付 30 元轻量包、VIP1 20 元/110GB 等方案。由于现资料缺失可用独立官网入口与可比测速，当前全项待核实并置后展示。",
    "lastVerified": "2026-08-09",
    "plans": [
      {
        "name": "轻量包",
        "cycle": "季付",
        "price": "¥30",
        "traffic": "60GB/月",
        "periodNote": "年付 ¥98（历史价）"
      },
      {
        "name": "VIP1",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "110GB/月",
        "periodNote": "年付 ¥192（历史价）"
      },
      {
        "name": "VIP2",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "220GB/月",
        "periodNote": "年付 ¥336（历史价）"
      },
      {
        "name": "VIP3",
        "cycle": "月付",
        "price": "¥80",
        "traffic": "460GB/月",
        "periodNote": "年付 ¥768（历史价）"
      },
      {
        "name": "VIP4",
        "cycle": "月付",
        "price": "¥160",
        "traffic": "1100GB/月",
        "periodNote": "年付 ¥1536（历史价）"
      }
    ],
    "verificationGaps": [
      "当前独立入口、优惠码 TNT85 有效性、协议细节及测速解锁待核实"
    ]
  },
  {
    "id": "qingyunti",
    "slug": "qingyunti",
    "name": "青云梯 (QingYunTi)",
    "rankTier": "archival",
    "dataStatus": "pending",
    "subscriptionMode": "subscription",
    "tagline": "历史档案 · 运营6年+老牌(原V4Speed) · SS+IPLC 三网优化（无独立入口待核实）",
    "establishedYear": 2020,
    "score": {
      "overall": 8.6,
      "stability": 8.7,
      "speed": 8.6,
      "support": 8.5,
      "value": 8.4
    },
    "pricing": {
      "minMonthly": 8,
      "currency": "CNY",
      "billingPeriod": "年付小包 ¥96 (60GB/月) · VIP1 月付 ¥25(150GB)",
      "hasTrial": false
    },
    "couponCode": "qyt85",
    "discountInfo": "历史优惠码：qyt85 (85折) / qyt80 (8折，年付小包除外)",
    "routes": [
      "iplc",
      "bgp"
    ],
    "protocols": [
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "surge",
      "v2rayn"
    ],
    "features": [
      "运营 6 年以上历史资料记录（原名 V4Speed）",
      "Shadowsocks + 企业级 IPLC + 三网智能负载均衡",
      "历史标注覆盖 10+ 地区 80+ 节点，支持企业定制"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：原资料未单独列出逐平台 AI 测试表。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：原资料未附独立流媒体实测图表。"
    },
    "riskLevel": "moderate",
    "status": "warning",
    "affiliateUrl": "",
    "officialSite": "",
    "refundPolicy": "未提供独立官网链接，最新退款条款待核实",
    "nodeCount": 80,
    "bandwidthLimit": "60GB - 1000GB / 月（历史口径）",
    "pros": [
      "运营年限背景深厚（原 V4Speed），历史套餐体系由 ¥96 年付涵盖至企业定制"
    ],
    "cons": [
      "当前缺少独立有效入口网址与近期可比测速证据，6Gbps 与 80+ 节点属历史记录未独立复测"
    ],
    "bestFor": [
      "查询老牌青云梯（V4Speed）历史资费与节点架构的读者"
    ],
    "description": "青云梯（原 V4Speed）在历史库中记录有超 6 年运营背景、Shadowsocks + 企业级 IPLC 三网优化与 80+ 节点规格。由于当前资料库暂无可用的独立官网入口与近期独立测速验证，全部现况待核实并统一靠后展示。",
    "lastVerified": "2026-08-09",
    "plans": [
      {
        "name": "年付小包",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB/月",
        "periodNote": "不支持优惠码（历史价）"
      },
      {
        "name": "VIP1",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB/月",
        "periodNote": "年付 ¥240（历史价）"
      },
      {
        "name": "VIP2",
        "cycle": "月付",
        "price": "¥45",
        "traffic": "300GB/月",
        "periodNote": "年付 ¥432（历史价）"
      },
      {
        "name": "VIP3",
        "cycle": "月付",
        "price": "¥85",
        "traffic": "600GB/月",
        "periodNote": "年付 ¥816（历史价）"
      },
      {
        "name": "VIP4",
        "cycle": "月付",
        "price": "¥150",
        "traffic": "1000GB/月",
        "periodNote": "年付 ¥1360（历史价）"
      }
    ],
    "verificationGaps": [
      "当前独立品牌入口、实时可用性、协议升级状况及近 30 日测速待核实"
    ]
  },
  {
    "id": "shanshuiyun",
    "slug": "shanshuiyun",
    "name": "山水云 (ShanShuiYun)",
    "rankTier": "archival",
    "dataStatus": "historical",
    "subscriptionMode": "subscription",
    "tagline": "历史档案 · 月付15元(100GB) / 年付88元(64GB) · 2026-06 历史测速留档",
    "establishedYear": 2024,
    "score": {
      "overall": 8.4,
      "stability": 8.3,
      "speed": 8.3,
      "support": 8.2,
      "value": 8.7
    },
    "pricing": {
      "minMonthly": 7.33,
      "currency": "CNY",
      "billingPeriod": "年付 88元 (64GB/月) · 琴月付 15元(100GB)",
      "hasTrial": false
    },
    "discountInfo": "历史资料未列优惠码，当前活动以官网核对为准",
    "routes": [
      "transit"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "v2rayn"
    ],
    "features": [
      "月付入门 15 元含 100GB，季付 75 元含 256GB/月",
      "64G 年付 88 元（约 7.33 元/月）单价较低",
      "2026-06-29 测速 27 节点中 22 个有效跑通"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "2026-06-29 当次测试可用 ChatGPT/Claude/Gemini，不担保现时持续状态。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "2026-06-29 当次测试解锁 Netflix/Disney+/Max/TikTok，现况待核实。"
    },
    "riskLevel": "moderate",
    "status": "active",
    "affiliateUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "officialSite": "https://sldm1.ssyylf.com",
    "refundPolicy": "旧档案暂未记录协议名称与售后细则",
    "nodeCount": 27,
    "bandwidthLimit": "64GB - 500GB / 月（历史口径）",
    "pros": [
      "15 元 100GB 月付门槛与 88 元/年低价结构实用，美国历史平均下载达 180.29Mbps"
    ],
    "cons": [
      "27 节点仅 22 个跑出速度且 2026-06-29 统计延迟偏高（港 151ms / 日 229ms）；加密协议未在旧档核实"
    ],
    "bestFor": [
      "预算 15 元左右且偏重美区历史下载测试的数据对照参考"
    ],
    "description": "山水云记录整理自 2026-08 历史档案，包含年付 ¥88（64GB/月）及月付 ¥15（100GB）等 6 档。2026-06-29 历史测速 27 节点中有 22 节点连通，美区均速 180.29Mbps 但整体 RTT 超过 150ms、协议尚未核实，因此排名靠后。",
    "lastVerified": "2026-08-24",
    "plans": [
      {
        "name": "64G/轻量套餐",
        "cycle": "年付",
        "price": "¥88",
        "traffic": "64GB/月",
        "periodNote": "折约 ¥7.33/月"
      },
      {
        "name": "128G/轻量套餐",
        "cycle": "半年付",
        "price": "¥88",
        "traffic": "128GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "256G/轻量套餐",
        "cycle": "季付",
        "price": "¥75",
        "traffic": "256GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "100G/月-琴",
        "cycle": "月付",
        "price": "¥15",
        "traffic": "100GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "200G/月-棋",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "200GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "500G/月-书",
        "cycle": "月付",
        "price": "¥50",
        "traffic": "500GB/月",
        "periodNote": "旧资料口径"
      }
    ],
    "speedMetrics": {
      "testDate": "2026-06-29",
      "testNote": "历史统计数据，仅反映 2026-06-29 测试环境",
      "rows": [
        {
          "region": "美国",
          "latency": "349.3ms",
          "download": "180.29Mbps"
        },
        {
          "region": "日本",
          "latency": "229.8ms",
          "download": "160.51Mbps"
        },
        {
          "region": "香港",
          "latency": "151.4ms",
          "download": "152.86Mbps"
        },
        {
          "region": "新加坡",
          "latency": "179.8ms",
          "download": "142.98Mbps"
        },
        {
          "region": "越南",
          "latency": "232ms",
          "download": "87.68Mbps"
        },
        {
          "region": "泰国",
          "latency": "217ms",
          "download": "82Mbps"
        },
        {
          "region": "英国",
          "latency": "328ms",
          "download": "65.2Mbps"
        }
      ]
    },
    "verificationGaps": [
      "底层协议未核实、现行实时价格与近 30 日速度待重新验证"
    ]
  },
  {
    "id": "lingdongyun",
    "slug": "lingdongyun",
    "name": "灵动云 (LingDongYun)",
    "rankTier": "archival",
    "dataStatus": "historical",
    "subscriptionMode": "subscription",
    "tagline": "历史档案 · 2025年IEPL+VLESS · 7月实测OpenAI全解锁(部分区域送中注意)",
    "establishedYear": 2025,
    "score": {
      "overall": 8.6,
      "stability": 8.5,
      "speed": 8.4,
      "support": 8.4,
      "value": 8.5
    },
    "pricing": {
      "minMonthly": 8.25,
      "currency": "CNY",
      "billingPeriod": "灵动·穿云年付 99元 (70GB/月) · 拂风月付 20元(100GB)",
      "hasTrial": false
    },
    "discountInfo": "优惠码尚未核实（提供季/半年/年/2年/3年阶梯折扣）",
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless",
      "trojan"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "sing-box",
      "v2rayn"
    ],
    "features": [
      "2025 年上线 · VLESS 协议实测（页面另提 Trojan）",
      "70GB 年付至 1.5TB 三年付 + 单次流量包齐全",
      "2026-07-20/21 珠海联通 9Gbps 实测 60 测速 / 60 解锁记录"
    ],
    "aiSupport": {
      "chatgpt": true,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "2026-07-20/21 实测亮点：OpenAI 各地区节点基本全解锁。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "实测记录：TikTok 多失败、新加坡/台湾 YouTube 送中、台湾落地 Netflix/Disney+ 被识别为西班牙(ES)。"
    },
    "riskLevel": "moderate",
    "status": "active",
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "officialSite": "https://varnexa.lingdongaff.com",
    "refundPolicy": "资料标注 2026-07 实测样本，下单前需确认最新路由修复状态",
    "nodeCount": 60,
    "bandwidthLimit": "70GB - 1.5TB / 月 · 含 150G~800G 流量包",
    "pros": [
      "拥有 2026-07-20/21 珠海联通 9Gbps 60 节点实测档案，OpenAI 全地区解锁表现良好"
    ],
    "cons": [
      "实测速度 20~80MB/s（HTTPS 延迟偏高），TikTok 多失败，新/台 YouTube 送中且台湾节点被识别偏欧（ES）"
    ],
    "bestFor": [
      "仅对 OpenAI 多地区解锁有测试需求、对 TikTok 与精确台湾原生流媒体要求不高者"
    ],
    "description": "灵动云是 2025 年开业的 VLESS + IEPL 专线机场。2026-07-20/21 曾做过 60 节点实测：OpenAI 全地区基本解锁、下载速度 20~80MB/s，但也暴露出 HTTPS 延迟偏高、TikTok 多失败及台/新 YouTube 送中等客观瑕疵，因此诚实披露并置于后排。",
    "lastVerified": "2026-08-09",
    "plans": [
      {
        "name": "灵动·穿云",
        "cycle": "年付",
        "price": "¥99",
        "traffic": "70GB/月",
        "periodNote": "折约 ¥8.25/月"
      },
      {
        "name": "灵动·拂风",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "100GB/月",
        "periodNote": "2~3 年阶梯可减"
      },
      {
        "name": "灵动·驭浪",
        "cycle": "月付",
        "price": "¥50",
        "traffic": "300GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "灵动·破晓",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "700GB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "灵动·凌霄",
        "cycle": "月付",
        "price": "¥180",
        "traffic": "1.5TB/月",
        "periodNote": "每月重置"
      },
      {
        "name": "灵动·闲云（小流量包）",
        "cycle": "一次性付费",
        "price": "¥199",
        "traffic": "150GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "cycle": "一次性付费",
        "price": "¥499",
        "traffic": "400GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "灵动·飞云（精英流量包）",
        "cycle": "一次性付费",
        "price": "¥899",
        "traffic": "800GB",
        "periodNote": "一次性有效"
      }
    ],
    "verificationGaps": [
      "优惠码未核实、现时是否已修复 TikTok 与台湾地区流媒体定位待复测"
    ]
  },
  {
    "id": "langwang",
    "slug": "langwang",
    "name": "浪网 (WaveNet)",
    "rankTier": "archival",
    "dataStatus": "pending",
    "subscriptionMode": "unknown",
    "tagline": "历史档案 · IEPL 专线 · 含入门至商业及 180G~900G 流量包（未实测待核实）",
    "establishedYear": 2025,
    "score": {
      "overall": 8.2,
      "stability": 8.2,
      "speed": 8.2,
      "support": 8.1,
      "value": 8.2
    },
    "pricing": {
      "minMonthly": 9.9,
      "currency": "CNY",
      "billingPeriod": "年付标准 119元 (80GB/月) · 入门月付 30元 (150GB口径)",
      "hasTrial": false
    },
    "discountInfo": "优惠码尚未核实",
    "routes": [
      "iepl"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "v2rayn"
    ],
    "features": [
      "截图标注 IEPL 专线架构",
      "覆盖入门、进阶、高端、商业（2000GB/月）与三年付多档周期",
      "支持 180G / 450G / 900G 一次性流量包及 ¥640 定制包"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：原资料未实测且缺设备、节点地区及解锁测试记录。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：无流媒体实测数据。"
    },
    "riskLevel": "moderate",
    "status": "active",
    "affiliateUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "officialSite": "https://varnexa.wavenetaff.com",
    "refundPolicy": "尚缺协议、客户端与退款细则资料，需先核查官网",
    "nodeCount": 30,
    "bandwidthLimit": "80GB - 2000GB / 月（部分套餐原截图遮挡）",
    "pros": [
      "具备从 ¥119/年到 2TB 商业版及多档不限时包的完整历史价目记录"
    ],
    "cons": [
      "原资料明确标注“未实测”，设备限制、节点地区、具体协议、AI/流媒体均为空缺待核实字段"
    ],
    "bestFor": [
      "仅作大流量档位定价结构对照，暂不建议未核实直接长期预付"
    ],
    "description": "浪网整理自 2026-08 历史库，官网标注采用 IEPL 专线并囊括 ¥119 年付标准版、¥30~¥200 月付及高额一次性流量包。原资料中无实测速度、解锁测试且协议/客户端细节暂缺，一切关键指标以待核实标记并靠后排列。",
    "lastVerified": "2026-08-09",
    "plans": [
      {
        "name": "浪网 年付标准",
        "cycle": "年付",
        "price": "¥119",
        "traffic": "80GB/月",
        "periodNote": "折约 ¥9.9/月"
      },
      {
        "name": "浪网 入门",
        "cycle": "月付",
        "price": "¥30",
        "traffic": "约150GB/月",
        "periodNote": "原截图部分遮挡"
      },
      {
        "name": "浪网 进阶",
        "cycle": "月付",
        "price": "¥70",
        "traffic": "450GB/月",
        "periodNote": "月付~三年付"
      },
      {
        "name": "浪网 高端",
        "cycle": "月付",
        "price": "¥120",
        "traffic": "800GB/月",
        "periodNote": "月付~三年付"
      },
      {
        "name": "浪网 商业",
        "cycle": "月付",
        "price": "¥200",
        "traffic": "2000GB/月",
        "periodNote": "月付~三年付"
      },
      {
        "name": "浪网 小流量包",
        "cycle": "一次性付费",
        "price": "¥239",
        "traffic": "180GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "浪网 标准流量包",
        "cycle": "一次性付费",
        "price": "¥569",
        "traffic": "450GB",
        "periodNote": "一次性有效"
      },
      {
        "name": "浪网 精英流量包",
        "cycle": "一次性付费",
        "price": "¥1099",
        "traffic": "900GB",
        "periodNote": "一次性有效"
      }
    ],
    "verificationGaps": [
      "未进行速度与解锁实测；设备数限制、节点清单、协议与支付/退款规则全待核实"
    ]
  },
  {
    "id": "edgenova",
    "slug": "edgenova",
    "name": "EdgeNova (边缘节点)",
    "rankTier": "archival",
    "dataStatus": "pending",
    "subscriptionMode": "subscription",
    "tagline": "历史档案 · 高速直连 / IPLC 多线自动分配 · 限时月付15元(72GB)",
    "establishedYear": 2025,
    "score": {
      "overall": 8.4,
      "stability": 8.4,
      "speed": 8.4,
      "support": 8.3,
      "value": 8.6
    },
    "pricing": {
      "minMonthly": 9,
      "currency": "CNY",
      "billingPeriod": "限时年付 108元 (45GB/月) · 限时月付 15元 (72GB)",
      "hasTrial": false
    },
    "couponCode": "TH888",
    "discountInfo": "历史 8 折优惠码：TH888（当前有效期待核实）",
    "routes": [
      "iplc",
      "direct"
    ],
    "protocols": [
      "vless"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "v2rayn"
    ],
    "features": [
      "定位高速直连 / IPLC 与多线路自动分配",
      "支持限时 ¥15/72G 月付及极界标准~极限(1TB)系列",
      "支持支付宝 / 微信 / USDT 支付"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：未提供独立逐项 AI 测试结果。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：未提供独立流媒体逐项实测。"
    },
    "riskLevel": "moderate",
    "status": "active",
    "affiliateUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "officialSite": "https://work.edgenovaaff.cc",
    "refundPolicy": "历史档案待核实实时政策",
    "nodeCount": 35,
    "bandwidthLimit": "45GB - 1000GB / 月（历史口径）",
    "pros": [
      "提供限时 ¥15/月试水与 ¥108/年包，叠加历史 8 折码门槛适中"
    ],
    "cons": [
      "含“高速直连 / IPLC”混合说明但缺逐地区实测数据与流媒体/AI 测试，当前稳定性待核实"
    ],
    "bestFor": [
      "尝试多线路自动调度、先以限时 ¥15 套餐自主测试兼容性的用户"
    ],
    "description": "边缘节点 EdgeNova 定位为“高速直连 / IPLC 多线路自动分配”，在历史资料中有限时月付 ¥15（72GB）与限时年付 ¥108（45GB/月）两档特惠款，及极界系列高配包。因缺独立实测图表与近 30 日状态核验，目前处于后排待核实名单。",
    "lastVerified": "2026-08-09",
    "plans": [
      {
        "name": "限时年付",
        "cycle": "年付",
        "price": "¥108",
        "traffic": "45GB/月",
        "periodNote": "折 ¥9/月"
      },
      {
        "name": "限时月付",
        "cycle": "月付",
        "price": "¥15",
        "traffic": "72GB/月",
        "periodNote": "旧资料口径"
      },
      {
        "name": "极界·标准",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "120GB/月",
        "periodNote": "可按季/半年/年付"
      },
      {
        "name": "极界·进阶",
        "cycle": "月付",
        "price": "¥50",
        "traffic": "250GB/月",
        "periodNote": "可按季/半年/年付"
      },
      {
        "name": "极界·高级",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "500GB/月",
        "periodNote": "可按季/半年/年付"
      },
      {
        "name": "极界·极限",
        "cycle": "月付",
        "price": "¥200",
        "traffic": "1000GB/月",
        "periodNote": "可按季/半年/年付"
      }
    ],
    "verificationGaps": [
      "逐地区真实测速数据、具体加密协议、AI/流媒体解锁及近 30 日可用率待核实"
    ]
  },
  {
    "id": "sslar",
    "slug": "sslar",
    "name": "SSLAR",
    "rankTier": "archival",
    "dataStatus": "pending",
    "subscriptionMode": "both",
    "tagline": "历史档案 · 企业级 IEPL+BGP · 月付17元起(100GB) 含自研客户端（无入口待核实）",
    "establishedYear": 2024,
    "score": {
      "overall": 8.5,
      "stability": 8.5,
      "speed": 8.5,
      "support": 8.5,
      "value": 8.6
    },
    "pricing": {
      "minMonthly": 13.58,
      "currency": "CNY",
      "billingPeriod": "Basic 年付 ¥163 (100GB/月) · 月付 ¥17 (100GB)",
      "hasTrial": false
    },
    "couponCode": "ko3eTt0w",
    "discountInfo": "历史 8 折优惠码：ko3eTt0w（当前有效性待核实）",
    "routes": [
      "iepl",
      "bgp"
    ],
    "protocols": [
      "vless",
      "shadowsocks"
    ],
    "clients": [
      "clash-verge",
      "shadowrocket",
      "v2rayn"
    ],
    "features": [
      "企业级 IEPL + 多线 BGP，SS/VLESS 自适应",
      "自研 Win/macOS/Android 客户端并支持远程桌面协助",
      "Basic / Standard / Premium 三档清晰阶梯（100G~300G）"
    ],
    "aiSupport": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false,
      "notes": "待核实：未提供独立逐项 AI 测试结果。"
    },
    "streamingSupport": {
      "netflix": false,
      "youtubePremium": false,
      "disneyPlus": false,
      "notes": "待核实：未提供独立流媒体实测数据。"
    },
    "riskLevel": "moderate",
    "status": "warning",
    "affiliateUrl": "",
    "officialSite": "",
    "refundPolicy": "无独立入口链接保存，需待核实官网状态",
    "nodeCount": 35,
    "bandwidthLimit": "100GB - 300GB / 月（历史口径）",
    "pros": [
      "17 元 100GB 起步结构规整，标配远程协助定位适合商务办公新手"
    ],
    "cons": [
      "当前未保存独立官网入口，缺少近 30 日实测速度与 AI/流媒体验证结果"
    ],
    "bestFor": [
      "查询企业级自研客户端与历史 Basic/Standard/Premium 资费参照"
    ],
    "description": "SSLAR 在历史品牌库中定位为企业级 IEPL + 多线 BGP 服务，支持 Shadowsocks/VLESS 自适应及跨平台自研客户端，Basic 月付 ¥17 含 100GB 流量并历史标注可提供远程桌面协助。当前缺失独立官网入口与近期实测图，已置后标示待核实。",
    "lastVerified": "2026-08-09",
    "plans": [
      {
        "name": "Basic",
        "cycle": "月付",
        "price": "¥17",
        "traffic": "100GB/月",
        "periodNote": "年付 ¥163（历史价）"
      },
      {
        "name": "Standard",
        "cycle": "月付",
        "price": "¥28",
        "traffic": "200GB/月",
        "periodNote": "年付 ¥268（历史价）"
      },
      {
        "name": "Premium",
        "cycle": "月付",
        "price": "¥36",
        "traffic": "300GB/月",
        "periodNote": "年付 ¥345（历史价）"
      }
    ],
    "verificationGaps": [
      "当前独立入口、优惠码有效性、USDT 支付情况及实测速度解锁待核实"
    ]
  }
];
