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
  brandName: '机场矩阵',
  tagline: '中文互联网机场代理生态数据平台与知识图谱',
  description: '全方位聚合机场推荐、节点测速、客户端配置、协议百科、海外AI访问与流媒体解锁解决方案，提供真实可信的代理风险监控与智能选型系统。',
  url: 'https://airportmatrix.org',
  author: 'AirportMatrix Intelligence Team',
  since: 2024,
  contactEmail: 'contact@airportmatrix.org',
  nav: [
    {
      label: '机场矩阵',
      href: '/providers',
    },
    {
      label: '智能选型',
      href: '/recommend/wizard',
    },
    {
      label: '场景矩阵',
      href: '/category/ai-access',
      children: [
        { label: 'AI 访问专线榜', href: '/category/ai-access', desc: 'ChatGPT/Claude 原生住宅 IP' },
        { label: '4K/8K 流媒体排行', href: '/category/streaming-4k', desc: 'Netflix, Disney+ 4K 秒开' },
        { label: '15元以内便宜月付', href: '/category/budget-under-15', desc: '14.9元享 100GB 专线' },
        { label: '不限时流量专区', href: '/category/unlimited-traffic', desc: '一次购买不过期长效备用' },
        { label: '年付低至7元合集', href: '/category/annual-discount', desc: '均摊7.5元/月 IEPL 专线' },
      ],
    },
    {
      label: '客户端教程',
      href: '/clients',
      children: [
        { label: 'Clash Verge Rev', href: '/client/clash-verge', desc: '新一代跨平台主流客户端' },
        { label: 'Shadowrocket', href: '/client/shadowrocket', desc: 'iOS 经典高效网络工具' },
        { label: 'sing-box', href: '/client/sing-box', desc: '极速内核与下一代代理框架' },
        { label: 'v2rayN', href: '/client/v2rayn', desc: 'Windows 老牌稳定工具' },
        { label: 'Surge', href: '/client/surge', desc: 'macOS/iOS 高端网络调试神器' },
      ],
    },
    {
      label: '极客工具',
      href: '/tools',
      badge: 'TOOL',
      children: [
        { label: '在线订阅转换器', href: '/tools/sub-converter', desc: '一键生成 Mihomo TUN 规则' },
        { label: 'IP 纯净度与 WebRTC 探测', href: '/tools/ip-check', desc: '自查 IP 风险度与地理位置' },
      ],
    },
    {
      label: '风险监控',
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
