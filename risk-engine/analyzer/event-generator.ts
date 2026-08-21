/**
 * Automated AI Risk Event Generator
 * Generates human-readable, structured risk alert bulletins and SEO keywords.
 */

export interface RiskEventRecord {
  id: string;
  providerId: string;
  providerName: string;
  slug: string;
  eventType: 'domain_change' | 'runaway' | 'maintenance' | 'ssl_issue';
  severity: 'observe' | 'warning' | 'critical';
  title: string;
  date: string;
  seoKeywords: string[];
  summary: string;
  suggestions: string[];
}

export function generateRiskEvent(params: {
  providerId: string;
  providerName: string;
  eventType: 'domain_change' | 'runaway' | 'maintenance' | 'ssl_issue';
  severity: 'observe' | 'warning' | 'critical';
  date: string;
}): RiskEventRecord {
  const { providerId, providerName, eventType, severity, date } = params;
  const id = `event_${date.replace(/-/g, '')}_${providerId}`;
  const slug = `${providerId}-${eventType.replace(/_/g, '-')}-alert`;

  let title = `${providerName} 运营状态异常风险提醒`;
  let summary = `AirportMatrix Risk Monitor 风险监控引擎探测到该品牌出现异常信号。`;
  let suggestions = [
    '请检查官方发布页确认当前状态',
    '避免充值长期高额套餐，以月付为主',
    '若长时间未恢复，请及时切换至备用专线'
  ];

  if (eventType === 'domain_change') {
    title = `${providerName} 官网主域名发生变更风险提醒`;
    summary = `系统探测到 ${providerName} 官网解析发生重定向与主域名迁移。当前已更新至最新可访问节点，请注意核实防伪验证。`;
    suggestions = [
      '请通过本站认证安全通道重新获取防失联官方镜像',
      '在客户端中重新导入并更新订阅链接',
      '避免在任何第三方钓鱼仿冒网站输入密码'
    ];
  } else if (eventType === 'runaway') {
    title = `${providerName} 停止履约与失联跑路风险通报`;
    summary = `该品牌节点全线失联，官网返回 521 故障，客服群组解散，触发高危跑路预警机制。`;
    suggestions = [
      '立即停止一切支付操作，保存账单与支付凭证',
      '在客户端中删除失效订阅，防止持续尝试连接占用系统资源',
      '建议更换至运营超过 3 年以上的全 IEPL 专线老牌服务商'
    ];
  }

  const seoKeywords = [
    `${providerName}域名更换了吗`,
    `${providerName}官网打不开怎么办`,
    `${providerName}跑路了吗`,
    `${providerName}最新状态`,
    `${providerName}无法连接`,
  ];

  return {
    id,
    providerId,
    providerName,
    slug,
    eventType,
    severity,
    title,
    date,
    seoKeywords,
    summary,
    suggestions,
  };
}
