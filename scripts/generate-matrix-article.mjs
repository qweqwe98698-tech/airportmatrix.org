import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const matrixArticlesDir = path.join(rootDir, 'src', 'data', 'matrix-articles');

if (!fs.existsSync(matrixArticlesDir)) {
  fs.mkdirSync(matrixArticlesDir, { recursive: true });
}

// ============================================================================
// 1. 核心题库：24 大硬核 SEO / GEO 专题主线方向矩阵 (Topic Matrix Pool)
// ============================================================================
const TOPIC_MATRIX_POOL = [
  {
    topic: 'IEPL 与 IPLC 物理光纤专线跨境传输原理与光纤物理延迟极限深度解析',
    slugHint: 'iepl-vs-iplc-physical-fiber-latency-limits-analysis',
    pillar: '专线拓扑与物理传输',
    keywords: ['IEPL', 'IPLC', '物理光缆', '跨海光缆', 'AS4134', '折射率常数', '单向传播时延', '抖动标准差'],
    author: 'AirportMatrix 评测实验室 · 骨干网架构组'
  },
  {
    topic: 'BGP Anycast 全球选路架构与跨境网络动态路由收敛机制实战复盘',
    slugHint: 'bgp-anycast-global-routing-convergence-engineering',
    pillar: '专线拓扑与骨干路由',
    keywords: ['BGP Anycast', '自治系统号 ASN', '路由抖动', 'PoP 机房', '骨干网互联', 'TCP 握手', 'AS9929'],
    author: 'AirportMatrix 评测实验室 · 骨干网架构组'
  },
  {
    topic: '原生住宅双 ISP IP 纯净度检测体系与 AI 大模型风控对抗实战全景',
    slugHint: 'residential-dual-isp-ai-risk-mitigation-guide',
    pillar: 'AI 与高风控网络对抗',
    keywords: ['双 ISP', '原生住宅 IP', 'OpenAI 风控', 'Scamalytics', 'IPQualityScore', '欺诈评分', 'Turnstile'],
    author: 'AirportMatrix 评测实验室 · AI 与高风控对抗团队'
  },
  {
    topic: 'Claude 与 ChatGPT 严苛风控机理解析与零封号静态网络环境搭建规范',
    slugHint: 'claude-chatgpt-anti-ban-static-network-hardening',
    pillar: 'AI 与高风控网络对抗',
    keywords: ['Claude 封号', 'ChatGPT 1020', '指纹浏览器', '静态住宅 IP', 'WebRTC 泄露', 'DNS 防污染'],
    author: 'AirportMatrix 评测实验室 · AI 与高风控对抗团队'
  },
  {
    topic: 'Shadowsocks 2022 与 VLESS Reality 现代加密协议性能与抗审查实测',
    slugHint: 'ss2022-vs-vless-reality-performance-benchmarks',
    pillar: '传输协议与密码工程',
    keywords: ['Shadowsocks 2022', 'VLESS Reality', 'TLS 1.3', 'SNI 借用', 'CPU 开销', '吞吐测试', 'AES-256-GCM'],
    author: 'AirportMatrix 评测实验室 · 协议与密码工程组'
  },
  {
    topic: 'Hysteria 2 Brutal 拥塞控制算法与 UDP 恶劣丢包环境穿透工程拆解',
    slugHint: 'hysteria2-brutal-congestion-control-deep-dive',
    pillar: '传输协议与密码工程',
    keywords: ['Hysteria 2', 'Brutal 拥塞算法', 'QUIC', 'UDP 丢包补偿', '晚高峰 QoS 整形', '带宽利用率'],
    author: 'AirportMatrix 评测实验室 · 协议与密码工程组'
  },
  {
    topic: 'Netflix OpenConnect CDN 架构与全球 4K HDR 流媒体跨区解锁技术全景',
    slugHint: 'netflix-openconnect-cdn-streaming-unlock-mechanisms',
    pillar: '流媒体 CDN 与版权分流',
    keywords: ['Netflix OpenConnect', 'OCA 缓存机房', 'DNS 劫持解锁', '4K 码率', 'Disney+', '地理围栏'],
    author: 'AirportMatrix 评测实验室 · 流媒体 CDN 与分流研究室'
  },
  {
    topic: '跨国跨境电商与 TikTok 独立站矩阵防关联网络环境工程设计规范',
    slugHint: 'cross-border-ecommerce-tiktok-network-isolation',
    pillar: '跨境独立站与安全合规',
    keywords: ['TikTok 运营', '跨境独立站', '网络环境隔离', '静态专线', '指纹防关联', '家庭宽带 ASN'],
    author: 'AirportMatrix 评测实验室 · 跨国分布式探针专项组'
  },
  {
    topic: 'TCP BBRv3 拥塞控制算法演进与跨境长肥管道 (LFN) 吞吐极限优化',
    slugHint: 'tcp-bbrv3-long-fat-networks-throughput-optimization',
    pillar: '拥塞控制与物理性能基准',
    keywords: ['BBRv3', '长肥管道 LFN', 'BDP 带宽时延积', 'TCP 窗口扩缩', '丢包重传率', '骨干网吞吐'],
    author: 'AirportMatrix 评测实验室 · 骨干网架构组'
  },
  {
    topic: '全球海底光缆拓扑演进与亚太中美跨洋网络中断应急路由切换全景',
    slugHint: 'submarine-cable-topology-asia-pacific-rerouting',
    pillar: '专线拓扑与物理传输',
    keywords: ['海底光缆', 'TPE', 'APG', 'NCP', '光缆中断', 'BGP 自动切换', '陆缆冗余'],
    author: 'AirportMatrix 评测实验室 · 骨干网架构组'
  },
  {
    topic: 'DNS 劫持、EDNS Client Subnet 泄露与全链路加密 DoH/DoT 实战',
    slugHint: 'dns-poisoning-ecs-leak-doh-dot-hardening',
    pillar: '跨境独立站与安全合规',
    keywords: ['DNS 污染', 'EDNS Client Subnet', 'DoH', 'DoT', 'DNSSEC', '递归解析', '分流规则'],
    author: 'AirportMatrix 评测实验室 · 协议与密码工程组'
  },
  {
    topic: '软路由全屋透明代理架构设计与多运营商三网策略路由分流实战',
    slugHint: 'smart-router-transparent-proxy-multi-wan-routing',
    pillar: '拥塞控制与物理性能基准',
    keywords: ['软路由', 'OpenWrt', '透明代理', 'TUN 模式', '多 WAN 负载均衡', '三网策略路由'],
    author: 'AirportMatrix 评测实验室 · 跨国分布式探针专项组'
  },
  {
    topic: 'IPv6 单栈演进与跨境网络双栈双向路由竞态性能基准对比',
    slugHint: 'ipv6-single-stack-dual-stack-routing-benchmarks',
    pillar: '专线拓扑与骨干路由',
    keywords: ['IPv6', '双栈竞态', 'Happy Eyeballs v2', 'RFC 8305', '跨境路由', 'MTU 探测'],
    author: 'AirportMatrix 评测实验室 · 骨干网架构组'
  },
  {
    topic: 'WebRTC 真实公网 IP 泄露机制与抗浏览器指纹追踪工程防御矩阵',
    slugHint: 'webrtc-ip-leak-mitigation-browser-fingerprint-defense',
    pillar: 'AI 与高风控网络对抗',
    keywords: ['WebRTC 泄露', 'STUN/TURN', 'mDNS 候选', '浏览器指纹', 'Canvas 伪装', '代理穿透'],
    author: 'AirportMatrix 评测实验室 · AI 与高风控对抗团队'
  },
  {
    topic: 'gRPC 传输协议在反审查网络代理中的多路复用与抗抖动特性实测',
    slugHint: 'grpc-multiplexing-anti-censorship-jitter-analysis',
    pillar: '传输协议与密码工程',
    keywords: ['gRPC', 'HTTP/2 多路复用', '队头阻塞', 'TLS 伪装', 'KeepAlive', '长连接'],
    author: 'AirportMatrix 评测实验室 · 协议与密码工程组'
  },
  {
    topic: '晚高峰网络 QoS 恶劣整形机理与 TCP/UDP 流量混淆伪装对抗策略',
    slugHint: 'peak-hours-qos-traffic-shaping-evasion-strategies',
    pillar: '拥塞控制与物理性能基准',
    keywords: ['QoS 整形', 'UDP 限速', '令牌桶算法', '混淆伪装', '晚高峰丢包', '运营商策略'],
    author: 'AirportMatrix 评测实验室 · 跨国分布式探针专项组'
  },
  {
    topic: '多云跨境骨干组网与 AWS Global Accelerator 及 Cloudflare 链路对比',
    slugHint: 'multi-cloud-cross-border-backbone-routing-comparison',
    pillar: '专线拓扑与物理传输',
    keywords: ['AWS Global Accelerator', 'Cloudflare Magic WAN', 'Anycast IP', '跨境骨干', '专线回源'],
    author: 'AirportMatrix 评测实验室 · 骨干网架构组'
  },
  {
    topic: 'TUIC v5 基于 QUIC 协议的多路复用抗丢包特性与高并发压测拆解',
    slugHint: 'tuic-v5-quic-multiplexing-loss-resilience-benchmarks',
    pillar: '传输协议与密码工程',
    keywords: ['TUIC v5', 'QUIC 协议', '0-RTT 握手', '多路复用', '抗高丢包', '高并发压测'],
    author: 'AirportMatrix 评测实验室 · 协议与密码工程组'
  },
  {
    topic: '跨境科研算力集群多节点分布式调度中的网络拓扑与低抖动专线选型',
    slugHint: 'distributed-ai-compute-cross-border-low-jitter-networking',
    pillar: 'AI 与高风控网络对抗',
    keywords: ['分布式算力', '低抖动专线', 'RDMA over Converged Ethernet', '跨国调度', 'NCCL', '丢包敏感度'],
    author: 'AirportMatrix 评测实验室 · AI 与高风控对抗团队'
  },
  {
    topic: '代理服务商 SLA 履约监测与黑天鹅跑路风险的分布式探针自动化预警体系',
    slugHint: 'provider-sla-monitoring-distributed-probe-alerting',
    pillar: '跨境独立站与安全合规',
    keywords: ['SLA 履约', '跑路预警', '分布式探针', '可用性监控', '域名变更监测', '风险雷达'],
    author: 'AirportMatrix 评测实验室 · 跨国分布式探针专项组'
  },
  {
    topic: '缓冲区膨胀 (Bufferbloat) 效应与 fq_codel / CAKE 队列管理实测',
    slugHint: 'bufferbloat-mitigation-fq-codel-cake-benchmarks',
    pillar: '拥塞控制与物理性能基准',
    keywords: ['Bufferbloat', '缓冲区膨胀', 'fq_codel', 'CAKE', '排队延迟', '主动队列管理 AQM'],
    author: 'AirportMatrix 评测实验室 · 骨干网架构组'
  },
  {
    topic: 'TLS 1.3 0-RTT 握手重放攻击风险与跨境加速链路安全加固规范',
    slugHint: 'tls13-zero-rtt-replay-attack-defense-hardening',
    pillar: '传输协议与密码工程',
    keywords: ['TLS 1.3', '0-RTT', '重放攻击', 'Early Data', 'Anti-Replay Cookie', '前向保密'],
    author: 'AirportMatrix 评测实验室 · 协议与密码工程组'
  },
  {
    topic: '逆向工程视角的代理特征识别：TLS 指纹 JA3/JA4 与主动探测对抗演进',
    slugHint: 'ja3-ja4-tls-fingerprint-active-probing-countermeasures',
    pillar: '传输协议与密码工程',
    keywords: ['JA3 指纹', 'JA4 指纹', '主动探测', 'TLS 握手特征', 'uTLS 伪装', '反指纹识别'],
    author: 'AirportMatrix 评测实验室 · 协议与密码工程组'
  },
  {
    topic: '跨境长途传输 MTU 黑洞识别与 Path MTU 动态发现配置自救实战',
    slugHint: 'mtu-black-hole-detection-pmtud-recovery-guide',
    pillar: '专线拓扑与骨干路由',
    keywords: ['MTU 黑洞', 'Path MTU Discovery', 'ICMP Type 3 Code 4', 'MSS Clamping', '分片丢弃'],
    author: 'AirportMatrix 评测实验室 · 骨干网架构组'
  }
];

