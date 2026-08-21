export interface RiskIncident {
  id: string;
  brandName: string;
  providerSlug?: string;
  date: string;
  eventType: 'domain_change' | 'speed_drop' | 'scam_warning' | 'maintenance' | 'exit_scam';
  severity: 'info' | 'warning' | 'danger' | 'critical';
  title: string;
  details: string;
  suggestion: string;
  status: 'resolved' | 'ongoing' | 'confirmed_dead';
}

export const risksData: RiskIncident[] = [
  {
    id: 'risk-202608-01',
    brandName: '某不知名低价年付小机场 (Cloud***)',
    date: '2026-08-18',
    eventType: 'exit_scam',
    severity: 'critical',
    title: '官网跑路失联：低价“永久套餐”诱导充值后关服',
    details: '该平台在各大群组以 29.9 元“永久/三年大流量”为噱头吸引大量用户，运营不到两个月后官网域名解析被撤，Telegram 交流群开启全员禁言并最终解散。',
    suggestion: '千万不要购买任何声称“永久”或“超长年限极端低价”的机场。代理服务具有高昂的专线与服务器月度开支，任何偏离成本常识的定价均为跑路预警信号。坚决按月或季度订阅。',
    status: 'confirmed_dead',
  },
  {
    id: 'risk-202608-02',
    brandName: 'TAG Internet',
    providerSlug: 'tag-internet',
    date: '2026-08-15',
    eventType: 'maintenance',
    severity: 'info',
    title: '沪日专线光缆计划性割接升级公告',
    details: '运营商于凌晨 02:00-06:00 进行沪日海底光缆扩容维护，期间日区部分低倍率节点出现 5-10 分钟短暂重连，BGP 备用入口正常工作。',
    suggestion: '维护已按时完成，若本地客户端出现未更新情况，请重新拉取一次订阅即可恢复最佳低延迟。',
    status: 'resolved',
  },
  {
    id: 'risk-202608-03',
    brandName: '某公网直连小机场 (Speed***)',
    date: '2026-08-10',
    eventType: 'domain_change',
    severity: 'warning',
    title: '官网主域名遭 DNS 污染阻断，已切换备用发布页',
    details: '由于使用未加防护的常规域名且未开启客户端防投毒，其官网域名在中国大陆部分地区遭遇 DNS 污染。目前已通过发布页公布新域名。',
    suggestion: '建议所有用户收藏对应机场的官方永久发布页或 Telegram 频道，并避免在本地 DNS 中开启明文解析。',
    status: 'resolved',
  },
  {
    id: 'risk-202607-28',
    brandName: 'FlyingBird 飞鸟',
    providerSlug: 'flying-bird',
    date: '2026-07-28',
    eventType: 'speed_drop',
    severity: 'info',
    title: '美西节点遭遇机房上游网络抖动，已切换备用 Anycast 出口',
    details: '受美西机房上游 Cogent 光缆波动影响，美西 03/04 节点晚高峰出现短暂延迟升高。运维在 15 分钟内完成 Anycast 线路旁路调度。',
    suggestion: '用户无需任何操作，客户端节点已自动完成无感故障转移。',
    status: 'resolved',
  },
];
