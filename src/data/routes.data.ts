export interface RouteInfo {
  id: string;
  slug: string;
  name: string;
  fullName: string;
  type: 'iepl' | 'iplc' | 'bgp' | 'transit' | 'direct';
  latency: string;
  costLevel: '高' | '极高' | '中等' | '低';
  stability: '99.9%' | '99.5%' | '98%' | '95%';
  bypassGfw: boolean;
  mechanism: string;
  pros: string[];
  cons: string[];
  summary: string;
  description: string;
}

export const routesData: RouteInfo[] = [
  {
    id: 'iepl',
    slug: 'iepl',
    name: 'IEPL 国际专线',
    fullName: 'International Ethernet Private Line',
    type: 'iepl',
    latency: '超低 (深港 15-20ms / 沪日 28-35ms)',
    costLevel: '极高',
    stability: '99.9%',
    bypassGfw: true,
    mechanism: '通过电信运营商的二层以太网物理专线跨境传输，两端直接进入内网互联，物理链路完全绕过 GFW 防火墙。',
    pros: [
      '物理不过墙，不受敏感时期 GFW 规则波动影响',
      '极低抖动与丢包率，晚高峰全天候跑满',
      '支持任意轻量加密协议（如 Shadowsocks 2022）',
    ],
    cons: [
      '带宽单价极高，导致机场套餐价格通常高于普通中转',
    ],
    summary: '目前跨境代理网络中稳定性与抗干扰能力的行业天花板，大厂与企业跨境业务首选。',
    description: 'IEPL 专线是电信运营商在不同国家或地区之间建立的点对点物理专线。数据包在中国大陆入口服务器被封装后，通过内网光纤直接送达海外出口，中途不经过公网出口审查，因此具有天然的稳定优势。',
  },
  {
    id: 'iplc',
    slug: 'iplc',
    name: 'IPLC 专线',
    fullName: 'International Private Leased Circuit',
    type: 'iplc',
    latency: '极低 (深港 18-25ms / 沪日 30-40ms)',
    costLevel: '极高',
    stability: '99.9%',
    bypassGfw: true,
    mechanism: '传统国际私有租用线路，点对点专线互联，物理绕过公网防火墙审查。',
    pros: [
      '完全不过墙，全天候 0 丢包',
      '跨国网络延迟极度稳定，适合游戏联机与实时语音',
    ],
    cons: [
      '价格高昂，且偶遇海缆维修时切换需看机场冗余能力',
    ],
    summary: '与 IEPL 并列的物理专线方案，高品质机场的压舱石。',
    description: 'IPLC 是最早的国际企业级通信专线。相比普通公网隧道，IPLC 拥有专属物理光纤信道，不与公网竞争带宽，峰值期绝无拥塞。',
  },
  {
    id: 'bgp',
    slug: 'bgp',
    name: 'BGP 动态多线中转',
    fullName: 'Border Gateway Protocol Multi-Line Tunnel',
    type: 'bgp',
    latency: '中低 (依据用户所在运营商自动智能调度)',
    costLevel: '中等',
    stability: '99.5%',
    bypassGfw: false,
    mechanism: '国内入口部署电信、联通、移动、教育网 BGP 智能机房，将流量汇聚后通过加密公网隧道发送至海外出口。',
    pros: [
      '无论用户是电信、联通还是移动，均能匹配最近最佳入口',
      '性价比优于纯物理专线，抗单点故障能力强',
    ],
    cons: [
      '公网中转部分经过 GFW，极端敏感时期需依赖强抗封锁协议',
    ],
    summary: '主流中高端机场的核心架构，兼顾了成本、速度与全国各地的网络适应性。',
    description: 'BGP 允许路由器根据网络状态自动选择最优路径。当电信链路出现故障时，BGP 入口可无感切换至联通或移动备用出口，从而显著提高全网高可用性。',
  },
  {
    id: 'transit',
    slug: 'transit',
    name: '优质单线/双线中转',
    fullName: 'Server-to-Server Port Forwarding / Relay',
    type: 'transit',
    latency: '正常',
    costLevel: '中等',
    stability: '98%',
    bypassGfw: false,
    mechanism: '在国内租赁中转 VPS 服务器（如广州移动、江苏联通），通过国内机房的大带宽中继至海外。',
    pros: [
      '价格极其实惠，适合日常追剧与大流量下载',
      '大幅改善普通用户直连海外 VPS 的丢包问题',
    ],
    cons: [
      '遇到国内中转机房封禁或断网时需要管理员手动切换',
    ],
    summary: '高性价比平民机场最常用的构建方式，解决公网直连丢包问题。',
    description: '普通国内用户直连国外服务器往往会遭遇国际出口拥塞与丢包。中转机制利用国内骨干网优质带宽作为中继跳板，大幅降低了丢包率。',
  },
  {
    id: 'direct',
    slug: 'direct',
    name: '直连节点 (Direct)',
    fullName: 'Direct Public Network Connection',
    type: 'direct',
    latency: '较高且波动大',
    costLevel: '低',
    stability: '95%',
    bypassGfw: false,
    mechanism: '客户端直接与海外落地服务器建立连接，完全依赖公网与抗封锁协议（如 Hysteria2、VLESS Reality）。',
    pros: [
      '节点成本极低，往往提供海量免费或极便宜流量',
      '无国内中间人中转，纯端到端通信',
    ],
    cons: [
      '晚高峰公网国际出口拥堵严重，丢包率高',
    ],
    summary: '适合作为低成本备用节点或在大带宽直连协议配合下使用。',
    description: '直连节点不经过任何国内中转服务器，直接由客户端穿透公网连接海外。需要搭配 Hysteria2 等强力抗丢包协议方能获得稳定体验。',
  },
];