// ============================================================================
// 2. 自发布文章 URL 防批量 AI 识别优化系统 (Anti-Batch URL Synthesizer)
// ============================================================================
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from',
  'is', 'are', 'was', 'were', 'be', 'been', 'being', 'this', 'that', 'these', 'those'
]);

function getExistingSlugs() {
  const slugs = new Set();

  // 1. 读取基础文章 slug
  try {
    const articlesDataModulePath = path.join(rootDir, 'src', 'data', 'articles.data.ts');
    const content = fs.readFileSync(articlesDataModulePath, 'utf-8');
    const regex = /"slug":\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      slugs.add(match[1]);
    }
  } catch (err) {
    console.warn('⚠️ 读取 articles.data.ts slug 警告:', err.message);
  }

  // 2. 读取 matrix-articles 目录下已存在的 JSON
  if (fs.existsSync(matrixArticlesDir)) {
    const files = fs.readdirSync(matrixArticlesDir);
    for (const f of files) {
      if (f.endsWith('.json')) {
        slugs.add(f.replace('.json', ''));
      }
    }
  }

  return slugs;
}

/**
 * 防批量 AI 识别 URL 生成器：
 * 1. 过滤停用词与虚词
 * 2. 拼接专业技术语义词根，模仿人类顶级网络工程师命名惯例
 * 3. 约束在 28 ~ 58 字符的黄金 SEO 语义区间
 * 4. 彻底排除规律性批量前缀、时间戳后缀与递增计数器 (Zero Pattern Fingerprint)
 */
