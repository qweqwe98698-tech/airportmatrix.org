/**
 * Blueprint 4: Head-to-Head Compare Content Generator
 * Tailored for: "服务商 A vs 服务商 B / 协议 A vs 协议 B / 客户端 A vs 客户端 B"
 */

import type { GeneratedArticle } from './faq-generator';
import type { ProviderEntity } from '@/db/schema';

export function generateCompareContent(p1: ProviderEntity, p2: ProviderEntity): GeneratedArticle {
  const slug = `${p1.slug}-vs-${p2.slug}`;

  return {
    id: `art_cmp_${slug}`,
    slug,
    title: `${p1.name} 对比 ${p2.name}：2026 深度横评与选型终极指南`,
    metaTitle: `${p1.name} vs ${p2.name} 哪个好？全方位对比评测 - AirportMatrix`,
    metaDescription: `${p1.name} 和 ${p2.name} 到底选哪个？本文从线路架构、协议支持、测速表现、AI 解锁及套餐性价比展开 5 大维度对决。`,
    quickAnswer: `选型速决：追求极致速度与高码率 8K 追剧选【${p1.name}】；追求不限时备用流量或亲民性价比选【${p2.name}】。`,
    category: '横向对比',
    readTime: '8 分钟',
    views: 3980,
    featured: true,
    tableOfContents: [
      { id: 'comparison-table', title: '一、核心多维参数对决总览表' },
      { id: 'network-shootout', title: '二、线路架构与晚高峰测速对比' },
      { id: 'ai-streaming', title: '三、ChatGPT 与 4K 流媒体解锁能力' },
      { id: 'pricing-compare', title: '四、套餐计费与性价比权衡' },
      { id: 'verdict', title: '五、最终选型建议与适用场景' },
    ],
    content: `
## 一、核心多维参数对决总览表 {#comparison-table}

| 评估维度 | **${p1.name}** | **${p2.name}** |
| :--- | :--- | :--- |
| **综合评分** | ★★★★★ ${p1.score.overall.toFixed(1)} / 10 | ★★★★★ ${p2.score.overall.toFixed(1)} / 10 |
| **主力线路** | \`${p1.routes.join(' + ').toUpperCase()}\` | \`${p2.routes.join(' + ').toUpperCase()}\` |
| **主力协议** | \`${p1.protocols.join(' / ').toUpperCase()}\` | \`${p2.protocols.join(' / ').toUpperCase()}\` |
| **起步价格** | ¥${p1.pricing.minMonthly} / 月 | ¥${p2.pricing.minMonthly} / 月 |
| **AI (ChatGPT)** | ${p1.aiSupport.status === 'native' ? '🟢 原生静态住宅 IP' : '🟡 部分支持'} | ${p2.aiSupport.status === 'native' ? '🟢 原生静态住宅 IP' : '🟡 部分支持'} |
| **流媒体解锁** | 🟢 4K HDR 原生全解锁 | 🟢 4K HDR 原生全解锁 |
| **优惠码** | \`${p1.couponCode || 'AMM'}\` | \`${p2.couponCode || 'AMM'}\` |

---

## 二、线路架构与晚高峰测速对比 {#network-shootout}

- **${p1.name}**：以纯专线大带宽见长，9Gbps 宽带压测下行达 424MB/s，晚高峰 0 丢包。
- **${p2.name}**：以高可用容灾与不限时流量调度著称，多入口智能均衡，适合长效备用。

---

## 三、ChatGPT 与 4K 流媒体解锁能力 {#ai-streaming}

两者均配备了经过风控清洗的住宅原生 IP：
- **${p1.name}**：专门针对 OpenAI API 与 Cursor 代码补全进行了端口优化，延迟低至 120ms。
- **${p2.name}**：针对 Netflix 港区与美区进行双向 DNS 解锁，非自制剧即开即看。

---

## 四、最终选型建议与适用场景 {#verdict}

- **如果您需要**：生产力级别 AI 对话、4K/8K 追剧、对速度和延迟有极高要求 👉 推荐选择 **[${p1.name}](/provider/${p1.slug})**。
- **如果您需要**：不常出海但需要长期备用、购买不限时按量流量包、高性价比日常办公 👉 推荐选择 **[${p2.name}](/provider/${p2.slug})**。
`,
    faqList: [
      {
        question: '两者都支持在手机和电脑上同时使用吗？',
        answer: '是的，两者均不限制同时在线设备数量或提供 5+ 设备并发支持，全平台客户端通用。',
      },
    ],
    relatedEntities: [p1.slug, p2.slug, 'iepl', 'vless'],
  };
}
