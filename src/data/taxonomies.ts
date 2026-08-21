export const ROUTE_TYPES = [
  { id: 'iepl', name: 'IEPL 国际专线', desc: '端到端内网专线，不过 GFW，延迟最低且稳定性极高' },
  { id: 'iplc', name: 'IPLC 专线', desc: '点对点物理专线，抗封锁能力强，高峰期零丢包' },
  { id: 'bgp', name: 'BGP 动态多线', desc: '多线接入智能寻路，抗单点故障能力强' },
  { id: 'transit', name: '优质中转', desc: '国内多地入口中转，性价比高' },
  { id: 'direct', name: '直连优化', desc: '适合低成本与大流量下载场景' },
] as const;

export const PROTOCOLS = [
  { id: 'vless', name: 'VLESS + Reality', desc: 'Xray 核心全新架构，无特征伪装，抗封锁天花板' },
  { id: 'hysteria2', name: 'Hysteria 2', desc: '基于 UDP/QUIC 开发，恶劣网络与高丢包环境下极速爆发' },
  { id: 'trojan', name: 'Trojan-Go', desc: '标准 HTTPS 流量伪装，兼容性极佳' },
  { id: 'shadowsocks', name: 'Shadowsocks 2022', desc: '老牌经典协议新规范，开销小，软路由与游戏首选' },
  { id: 'tuic', name: 'TUIC', desc: '基于 QUIC 的快速传输协议，低连接握手延迟' },
] as const;

export const PLATFORMS = [
  { id: 'windows', name: 'Windows', icon: 'monitor' },
  { id: 'macos', name: 'macOS', icon: 'laptop' },
  { id: 'ios', name: 'iOS', icon: 'smartphone' },
  { id: 'android', name: 'Android', icon: 'tablet' },
  { id: 'linux', name: 'Linux', icon: 'terminal' },
] as const;

export const SCENARIOS = [
  { id: 'ai', name: '海外 AI 访问', desc: '稳定解锁 ChatGPT, Claude, Gemini, Cursor 等平台' },
  { id: 'streaming', name: '4K/8K 流媒体', desc: '原生 IP 解锁 Netflix, YouTube Premium, Disney+' },
  { id: 'dev', name: '开发与科研', desc: 'GitHub 极速拉取、Docker 镜像、Google Scholar' },
  { id: 'gaming', name: '跨国游戏加速', desc: '低延迟专线、UDP 全通、Steam/PSN 联机' },
  { id: 'budget', name: '高性价比备用', desc: '大流量、月付灵活、低成本翻墙方案' },
] as const;

export const RISK_LEVELS = {
  safe: { label: '合规稳定', color: 'emerald', desc: '运营超 2 年，专线冗余丰富，无跑路或失联前科' },
  moderate: { label: '一般风险', color: 'amber', desc: '中小型运营团队，高峰期可能有波动或域名更换' },
  high: { label: '高风险预警', color: 'rose', desc: '近期出现大幅降速、客服失联或频繁更名' },
  critical: { label: '严重预警/跑路', color: 'rose', desc: '已确认失联或官网无法打开，请立即止损' },
} as const;