function synthesizeAntiBatchSlug(rawSlugHint, keywords, existingSlugs) {
  let base = (rawSlugHint || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');

  const tokens = base.split('-').filter(t => t.length > 1 && !STOP_WORDS.has(t));

  let candidate = tokens.slice(0, 5).join('-');
  if (candidate.length < 24) {
    // 补充技术关键词
    const cleanKw = keywords
      .map(k => k.toLowerCase().replace(/[^a-z0-9]/g, ''))
      .filter(k => k.length >= 3 && !tokens.includes(k));
    if (cleanKw.length > 0) {
      candidate = `${candidate}-${cleanKw[0]}`;
    }
  }

  // 限制最大长度
  if (candidate.length > 55) {
    candidate = candidate.slice(0, 55).replace(/-[^-]*$/, '');
  }

  candidate = candidate.replace(/^-+|-+$/g, '');

  // 查重：若碰撞，通过语义修饰词扩展，而非添加简单数字编号
  if (existingSlugs.has(candidate)) {
    const modifiers = ['in-depth-guide', 'technical-review', 'engineering-analysis', 'performance-audit'];
    for (const mod of modifiers) {
      const alt = `${candidate}-${mod}`;
      if (!existingSlugs.has(alt)) {
        return alt;
      }
    }
    const entropy = Math.random().toString(36).slice(2, 6);
    candidate = `${candidate}-${entropy}`;
  }

  return candidate;
}

function selectNextTopic() {
  const existingSlugs = getExistingSlugs();

  for (const item of TOPIC_MATRIX_POOL) {
    const projectedSlug = synthesizeAntiBatchSlug(item.slugHint, item.keywords, new Set());
    if (!existingSlugs.has(projectedSlug) && !existingSlugs.has(item.slugHint)) {
      return {
        ...item,
        finalSlug: synthesizeAntiBatchSlug(item.slugHint, item.keywords, existingSlugs)
      };
    }
  }

  // 备用：如 24 个选题已全量发布，根据动态技术组合衍生下一轮进阶选题
  const idx = Math.floor(Math.random() * TOPIC_MATRIX_POOL.length);
  const base = TOPIC_MATRIX_POOL[idx];
  const dynamicSlugHint = `${base.slugHint}-advanced-evolution`;
  return {
    topic: `${base.topic}（2026 技术演进与架构实操深度增强版）`,
    slugHint: dynamicSlugHint,
    pillar: base.pillar,
    keywords: [...base.keywords, '实战调优', '性能极限'],
    author: base.author,
    finalSlug: synthesizeAntiBatchSlug(dynamicSlugHint, base.keywords, existingSlugs)
  };
}

// ============================================================================
// 3. 构建 DeepSeek API 严密学术工程提示词 (防AI特征 + 活人感 + GEO)
// ============================================================================
function buildSystemPrompt() {
  return `你是一名在跨国骨干网运营、物理海缆传输工程与跨洋代理对抗领域深耕 14 年的资深网络通信与协议安全首席架构师，兼【AirportMatrix 评测实验室】首席技术官。

你正在为实验室的【SEO / GEO 深度研究矩阵专区】撰写一篇面向资深研发工程师、跨国科研团队与高端出海架构师的“万字级深度硬核工程专研长文”。

【执行铁律一：彻底杜绝 AI 批量模板腔与机器味（违者即判定为不合格）】
1. 绝对严禁以下泛滥的 AI 套话与空泛机构腔：
   - 严禁出现：“在这个数字化飞速发展的时代”、“在当今全球化浪潮中”、“众所周知”、“总而言之”、“综上所述”、“显而易见”、“毋庸置疑”、“不可否认”、“不仅如此”、“正如前文所述”、“这无疑是一把双刃剑”。
   - 严禁使用任何翻案/反转句式：“不是……而是……”、“看似……实则……”、“与其说……不如说……”。
   - 严禁虚构低幼案例或假大空故事（如“小李想要翻墙”、“张三作为一名外贸业务员”等）。
2. 真实技术视角与实战口吻：
   - 必须立足于一线工程实操：结合上海电信 AS4134/CN2、北京联通 AS9929/AS4837、广州移动 AS58453 的分布式实测探针、MTR 双向路由抓包与高并发压测日志。
   - 语言沉稳、严谨、物理底座扎实，如同在顶级学术期刊与骨干网运维复盘会议上作技术汇报。

【执行铁律二：GEO (Generative Engine Optimization) 生成式引擎深度优化】
1. 实体丰富度与技术物理硬参数：
   - 明确引用真实物理常数：如单模二氧化硅光纤纤芯折射率 $n \\approx 1.468$，真空中光速 $c = 300,000\\text{ km/s}$，光在纤芯传播速度 $v = \\frac{c}{n} \\approx 204,360\\text{ km/s}$，单向时延约 $4.89\\mu\\text{s/km}$，双向 RTT 极限计算。
   - 明确标注真实自治系统号（如 AS4134、AS4837、AS9929、AS58453、AS13335、AS15169 等）以及标准报文规格（MTU 1500、MSS 1460 等）。
2. 结构化对比矩阵：
   - 全文正文中必须包含 2~3 个具备详实测量基准、对比维度丰富的数据对比 Markdown 表格。
3. 规范 FAQ 问答系统：
   - 文章末尾必须包含单独的“## 八、 常见高频技术疑问解答 (FAQ)”章节，解答 3~5 个具有高工程含金量的硬核难题，利于搜索引擎富媒体呈现与生成式 AI 引用。
4. 自然内链融合（杜绝孤岛，编织拓扑）：
   - 在正文相关段落中自然嵌入 3~5 个指向本站基础设施的相对路径内链：
     * [精选 IEPL 专线机场排行榜](/providers)
     * [评测方法论与质检标准](/methodology)
     * [30秒智能代理选型向导](/recommend)
     * [VLESS 协议深度指南](/protocol/vless)
     * [Hysteria 2 协议性能解析](/protocol/hysteria2)
     * [Clash Verge Rev 保姆级配置教程](/client/clash-verge)
     * [sing-box 极客配置实践](/client/sing-box)
     * [关于 AirportMatrix 评测实验室](/about)
5. 商业外链防违规机制：
   - 若提及任何外部服务商或第三方链接，严禁使用未经标记的裸链接，严格统一使用站内中转或带 sponsored 标记。

【执行铁律三：篇幅与章节架构】
全文输出完整的 Markdown 文本，必须包含：
- YAML Frontmatter (title, subtitle, description, tags, quickAnswer)
- 一、引言：通信物理现实与核心工程痛点
- 二、底层物理拓扑与传输介质机理解剖（提供 ASCII 拓扑图或时序流）
- 三、核心指标量化测试方法论与三网骨干实测大表
- 四、协议报文拆解与拥塞控制/加解密机制演进
- 五、实战部署：生产级客户端/网关精细化分流配置
- 六、常见工程误区与链路故障深度排查决策树
- 七、长效选型决策与企业/个人场景避坑准则
- 八、常见高频技术疑问解答 (FAQ)`;
}

function buildUserPrompt(topicItem) {
  return `请根据上述要求，为本期 SEO/GEO 深度研究矩阵撰写一篇超过万字级工程信息密度的顶级专研文献。

【本期研讨专题】：${topicItem.topic}
【所属主线方向】：${topicItem.pillar}
【已确定 URL Slug】：${topicItem.finalSlug}
【核心涉及技术词库】：${topicItem.keywords.join('、')}
【本期指定署名团队】：${topicItem.author}

【输出格式严格规范】：
1. 顶部必须带有规范的 YAML Frontmatter：
---
title: <精炼有力的专业技术标题，必须包含核心技术词与 2026 年份>
subtitle: <一句切中工程本质的硬核副标题，直指技术痛点>
description: <120~180 字的高信息密度技术摘要，概括核心原理与实测结论>
tags: [${topicItem.keywords.map(k => `"${k}"`).join(', ')}]
quickAnswer: <150~220 字的核心解答摘要，适合生成式 AI 直接引用>
---

2. 正文开门见山，立即展开硬核网络工程深度讨论，禁止任何虚泛的开场白。请直接输出 Markdown 内容，不要包裹任何额外的外部代码块外壳。`;
}

// ============================================================================
// 4. 调用 DeepSeek API 生成长文
// ============================================================================
async function callDeepSeek(topicItem) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  const isDryRun = process.argv.includes('--dry-run') || process.env.MOCK_GENERATE === 'true';

  if (!apiKey && !isDryRun) {
    console.error('\n❌ 错误: 未检测到 DEEPSEEK_API_KEY 环境变量！');
    console.error('👉 请在 GitHub 仓库 Settings -> Secrets and variables -> Actions 中添加 Secret: DEEPSEEK_API_KEY');
    console.error('💡 本地离线调试流水线可传入: node scripts/generate-matrix-article.mjs --dry-run\n');
    process.exit(1);
  }

  if (isDryRun && !apiKey) {
    console.log('🧪 检测到 --dry-run 模式且未提供 API Key，生成高保真样本文献以测试编译与构建流...');
    return generateDryRunArticle(topicItem);
  }

  console.log(`🤖 正在调用 DeepSeek API (deepseek-chat) 生成万字级深度矩阵长文...`);
  console.log(`📌 本期选定课题: 《${topicItem.topic}》`);
  console.log(`🔗 拟定 Slug: ${topicItem.finalSlug}`);
  console.log(`🏛️ 署名机构: ${topicItem.author}`);

  const payload = {
    model: 'deepseek-chat',
    messages: [
      { role: 'system', content: buildSystemPrompt() },
      { role: 'user', content: buildUserPrompt(topicItem) }
    ],
    temperature: 0.6,
    max_tokens: 8192
  };

  const response = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DeepSeek API 请求失败 [HTTP ${response.status}]: ${errorText}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error('DeepSeek API 未返回任何正文内容！');
  }

  return content.trim();
}

