export interface SiteConfig {
  name: string;
  brandName: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  since: number;
  contactEmail: string;
  nav: Array<{
    label: string;
    href: string;
    badge?: string;
    children?: Array<{ label: string; href: string; desc?: string }>;
  }>;
  features: {
    enableRiskAlerts: boolean;
    enableSmartRecommender: boolean;
    enableSearchModal: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: 'AirportMatrix X',
  brandName: '机场测评榜',
  tagline: '2026 好用的机场推荐、性价比机场排行与高速机场节点测评榜',
  description: '2026 权威机场测评与好用的机场推荐平台：实测筛选高性价比机场、稳定高速机场节点与 Clash 机场推荐方案，公开套餐价格、9Gbps 测速、ChatGPT 解锁与跑路风险监测。',
  url: 'https://airportmatrix.org',
  author: 'AirportMatrix 机场测评实验室',
  since: 2024,
  contactEmail: 'contact@airportmatrix.org',
  nav: [
    {
      label: '机场测评排行',
      href: '/providers',
    },
    {
      label: '好用的机场推荐',
      href: '/recommend/wizard',
    },
    {
      label: '性价比机场榜',
      href: '/category/cost-effective',
      children: [
        { label: '2026 性价比机场排行', href: '/category/cost-effective', desc: '月均 7.5~15 元高性价比专线实测榜' },
        { label: 'Clash 机场推荐精选', href: '/category/clash-recommend', desc: '完美适配 Clash Verge / Mihomo 一键订阅' },
        { label: '高速稳定机场节点榜', href: '/category/airport-nodes', desc: '港/日/新/台 IEPL 专线节点晚高峰实测' },
        { label: '15元以内便宜月付机场', href: '/category/budget-under-15', desc: '14.9元享 100GB 高性价比月付专线' },
        { label: 'ChatGPT / AI 专线机场', href: '/category/ai-access', desc: '原生住宅 IP 稳定解锁 ChatGPT / Claude' },
        { label: '4K/8K 流媒体机场排行', href: '/category/streaming-4k', desc: 'Netflix / Disney+ 4K 秒开不卡顿' },
      ],
    },
    {
      label: 'Clash 与客户端',
      href: '/clients',
      children: [
        { label: 'Clash Verge Rev', href: '/client/clash-verge', desc: 'Windows/macOS 首选 Clash 客户端教程' },
        { label: 'Shadowrocket (小火箭)', href: '/client/shadowrocket', desc: 'iOS 小火箭下载与节点订阅导入教程' },
        { label: 'sing-box', href: '/client/sing-box', desc: '全平台轻量高速内核配置指南' },
        { label: 'v2rayN', href: '/client/v2rayn', desc: 'Windows 经典代理客户端实战' },
        { label: 'Surge', href: '/client/surge', desc: 'macOS/iOS 进阶网络分流工具' },
      ],
    },
    {
      label: '极客工具',
      href: '/tools',
      badge: 'TOOL',
      children: [
        { label: '机场订阅链接转换', href: '/tools/sub-converter', desc: '一键转换 Clash / 小火箭 / sing-box 订阅' },
        { label: 'IP 纯净度与风险检测', href: '/tools/ip-check', desc: '自查机场节点 IP 欺诈度与原生状态' },
      ],
    },
    {
      label: '跑路监控',
      href: '/risks',
      badge: 'LIVE',
    },
    {
      label: '控制台',
      href: '/admin',
      badge: '5.0',
    },
  ],
  features: {
    enableRiskAlerts: true,
    enableSmartRecommender: true,
    enableSearchModal: true,
  },
};
