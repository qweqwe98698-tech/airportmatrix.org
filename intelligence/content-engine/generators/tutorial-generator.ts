/**
 * Blueprint 2: Client Tutorial Content Generator
 * Tailored for: "Clash Verge Rev 新手配置 / 小火箭订阅导入 / sing-box 极客指南"
 */

import type { GeneratedArticle } from './faq-generator';

export function generateTutorialContent(params: {
  clientName: string;
  slug: string;
  developer: string;
  version: string;
  downloadUrl: string;
}): GeneratedArticle {
  return {
    id: `art_tut_${params.slug}`,
    slug: `${params.slug}-complete-tutorial`,
    title: `${params.clientName} 2026 完整新手配置指南（从安装到 TUN 虚拟网卡实操）`,
    metaTitle: `${params.clientName} 新手教程与配置指南 (2026) - AirportMatrix`,
    metaDescription: `手把手教您如何安装 ${params.clientName}、导入机场订阅、开启系统代理及配置 TUN 虚拟网卡实现无缝全局分流。`,
    quickAnswer: `${params.clientName} 核心上手只需 4 步：① 下载安装 ② 粘贴机场一键订阅 ③ 切换规则模式 ④ 开启 TUN 虚拟网卡接管系统流量。`,
    category: '客户端教程',
    readTime: '8 分钟',
    views: 6420,
    featured: true,
    tableOfContents: [
      { id: 'install', title: '步骤一：官方正版客户端下载与安装' },
      { id: 'import-sub', title: '步骤二：获取机场订阅并一键导入' },
      { id: 'rules', title: '步骤三：节点选择与智能分流规则设置' },
      { id: 'tun-mode', title: '步骤四：开启 TUN 虚拟网卡接管全局应用' },
      { id: 'faq', title: '常见问题与配置避坑 FAQ' },
    ],
    content: `
## 步骤一：官方正版客户端下载与安装 {#install}

请务必通过官方开源仓库或官方发布渠道下载，严禁使用任何第三方破解或加料版本：
- **当前最新版本**：\`${params.version}\`
- **官方下载渠道**：[点击前往官方 GitHub Releases](${params.downloadUrl})

---

## 步骤二：获取机场订阅并一键导入 {#import-sub}

1. 登录您所购买的优质机场后台（如 **光速云**、**星岛梦**）；
2. 找到【一键导入订阅】按钮，选择【导入到 ${params.clientName}】；
3. 或复制 Universal 订阅链接，在客户端【订阅管理】中点击新建并粘贴 URL，点击【保存并更新】。

---

## 步骤三：节点选择与智能分流规则设置 {#rules}

在【代理 (Proxies)】页面中，建议将分流模式保持为 **Rule (规则模式)**：
- **国内网站 (Direct)**：百度、淘宝、微信等流量直连，不消耗机场流量；
- **海外服务 (Proxy)**：Google、GitHub、Netflix 自动走高速专线节点；
- **AI 专线 (OpenAI/Claude)**：锁定选择香港/美西原生 IP 节点。

---

## 步骤四：开启 TUN 虚拟网卡接管全局应用 {#tun-mode}

对于不遵从系统代理的终端命令行 (Git/Docker) 或外服联机游戏，开启 TUN 模式即可实现底层物理网卡级接管：

\`\`\`yaml
tun:
  enable: true
  stack: mixed
  auto-route: true
  auto-detect-interface: true
  dns-hijack:
    - any:53
\`\`\`
`,
    faqList: [
      {
        question: '导入订阅后提示 Network Error 或无法下载节点？',
        answer: '请检查电脑系统时间是否准确同步，或尝试开启代理后再更新订阅（初次拉取节点可能受到本地 DNS 污染影响）。',
      },
      {
        question: 'TUN 模式开启后电脑网络卡死或网页打不开？',
        answer: '请以管理员权限运行客户端，并在设置中重新安装 Service Mode（服务模式）虚拟网卡驱动。',
      },
    ],
    relatedEntities: [params.slug, 'vless', 'guangsucloud', 'iepl'],
  };
}