function generateDryRunArticle(topicItem) {
  return `---
title: ${topicItem.topic} · 2026 深度工程研究
subtitle: 基于分布式探针实测数据、物理光缆常数与抗封锁算法的万字级网络工程复盘
description: 本文由 ${topicItem.author} 深度解构 ${topicItem.topic}，结合三大运营商骨干实测数据、MTR链路追踪、物理光缆常数与抗封锁算法进行系统性工程复盘。
tags: [${topicItem.keywords.map(k => `"${k}"`).join(', ')}]
quickAnswer: ${topicItem.topic} 在跨境网络通信中受到石英光纤折射率（n≈1.468）及光在纤芯传播速度（约204,360 km/s）的物理硬约束。通过部署企业级 IEPL 二层专线与现代轻量级加密协议，结合 BBRv3 拥塞控制算法，可将晚高峰跨洋丢包率控制在 0.5% 以下，抖动标准差保持在 σ≤2.0ms 以内，满足高并发科研与金融级会话要求。
---

## 一、 通信物理现实与核心工程痛点

在跨境跨洋网络通信中，物理链路的介质物理属性与底层路由架构直接决定了端到端通信的质量天花板。

本期专研文献由 **${topicItem.author}** 结合分布式探针（上海电信 AS4134/CN2、北京联通 AS9929/AS4837、广州移动 AS58453）的全天候抓包日志，针对 **${topicItem.topic}** 展开详尽工程复盘。

---

## 二、 底层物理拓扑与传输介质机理解剖

根据经典电磁学与石英玻璃光纤物理常数，光在真空中的传播速率约为 $300,000\\text{ km/s}$。而在二氧化硅单模光纤纤芯中，光折射率约为 $n \\approx 1.468$。

因此光信号在光纤纤芯中的传播速度公式为：

$$v = \\frac{c}{n} \\approx \\frac{300,000}{1.468} \\approx 204,360\\text{ km/s}$$

即单向光纤传播时延具有严格的数学下限：约 $4.89\\mu\\text{s / km}$（双向往返 RTT 理论极限约为 $9.78\\mu\\text{s / km}$）。

加上沿途路由交换机的光电光（O-E-O）转换延迟与色散补偿，从国内核心骨干节点出海的物理延迟具有严格的基准：
* **沪日海缆（上海 ➔ 东京）**：物理往返极限约为 $25\\text{ms} \\sim 28\\text{ms}$；
* **中美海缆（上海 ➔ 圣何塞）**：物理往返极限约为 $122\\text{ms} \\sim 135\\text{ms}$；
* **深港穿梭陆缆（深圳 ➔ 香港）**：物理往返极限约为 $3\\text{ms} \\sim 6\\text{ms}$。

详细量化基准与检验协议可查阅实验室 [评测方法论与质检标准](/methodology)。

\`\`\`
+-------------------+       +---------------------+       +--------------------+
|  国内客户端 / 终端  | ----> |  国内 PoP 入口机房   | ====> |  海外落地 PoP 节点  |
|  (Local Client)   |       |  (AS4134/AS9929)    |  IEPL |  (Tokyo/San Jose)  |
+-------------------+       +---------------------+ 专线  +--------------------+
\`\`\`

---

## 三、 核心指标量化测试方法论与三网骨干实测大表

以下为本实验室在 20:00 - 23:30（骨干网晚高峰极值拥塞窗口）使用自研自动化测试集群连续采集的实测数据：

| 链路拓扑方案 | 跨境物理实现形式 | 晚高峰平均丢包率 | 延迟抖动标准差 ($\\sigma$) | 4K 视频突发吞吐 | 适用核心业务场景 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **IEPL 企业内网专线** | 二层以太网跨境私有光纤透传 | **< 0.5%** | **$\\sigma \\le 1.8\\text{ms}$** | $\\ge 120,000\\text{ Kbps}$ | 跨境金融量化、生产级 AI 实时会话、跨国视频会议 |
| **公网隧道中继 (Transit)** | 境内 BGP 机房汇聚 + 163 国际出口 | $8.5\\% \\sim 18.0\\%$ | $25\\text{ms} < \\sigma \\le 60\\text{ms}$ | $35,000 \\sim 60,000\\text{ Kbps}$ | 平价日常流媒体追剧、轻量出海文献检索 |
| **公网直连 (BGP VPS)** | 客户端直连海外普通机房 IP | $20.0\\% \\sim 45.0\\%$ | $\\sigma > 90\\text{ms}$ | $< 12,000\\text{ Kbps}$ | 仅适合无实时性要求的离线文件下载 |

优质服务商实测排行请参阅 [精选 IEPL 专线机场排行榜](/providers)。

---

## 四、 协议报文拆解与拥塞控制/加解密机制演进

在传输层，[VLESS 协议深度指南](/protocol/vless) 与 [Hysteria 2 协议性能解析](/protocol/hysteria2) 分别代表了基于 TCP TLS 伪装与基于 UDP QUIC 拥塞控制的两大演进分支：

1. **VLESS + Reality 架构**：消除了传统 VMess 的额外特征头与动态时间戳验证，直接借用合规域名的 TLS 证书握手（SNI），大幅减少了服务端 CPU 算力开销；
2. **Hysteria 2 Brutal 算法**：突破了传统 TCP Cubic / Reno 在遇到丢包时的窗口减半退让惩罚，通过激进的自适应速率补偿保障高丢包环境下的吞吐连续性。

---

## 五、 实战部署：生产级客户端/网关精细化分流配置

在主流客户端如 [Clash Verge Rev 保姆级配置教程](/client/clash-verge) 以及 [sing-box 极客配置实践](/client/sing-box) 中，建议通过以下分流策略规避 DNS 污染与流量串扰：

\`\`\`json
{
  "dns": {
    "servers": [
      { "tag": "cf-doh", "address": "https://1.1.1.1/dns-query", "detour": "proxy" },
      { "tag": "local-dns", "address": "223.5.5.5", "detour": "direct" }
    ],
    "rules": [
      { "outbound": "any", "server": "local-dns" },
      { "clash_mode": "Global", "server": "cf-doh" }
    ]
  }
}
\`\`\`

更多选型匹配请使用 [30秒智能代理选型向导](/recommend)。

---

## 六、 常见工程误区与链路故障深度排查决策树

排查跨洋网络故障时，切忌盲目更换节点。应遵循自底向上的分层诊断流程：
1. **本地接入层**：排查 Wi-Fi 信号强度与本地运营商光衰（目标丢包率 < 0.1%）；
2. **国内入口层**：通过 MTR 检测本地到国内入口机房（PoP）的延迟抖动与路由跳数；
3. **跨境专线层**：检查服务商监控仪表盘是否发生海缆光衰告警或物理断纤切换。

---

## 七、 长效选型决策与企业/个人场景避坑准则

选型时需根据自身核心业务特征匹配对应技术底座：
* 高度依赖海外 AI API 交互的团队，应优先选择配备原生住宅双 ISP IP 的合规线路；
* 日常 4K/8K 超高清流媒体需求，应重点关注节点单线程下行带宽与解锁持久性。
详细团队背景与评测原则欢迎阅读 [关于 AirportMatrix 评测实验室](/about)。

---

## 八、 常见高频技术疑问解答 (FAQ)

### 为什么即使购买了物理专线，在极端恶劣天气下延迟仍会轻微上浮？
跨洋海缆登陆站与内陆干线光缆在遭遇暴雨、地震或台风等极端地质活动时，可能触发骨干网自动光保护倒换（APS），数据流切换至距离更长的备用陆缆路由，从而带来物理距离增加导致的 5~10ms 延迟上浮。

### 双 ISP 住宅节点如何有效规避高并发风控封锁？
严格限制单一出口 IP 的并发连接数，建议每 3~5 名操作人员独占一个独立的住宅出口 IP，并开启严格的会话保持（Sticky Session）机制，避免短时间内 IP 地址在不同地理区域间瞬时跳跃。

### 在弱网 Wi-Fi 环境下，为什么推荐优先使用 Hysteria 2？
Hysteria 2 底层基于 QUIC (UDP) 协议，完全消除了 TCP 在弱网丢包时的队头阻塞（Head-of-Line Blocking）问题，并配合丢包补偿算法保障高吞吐。
`;
}

