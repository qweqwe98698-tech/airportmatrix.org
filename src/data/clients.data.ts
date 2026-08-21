export interface ClientStep {
  stepNumber: number;
  title: string;
  badge: string;
  desc: string;
  uiHighlights: string[];
  mockupSnippet?: string;
}

export interface ClientTroubleshooting {
  issue: string;
  cause: string;
  solution: string;
}

export interface Client {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'desktop' | 'mobile' | 'cross-platform';
  platforms: Array<'Windows' | 'macOS' | 'iOS' | 'Android' | 'Linux'>;
  coreEngine: string;
  configFormats: string[];
  protocols: string[];
  githubUrl: string;
  downloadUrl: string;
  isPopular: boolean;
  isRecommended: boolean;
  pros: string[];
  cons: string[];
  description: string;
  tutorialSlug: string;
  steps: ClientStep[];
  troubleshooting: ClientTroubleshooting[];
  recommendedConfigSnippet?: string;
}

export const clientsData: Client[] = [
  {
    id: 'clash-verge',
    slug: 'clash-verge',
    name: 'Clash Verge Rev',
    tagline: '现代跨平台主力客户端，支持 Clash.Meta (Mihomo) 核心与 TUN 虚拟网卡接管',
    category: 'cross-platform',
    platforms: ['Windows', 'macOS', 'Linux'],
    coreEngine: 'Mihomo (Clash.Meta)',
    configFormats: ['Clash YAML', '一键订阅链接'],
    protocols: ['VLESS', 'Hysteria2', 'Trojan', 'Shadowsocks', 'TUIC'],
    githubUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
    downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
    isPopular: true,
    isRecommended: true,
    pros: [
      '界面基于 Tauri + React 现代化重构，流畅且原生支持深色模式',
      '搭载 Mihomo 最新内核，完美支持 VLESS (Reality)、Hysteria2、TUIC 全协议',
      '一键启用 TUN 虚拟网卡模式，全面接管 Telegram、Steam、命令行与游戏流量',
      '活跃开源社区维护，安全透明无后门',
    ],
    cons: [
      '首次配置 TUN 模式需要 Windows 管理员或 macOS Root 提权授权',
    ],
    description: 'Clash Verge Rev 是当前桌面端最推荐的开源代理客户端。在原 Clash for Windows 停更后，Verge Rev 凭借现代化的 UI 与强大的 Mihomo 内核迅速成为全平台标杆，支持规则分流、节点测速、链式代理及脚本扩展。',
    tutorialSlug: 'clash-verge-rev-complete-tutorial',
    steps: [
      {
        stepNumber: 1,
        title: '下载与安装客户端',
        badge: 'Step 1 · 官方安全源',
        desc: '前往 GitHub 官方 Releases 页面，Windows 用户下载 `.msi` 或 x64 安装包；macOS 用户根据 CPU 架构下载 `aarch64` (Apple Silicon M系列) 或 `x64` (Intel) 的 `.dmg` 安装包并拖入应用程序。',
        uiHighlights: [
          'Windows: 推荐安装版本，自动注册 TUN 网卡驱动服务',
          'macOS: 首次打开若提示“未受信任的开发者”，请在【系统设置 - 隐私与安全性】中点击【仍要打开】',
        ],
      },
      {
        stepNumber: 2,
        title: '导入机场订阅链接',
        badge: 'Step 2 · 订阅同步',
        desc: '登录您的机场用户中心（如光速云、星岛梦、U1S1），复制【Clash 订阅链接】。在 Clash Verge Rev 左侧导航栏点击【订阅 (Profiles)】，在顶部输入框粘贴链接并点击【导入 (Import)】。',
        uiHighlights: [
          '右键点击已导入的订阅卡片，可设置【自动更新间隔（建议设为 1440 分钟 / 24小时）】',
          '选中该订阅卡片，激活为当前生效配置（边框变为高亮青色）',
        ],
        mockupSnippet: 'Profiles > Paste URL > Import > Right click to enable Auto-Update',
      },
      {
        stepNumber: 3,
        title: '开启 TUN 模式与系统代理',
        badge: 'Step 3 · 网卡级接管',
        desc: '在左侧点击【设置 (Settings)】，找到【TUN 模式 (TUN Mode)】开关并开启（首次开启系统会弹出授权确认）。开启后，电脑内所有非代理感知的软件（如终端 Git、Epic Games、WSL2、Docker）都将自动通过专线分流出海。',
        uiHighlights: [
          'TUN 堆栈推荐选择【Mixed】或【gVisor】',
          '同时确保【系统代理 (System Proxy)】保持开启状态',
          '可在设置中将【内核模式】切换为【Clash.Meta (Mihomo)】以获得最佳协议兼容性',
        ],
      },
      {
        stepNumber: 4,
        title: '选择代理节点与分流策略',
        badge: 'Step 4 · 智能分流',
        desc: '点击左侧【代理 (Proxies)】页面，将代理模式切换为【规则 (Rule)】。展开【🚀 节点选择】或【🤖 OpenAI】策略组，点击右下角闪电测速图标刷新节点延迟，选择延迟低于 50ms 的专线节点即可畅享极速网络。',
        uiHighlights: [
          '规则模式下：国内流量（百度、微信、网易云等）自动直连，不消耗机场流量',
          'OpenAI / ChatGPT 专属策略组建议固定绑定香港/新加坡/美西原生节点，防止 IP 频繁切换触发风控',
        ],
      },
    ],
    troubleshooting: [
      {
        issue: '开启 TUN 模式提示“Service Not Installed”或无法创建虚拟网卡',
        cause: '系统缺少管理员提权或 TUN 核心服务未注册成功。',
        solution: '在【设置】页面找到【服务模式 (Service Mode)】，点击旁边的【安装 (Install)】，授权管理员权限后重启客户端即可。',
      },
      {
        issue: '导入订阅时提示“Connect Failed”或网络超时',
        cause: '本地网络无法直接访问订阅下发域名，或机场订阅链接复制不完整。',
        solution: '检查是否漏复制了 token 参数；或使用手机热点尝试首次导入；也可在导入时开启已有代理进行中转拉取。',
      },
      {
        issue: '浏览器能翻墙，但命令行 Git / Docker / 终端无法连接',
        cause: '传统系统代理仅接管 HTTP 协议，终端命令默认走系统底层直连。',
        solution: '直接开启 Clash Verge Rev 的【TUN 模式】，全局网卡层自动捕获所有 TCP/UDP 流量。',
      },
    ],
    recommendedConfigSnippet: `dns:
  enable: true
  listen: :1053
  ipv6: false
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  nameserver:
    - 223.5.5.5
    - 119.29.29.29
  fallback:
    - https://1.1.1.1/dns-query
    - https://8.8.8.8/dns-query

tun:
  enable: true
  stack: mixed
  dns-hijack:
    - any:53
    - tcp://any:53
  auto-route: true
  auto-detect-interface: true`,
  },
  {
    id: 'shadowrocket',
    slug: 'shadowrocket',
    name: 'Shadowrocket (小火箭)',
    tagline: 'iOS / iPadOS 经典老牌神级规则代理工具 · 极低功耗与高可用性',
    category: 'mobile',
    platforms: ['iOS'],
    coreEngine: 'Shadowrocket Core',
    configFormats: ['URL 订阅', '节点直连', '二维码扫描'],
    protocols: ['Shadowsocks', 'VLESS', 'Hysteria2', 'Trojan', 'VMess', 'TUIC'],
    githubUrl: 'https://github.com/Shadowrocket-iOS',
    downloadUrl: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
    isPopular: true,
    isRecommended: true,
    pros: [
      'iOS 平台生态绝对霸主，极低耗电，全天候后台无缝运行',
      '支持几乎所有现代代理协议（VLESS Reality / Hy2 / TUIC / SS）',
      '支持一键扫码导入、节点批量测速、自动按延迟排序与定时更新订阅',
      '买断制应用，一次付费（美区 App Store $2.99）全家桶设备共享',
    ],
    cons: [
      '需要登录非中国大陆地区 Apple ID 方可在 App Store 下载安装',
    ],
    description: 'Shadowrocket 俗称“小火箭”，是苹果 iOS 生态中最具性价比和流行度的网络调试与规则分流工具。无论是入门新手还是资深出海用户，都是 iPhone / iPad 上的必备装机神器。',
    tutorialSlug: 'shadowrocket-ios-setup-guide',
    steps: [
      {
        stepNumber: 1,
        title: '获取美区 Apple ID 并下载小火箭',
        badge: 'Step 1 · 官方正版获取',
        desc: '打开 iPhone【App Store】，点击右上角头像退出当前国区账号，登录非大陆 Apple ID（如美区、日区、港区），在 App Store 搜索【Shadowrocket】（图标为白色背景的小火箭），完成购买并下载。',
        uiHighlights: [
          '注意辨别正版：开发者为 Shadowlaunch Technology Group LLC，售价 $2.99',
          '请勿在【系统设置 - iCloud】中登录外区账号，仅需在【App Store】中登录即可保障数据安全',
        ],
      },
      {
        stepNumber: 2,
        title: '添加机场节点订阅',
        badge: 'Step 2 · 订阅同步',
        desc: '在手机浏览器中打开您的机场网站（如光速云、星岛梦、U1S1），找到【一键导入 Shadowrocket】或复制通用订阅链接。打开小火箭，点击右上角【+】号，类型选择【Subscribe (订阅)】，在 URL 处粘贴链接并点击右上角【完成】。',
        uiHighlights: [
          '小火箭会自动解析并加载所有可用节点列表（香港、日本、美国、新加坡等）',
          '在首页下拉刷新即可即时同步最新节点',
        ],
      },
      {
        stepNumber: 3,
        title: '设置全局路由模式为【配置】',
        badge: 'Step 3 · 智能分流',
        desc: '在小火箭首页底部找到【全局路由】，将其从【直连】修改为【配置 (Config)】。在此模式下，小火箭将根据内置规则自动实现：国内网站直连、海外网站走代理、广告请求自动拦截。',
        uiHighlights: [
          '点击底部【配置】标签，可添加 ACL4SSR 或 Lazy-Rule 进阶增强分流规则',
        ],
      },
      {
        stepNumber: 4,
        title: '开启连接与 VPN 授权',
        badge: 'Step 4 · 连接出海',
        desc: '点击【连通性测试 (Ping)】选择一个低延迟节点（建议选择香港或日本专线），拨动首页顶部的【连接开关】。首次连接系统会弹出【“Shadowrocket”想添加 VPN 配置】，点击【允许】并验证锁屏密码或 Face ID 即可成功连接。',
        uiHighlights: [
          '状态栏出现【VPN】小图标，即代表所有网络流量已受小火箭安全接管',
        ],
      },
    ],
    troubleshooting: [
      {
        issue: '节点测速全部超时，显示红色 Timeout',
        cause: '订阅链接已过期、机场欠费或本地 DNS 受到临时污染。',
        solution: '前往机场后台确认账户套餐状态；在小火箭【设置】中开启【TCP 握手并发测速】并更换到 5G 蜂窝网络重试。',
      },
      {
        issue: '连接后无法打开网页，提示“无法连接到代理服务器”',
        cause: '全局路由误选成了“全局代理”且选中的节点当前不可用。',
        solution: '将【全局路由】切换为【配置】，并重新测试节点连通性，选择一个延迟显示绿色的节点。',
      },
    ],
  },
  {
    id: 'sing-box',
    slug: 'sing-box',
    name: 'sing-box',
    tagline: '下一代极速通用代理内核与跨平台客户端 · 超低资源占用',
    category: 'cross-platform',
    platforms: ['Windows', 'macOS', 'iOS', 'Android', 'Linux'],
    coreEngine: 'sing-box core (Go)',
    configFormats: ['JSON', 'sing-box 订阅链接'],
    protocols: ['VLESS', 'Hysteria2', 'Shadowsocks', 'Trojan', 'TUIC', 'WireGuard'],
    githubUrl: 'https://github.com/SagerNet/sing-box',
    downloadUrl: 'https://github.com/SagerNet/sing-box/releases',
    isPopular: true,
    isRecommended: true,
    pros: [
      '纯 Go 语言重构，内存占用与 CPU 消耗极低，老旧设备依然丝滑',
      '原生全协议支持（VLESS Reality、Hysteria2、TUIC、WireGuard 无缝集成）',
      '真正的全平台大一统（支持 Android、iOS、macOS、Windows 与 OpenWrt 路由器）',
      '强大的 Rule-set 路由机制，分流粒度精确到进程与域名后缀',
    ],
    cons: [
      'JSON 配置文件结构对初学者有一定语法门槛',
    ],
    description: 'sing-box 被誉为“下一代通用代理平台”，以极简模块化架构、超低内存开销和对前沿协议的零时差支持迅速成为极客与开发者的首选内核。',
    tutorialSlug: 'sing-box-universal-guide',
    steps: [
      {
        stepNumber: 1,
        title: '下载官方客户端应用',
        badge: 'Step 1 · 全平台获取',
        desc: 'Windows/macOS 用户前往 GitHub Releases 下载带有图形界面的 `sing-box-gui` 或直接安装 SagerNet 官方构建；iOS 用户可在外区 App Store 免费下载 `sing-box` 官方客户端。',
        uiHighlights: ['原生跨平台统一核心，所有设备共享相同的 JSON 配置规则'],
      },
      {
        stepNumber: 2,
        title: '导入或生成 sing-box 配置',
        badge: 'Step 2 · 订阅转换',
        desc: '复制机场提供的 sing-box 专用订阅链接，或使用本站【极客工具 - 在线订阅转换器】将通用订阅链接转换为标准 sing-box JSON 格式并一键导入。',
        uiHighlights: ['在 Profiles 页面点击 New Profile，类型选择 Remote，粘贴订阅 URL 并保存'],
      },
      {
        stepNumber: 3,
        title: '启用 TUN 虚拟网卡接管',
        badge: 'Step 3 · 启用内核',
        desc: '在客户端设置中勾选【TUN Mode (虚拟网卡)】，sing-box 将自动创建系统级网络适配器，接管全部 TCP 与 UDP 数据流。',
        uiHighlights: ['内核默认开启 System DNS 劫持，彻底杜绝 DNS 泄漏'],
      },
      {
        stepNumber: 4,
        title: '启动服务并选择节点',
        badge: 'Step 4 · 启动运行',
        desc: '点击【Start】启动内核，在 Dashboard 页面选择您偏好的低延迟专线节点，即可开始高速出海。',
        uiHighlights: ['Dashboard 实时展示当前上行/下行速率、连接列表与内存占用'],
      },
    ],
    troubleshooting: [
      {
        issue: '启动时报错“invalid JSON syntax”或配置解析失败',
        cause: 'JSON 配置文件存在中文标点、缺少逗号或字段类型不匹配。',
        solution: '使用在线 JSON 格式化工具校验语法，或使用本站提供的转换工具重新生成标准模板。',
      },
    ],
  },
  {
    id: 'v2rayn',
    slug: 'v2rayn',
    name: 'v2rayN',
    tagline: 'Windows 老牌稳定开源代理图形客户端 · 深度技术调试神器',
    category: 'desktop',
    platforms: ['Windows'],
    coreEngine: 'Xray / sing-box / V2Ray',
    configFormats: ['订阅链接', '节点分享链接 (vmess/vless/ss)', '自定义配置'],
    protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Hysteria2'],
    githubUrl: 'https://github.com/2dust/v2rayN',
    downloadUrl: 'https://github.com/2dust/v2rayN/releases',
    isPopular: true,
    isRecommended: false,
    pros: [
      'Windows 上资历最深、生态最成熟的开源代理客户端之一',
      '支持自由切换 Xray-core、sing-box-core，灵活度极高',
      '强大的节点批量真连接延迟测试与下载速度实测功能',
    ],
    cons: [
      'UI 风格偏传统极客向，对零基础小白而言操作项较多',
    ],
    description: 'v2rayN 是 Windows 平台上资历最深厚的开源代理工具之一，支持多核心自由切换与极致的节点性能调优，深受网络工程师与技术人员信赖。',
    tutorialSlug: 'v2rayn-windows-guide',
    steps: [
      {
        stepNumber: 1,
        title: '下载并解压 v2rayN-With-Core',
        badge: 'Step 1 · 完整包下载',
        desc: '前往 GitHub Releases 页面，下载带有 `v2rayN-With-Core.zip` 的整合压缩包，解压至非系统盘纯英文路径（例如 `D:\\v2rayN\\`）。',
        uiHighlights: ['必须下载 With-Core 版本，自带 Xray 与 sing-box 运行核心'],
      },
      {
        stepNumber: 2,
        title: '添加订阅并执行更新',
        badge: 'Step 2 · 订阅拉取',
        desc: '双击运行 `v2rayN.exe`，点击顶部菜单【订阅分组 - 订阅分组设置】，点击【添加】，在【可选地址 (url)】中粘贴您的机场订阅链接并保存。随后点击顶部【订阅分组 - 更新全部订阅 (不通过代理)】。',
        uiHighlights: ['更新完成后，列表中将呈现所有可用节点与协议类型'],
      },
      {
        stepNumber: 3,
        title: '设置系统代理与路由规则',
        badge: 'Step 3 · 路由规则',
        desc: '在底部状态栏将【系统代理】切换为【自动配置系统代理】（图标变为红色即代表已生效），将【路由】设置为【绕过大陆 (Whitelist)】。',
        uiHighlights: ['绕过大陆规则可保障访问国内网站走本地直连，不消耗机场流量'],
      },
      {
        stepNumber: 4,
        title: '批量测速并选中活动节点',
        badge: 'Step 4 · 节点激活',
        desc: '按快捷键 `Ctrl + A` 全选所有节点，右键点击【测试服务器 Real 延时】，选择一个延时在 100ms 以内的绿色节点，按 `Enter` 键设为活动服务器。',
        uiHighlights: ['支持按延迟升序自动排列最佳节点'],
      },
    ],
    troubleshooting: [
      {
        issue: '启动提示缺少 .NET 桌面运行时环境',
        cause: '系统未安装 Microsoft .NET 8.0 Desktop Runtime。',
        solution: '根据提示前往微软官方网站下载并安装 .NET Desktop Runtime x64 安装包后重新打开软件。',
      },
    ],
  },
  {
    id: 'surge',
    slug: 'surge',
    name: 'Surge',
    tagline: 'macOS & iOS 高级开发者与网络工程师终极网络调试神器',
    category: 'cross-platform',
    platforms: ['macOS', 'iOS'],
    coreEngine: 'Surge Engine',
    configFormats: ['Surge Conf', 'Managed URL 订阅'],
    protocols: ['Shadowsocks', 'Trojan', 'Snell', 'VMess', 'Hysteria2'],
    githubUrl: 'https://nssurge.com',
    downloadUrl: 'https://nssurge.com',
    isPopular: true,
    isRecommended: true,
    pros: [
      '网络抓包、DNS 诊断、MITM 解密、脚本拓展与网关模式的业界天花板',
      '深度适配 macOS / iOS 系统的原生架构，极低能耗与极致高并发吞吐',
      'UI 设计与交互体验登峰造极，支持本地网关接管局域网所有智能设备',
    ],
    cons: [
      '商业买断授权费用较高（macOS 单设备 $49.99 起），面向专业开发者',
    ],
    description: 'Surge 是苹果生态内最具声望的高级网络调试与规则分流工具，不仅提供无可挑剔的代理分流能力，更是网络分析、MITM 解密与企业级网关路由的工业级标杆。',
    tutorialSlug: 'surge-macos-ios-advanced-guide',
    steps: [
      {
        stepNumber: 1,
        title: '下载并安装 Surge 官方应用',
        badge: 'Step 1 · 官方获取',
        desc: 'macOS 用户前往 `nssurge.com` 下载安装包并输入授权码激活；iOS 用户前往外区 App Store 搜索购买 Surge 5。',
        uiHighlights: ['首次启动授权安装 Helper 守护进程与虚拟网络接口'],
      },
      {
        stepNumber: 2,
        title: '导入 Managed Configuration 订阅',
        badge: 'Step 2 · 配置文件导入',
        desc: '在机场后台复制【Surge 托管订阅链接】，在 Surge 顶部菜单选择【Config - Download Configuration from URL】，粘贴链接并点击完成。',
        uiHighlights: ['Surge 将自动解析 Proxy、Rule 与 Policy Group 策略组'],
      },
      {
        stepNumber: 3,
        title: '开启增强模式 (Enhanced Mode)',
        badge: 'Step 3 · 系统级接管',
        desc: '勾选菜单中的【Enhanced Mode (增强模式)】，Surge 将全面捕获操作系统内所有 TCP/UDP 数据流，彻底杜绝 DNS 污染与未代理请求泄漏。',
        uiHighlights: ['开启后可直接在 Dashboard 查阅实时流量波动与请求抓包明细'],
      },
      {
        stepNumber: 4,
        title: '策略组分流与规则调优',
        badge: 'Step 4 · 策略选择',
        desc: '在 Policy Groups 策略组中，为 OpenAI / Netflix / Apple 服务分配专属的最优专线出口，实现全自动智能分流。',
        uiHighlights: ['支持根据 URL-Test 自动测速选取最低延迟节点'],
      },
    ],
    troubleshooting: [
      {
        issue: '开启 Enhanced Mode 提示权限不足或网络中断',
        cause: 'macOS 扩展权限未授予或存在第三方杀毒软件拦截。',
        solution: '前往【系统设置 - 隐私与安全性 - 网络扩展】允许 Surge Network Extension 运行。',
      },
    ],
  },
];
