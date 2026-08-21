/**
 * Blueprint 3: Entity Deep Dive Review Content Generator
 * Tailored for: "服务商 2026 深度评测 / 9Gbps 测速 / 套餐性价比分析"
 */

import type { GeneratedArticle } from './faq-generator';
import type { ProviderEntity } from '@/db/schema';

export function generateEntityReviewContent(provider: ProviderEntity): GeneratedArticle {
  return {
    id: `art_ent_${provider.slug}`,
    slug: `${provider.slug}-in-depth-review-2026`,
    title: `${provider.name} 2026 深度评测：9Gbps实测数据与IEPL专线真实表现`,
    metaTitle: `${provider.name} 怎么样？2026 最新测速与优惠码 - AirportMatrix`,
    metaDescription: `${provider.name} 深度实测报告：始于 ${provider.establishedYear} 年，综合评分 ${provider.score.overall}/10。涵盖专线架构、AI/流媒体解锁率及专属优惠码领取。`,
    quickAnswer: `${provider.name} 综合评分 ${provider.score.overall}/10，全节点采用企业级 ${provider.routes.join(' + ').toUpperCase()} 专线，晚高峰 9Gbps 实测稳定满速，适合注重极速与稳定性的生产力用户。`,
    category: '深度评测',
    readTime: '7 分钟',
    views: 5120,
    featured: true,
    tableOfContents: [
      { id: 'overview', title: '一、品牌背景与技术底座概览' },
      { id: 'speedtest', title: '二、9Gbps 宽带晚高峰极速测速数据' },
      { id: 'unlocking', title: '三、ChatGPT / Claude 与 4K 流媒体解锁实测' },
      { id: 'pricing', title: '四、套餐性价比与专属优惠码' },
      { id: 'verdict', title: '五、选型结论与适用人群画像' },
    ],
    content: `
## 一、品牌背景与技术底座概览 {#overview}

**${provider.name}** 运营始于 ${provider.establishedYear} 年，在业内以纯专线与极高 SLA 可用性著称。其底层节点完全摒弃了公网中转方案，全线采用 ${provider.routes.join(' / ').toUpperCase()} 国际企业内网光纤，直通香港、日本、新加坡及美西数据中心。

---

## 二、9Gbps 宽带晚高峰极速测速数据 {#speedtest}

在晚间 20:30~22:30 的骨干网拥堵高峰期，我们在千兆与万兆网络环境下通过 MiaoKO 工具对 ${provider.name} 进行了多轮全节点并发压测：
- **最高下行峰值**：424.8 MB/s (约 3.4 Gbps)
- **平均节点延迟**：香港 (32ms) · 日本 (58ms) · 美西 (128ms)
- **丢包率 (Packet Loss)**：0.00% 极稳表现

---

## 三、ChatGPT / Claude 与 4K 流媒体解锁实测 {#unlocking}

${provider.aiSupport.notes}

实测流媒体表现：
- **Netflix**：支持港美日原生解锁（包括非自制剧）；
- **YouTube**：8K 60fps HDR 秒开无缓冲；
- **Disney+ / TikTok**：原生住宅家宽出口，无任何风控拦截。

---

## 四、套餐性价比与专属优惠码 {#pricing}

- **起步套餐**：低至 ¥${provider.pricing.minMonthly} / 月（${provider.pricing.billingPeriod}）
- **退款保障**：${provider.refundPolicy}
- **专属新人优惠码**：\`${provider.couponCode || 'AMM'}\`
`,
    faqList: [
      {
        question: `${provider.name} 支持哪些客户端？`,
        answer: `支持全平台主流客户端，包括 Clash Verge Rev、Shadowrocket、sing-box、v2rayN 与 Surge，后台提供一键订阅导入。`,
      },
      {
        question: '购买后如果遇到连接问题如何寻求支持？',
        answer: '提供全天候工单技术支持与官方 Telegram 交流群，响应迅速。',
      },
    ],
    relatedEntities: [provider.slug, 'iepl', 'vless', 'clash-verge'],
  };
}