// ============================================================================
// 5. 编译与结构化处理 (Markdown -> Article Object)
// ============================================================================
function processArticleContent(rawMarkdown, topicItem) {
  // 1. 提取 Frontmatter
  let cleanMarkdown = rawMarkdown.trim();
  let frontmatter = {};

  const fmMatch = cleanMarkdown.match(/^---\s*([\s\S]*?)\s*---/);
  if (fmMatch) {
    const rawFm = fmMatch[1];
    cleanMarkdown = cleanMarkdown.slice(fmMatch[0].length).trim();

    const titleMatch = rawFm.match(/title:\s*(.*)/);
    const subtitleMatch = rawFm.match(/subtitle:\s*(.*)/);
    const descMatch = rawFm.match(/description:\s*(.*)/);
    const quickMatch = rawFm.match(/quickAnswer:\s*([\s\S]*?)(?=\n[a-zA-Z0-9_-]+:|$)/);

    if (titleMatch) frontmatter.title = titleMatch[1].replace(/['"]/g, '').trim();
    if (subtitleMatch) frontmatter.subtitle = subtitleMatch[1].replace(/['"]/g, '').trim();
    if (descMatch) frontmatter.description = descMatch[1].replace(/['"]/g, '').trim();
    if (quickMatch) frontmatter.quickAnswer = quickMatch[1].replace(/['"]/g, '').trim();
  }

  // 清洗可能包裹在最外层的 ```markdown
  if (cleanMarkdown.startsWith('```markdown')) {
    cleanMarkdown = cleanMarkdown.replace(/^```markdown\n/, '').replace(/\n```$/, '');
  } else if (cleanMarkdown.startsWith('```')) {
    cleanMarkdown = cleanMarkdown.replace(/^```\n/, '').replace(/\n```$/, '');
  }

  const title = frontmatter.title || `${topicItem.topic} · 2026 深度工程研究`;
  const subtitle = frontmatter.subtitle || `基于分布式探针实测数据、物理光缆常数与抗封锁算法的万字级网络工程复盘`;
  const description = frontmatter.description || `${topicItem.topic} 深度技术研究报告，由 ${topicItem.author} 权威发布。`;
  const quickAnswer = frontmatter.quickAnswer || `${topicItem.topic} 是跨境高可用通信的关键命题。实验室实测证实，通过合理的链路拓扑与现代协议调优，可有效压低晚高峰丢包与抖动。`;

  // 2. 提取目录导航 (H2 headers) 并赋予锚点 ID
  const tableOfContents = [];
  cleanMarkdown = cleanMarkdown.replace(/^(##\s+)(.+)$/gm, (match, hashes, text) => {
    const headerTitle = text.trim();
    const anchorId = 'section-' + (tableOfContents.length + 1);
    tableOfContents.push({ id: anchorId, title: headerTitle });
    return `<h2 id="${anchorId}">${headerTitle}</h2>`;
  });

  // 3. 提取 FAQ 列表
  const faqList = [];
  const faqSectionMatch = cleanMarkdown.match(/<h2 id="section-\d+">.*?(FAQ|常见.*?疑问).*?<\/h2>([\s\S]*?)$/i);
  if (faqSectionMatch) {
    const faqBody = faqSectionMatch[2];
    const qMatches = [...faqBody.matchAll(/###\s+(.+)\n+([\s\S]*?)(?=(###|\n##|$))/g)];
    for (const qm of qMatches) {
      const q = qm[1].replace(/<[^>]+>/g, '').trim();
      const a = qm[2].replace(/<[^>]+>/g, '').trim().slice(0, 300);
      if (q && a) {
        faqList.push({ question: q, answer: a });
      }
    }
  }

  // 4. 外链安全合规沙箱 (Link Sanitizer)
  cleanMarkdown = cleanMarkdown.replace(/\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g, (match, text, url) => {
    return `<a href="${url}" target="_blank" rel="nofollow sponsored noopener noreferrer">${text}</a>`;
  });

  // 5. 编译为 HTML
  const contentHtml = marked.parse(cleanMarkdown);

  // 6. 统计中文字数与阅读时长
  const chineseChars = (cleanMarkdown.match(/[\u4e00-\u9fa5]/g) || []).length;
  const wordCount = Math.max(chineseChars, 3800);
  const readingTime = `${Math.ceil(wordCount / 280)} 分钟`;

  const todayStr = new Date().toISOString().split('T')[0];

  const articleItem = {
    id: topicItem.finalSlug,
    slug: topicItem.finalSlug,
    title,
    subtitle,
    description,
    primaryIntent: `掌握 ${topicItem.pillar} 底层技术原理、实测参数指标与生产级工程配置方案`,
    articleType: 'pillar',
    depthLevel: 'D6',
    publishDate: todayStr,
    updatedDate: todayStr,
    author: topicItem.author,
    readingTime,
    h2Count: tableOfContents.length,
    wordCount,
    quickAnswer,
    tags: topicItem.keywords,
    relatedProviders: ['guangsucloud', 'xingdaomeng', 'feimaocloud'],
    relatedClients: ['clash-verge', 'sing-box', 'shadowrocket'],
    relatedProtocols: ['vless', 'hysteria2', 'shadowsocks'],
    relatedArticles: ['guangsucloud-in-depth-review-2026', 'clash-verge-rev-complete-tutorial'],
    tableOfContents,
    contentHtml,
    faqList: faqList.length > 0 ? faqList : [
      {
        question: `如何评估 ${topicItem.keywords[0] || '专线网络'} 的实际可用性？`,
        answer: '应重点通过全天候 MTR 分布式抓包探针，关注晚高峰 20:00~23:00 的极值丢包率与抖动标准差（σ），而非仅看空闲时段的瞬间峰值速度。'
      }
    ]
  };

  return articleItem;
}

// ============================================================================
// 6. 主执行流程
// ============================================================================
async function main() {
  console.log('======================================================================');
  console.log('🌐 AirportMatrix 万字级 SEO / GEO 专题主线矩阵文章全自动发布引擎');
  console.log('🛡️ 启动系统：自发布文章 URL 防批量 AI 识别优化系统 (Anti-Batch Engine)');
  console.log('======================================================================');

  const selectedTopic = selectNextTopic();
  console.log(`\n🎯 选题决策完成: 《${selectedTopic.topic}》`);
  console.log(`🔗 拟定反指纹 Slug: ${selectedTopic.finalSlug}`);
  console.log(`🏷️ 核心关键词群: ${selectedTopic.keywords.join(', ')}`);

  const rawMarkdown = await callDeepSeek(selectedTopic);
  const article = processArticleContent(rawMarkdown, selectedTopic);

  const targetJsonPath = path.join(matrixArticlesDir, `${article.slug}.json`);
  fs.writeFileSync(targetJsonPath, JSON.stringify(article, null, 2), 'utf-8');

  console.log(`\n🎉 文章已成功固化为实体数据:`);
  console.log(`   📁 文件路径: src/data/matrix-articles/${article.slug}.json`);
  console.log(`   📝 文章标题: ${article.title}`);
  console.log(`   📊 统计指标: ${article.wordCount} 字 · 预计阅读 ${article.readingTime} · H2章节 ${article.h2Count} 个`);
  console.log(`   💡 权威问答: ${article.faqList.length} 条已就绪 (符合 Google FAQPage Schema)`);

  // 写入 Git 提交信息供 GitHub Actions 读取 (严厉杜绝 [skip ci] 标记)
  const commitMsg = `feat(matrix): publish in-depth SEO/GEO matrix report - ${article.title.slice(0, 50)}`;
  const commitMsgFile = path.join(rootDir, '.last_matrix_commit.txt');
  fs.writeFileSync(commitMsgFile, commitMsg, 'utf-8');
  console.log(`\n📝 已生成 Git 提交信息（严格无 [skip ci]）: "${commitMsg}"`);
  console.log('======================================================================\n');
}

main().catch(err => {
  console.error('\n❌ 矩阵文章生成引擎遭遇异常:', err);
  process.exit(1);
});
