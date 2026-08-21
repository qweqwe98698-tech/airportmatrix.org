export interface Protocol {
  id: string;
  slug: string;
  name: string;
  fullName: string;
  encryption: string;
  transport: string;
  latencyScore: number;
  antiBlockingScore: number;
  throughputScore: number;
  bestUseCases: string[];
  supportedClients: string[];
  summary: string;
  description: string;
}

export const protocolsData: Protocol[] = [
  {
    id: 'vless',
    slug: 'vless',
    name: 'VLESS + Reality',
    fullName: 'VLESS with REALITY TLS Masquerade',
    encryption: 'Zero Extra Encryption + TLS 1.3 / REALITY',
    transport: 'TCP / gRPC / WebSocket',
    latencyScore: 9.6,
    antiBlockingScore: 9.9,
    throughputScore: 9.5,
    bestUseCases: ['高防封锁需求', '海外 AI 与敏感流量', '低延迟日常网页与办公'],
    supportedClients: ['sing-box', 'clash-verge', 'v2rayn', 'shadowrocket'],
    summary: '借由借用大型合规网站的真实 TLS 证书与 SNI 消除自身特征，彻底破解 GFW 的主动探测与阻断。',
    description: 'VLESS 是一种无状态、轻量级的传输协议，配合 REALITY 混淆技术后，它不再需要自建域名和申请 TLS 证书，而是直接将外部探测流量透明转发给正规大厂网站（如 Apple、Microsoft、Cloudflare），从根本上消除了中间人证书指纹特征。',
  },
  {
    id: 'hysteria2',
    slug: 'hysteria2',
    name: 'Hysteria 2',
    fullName: 'Hysteria 2 Protocol (QUIC / UDP)',
    encryption: 'TLS 1.3 + Custom Obfuscation',
    transport: 'UDP / QUIC',
    latencyScore: 9.8,
    antiBlockingScore: 9.2,
    throughputScore: 9.9,
    bestUseCases: ['高丢包弱网环境（校园网、移动宽带）', '4K/8K 超高清视频', '大文件爆发式下载'],
    supportedClients: ['sing-box', 'clash-verge', 'shadowrocket', 'v2rayn', 'surge'],
    summary: '基于标准 QUIC 深度定制拥塞控制算法，在丢包率 10%~30% 的恶劣链路下依然能够跑满千兆带宽。',
    description: 'Hysteria 2 是专为不可靠网络设计的极速代理协议。传统 TCP 协议在遇到丢包时会强制降速并重传，而 Hysteria 2 采用定制化的 UDP 拥塞控制，无视常规丢包限制，能够最大限度压榨国际带宽，被誉为“恶劣网络救星”。',
  },
  {
    id: 'trojan',
    slug: 'trojan',
    name: 'Trojan',
    fullName: 'Trojan / Trojan-Go',
    encryption: 'Standard TLS 1.3',
    transport: 'TCP / WebSocket / gRPC',
    latencyScore: 9.2,
    antiBlockingScore: 9.0,
    throughputScore: 9.2,
    bestUseCases: ['高兼容性需求', '老旧设备与多种客户端', '稳定网页浏览与视频'],
    supportedClients: ['clash-verge', 'shadowrocket', 'surge', 'v2rayn', 'sing-box'],
    summary: '将代理流量彻底伪装成最常见的标准 HTTPS 网站流量，兼容性极强。',
    description: 'Trojan 的核心哲学是“模仿”，它通过合法证书将自身伪装成一个正常的 HTTPS 网站。由于全球 95% 以上的网页流量均使用 TLS 加密，GFW 无法直接通过流量特征将 Trojan 与正常网页区分开来。',
  },
  {
    id: 'shadowsocks',
    slug: 'shadowsocks',
    name: 'Shadowsocks 2022',
    fullName: 'Shadowsocks 2022 Specification',
    encryption: 'AEAD (AES-256-GCM / 2022-blake3-chacha20-poly1305)',
    transport: 'TCP / UDP',
    latencyScore: 9.9,
    antiBlockingScore: 8.5,
    throughputScore: 9.7,
    bestUseCases: ['IEPL / IPLC 内网专线', '软路由低功耗转发', '主机与联机游戏加速'],
    supportedClients: ['clash-verge', 'shadowrocket', 'surge', 'sing-box', 'v2rayn'],
    summary: '经典轻量加密协议的现代化重构，协议开销极小，是专线机场的最佳黄金搭档。',
    description: 'Shadowsocks 2022 规范通过强化密钥派生与重放攻击防御，彻底修复了老版 SS 的安全隐患。在不受 GFW 深度探测的 IEPL/IPLC 内网专线中，SS2022 凭借极低的 CPU 开销和超高转发效率成为所有专线机场的首选。',
  },
  {
    id: 'tuic',
    slug: 'tuic',
    name: 'TUIC',
    fullName: 'TUIC (Time Under Intermittent Connectivity)',
    encryption: 'TLS 1.3 / QUIC',
    transport: 'UDP / QUIC',
    latencyScore: 9.7,
    antiBlockingScore: 9.1,
    throughputScore: 9.6,
    bestUseCases: ['移动端网络频繁切换（Wi-Fi/5G）', '高实时性 Web 交互', '低握手延迟应用'],
    supportedClients: ['sing-box', 'clash-verge', 'shadowrocket'],
    summary: '基于 QUIC 研发的低延迟高并发协议，支持 0-RTT 极速连接与连接迁移。',
    description: 'TUIC 在协议设计上最大化减少了握手往返次数（0-RTT），并且由于基于 QUIC，当手机在 Wi-Fi 和蜂窝移动网络之间切换时，TUIC 连接无需重新建立，体验极其平滑。',
  },
];
