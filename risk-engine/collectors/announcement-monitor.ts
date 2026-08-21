/**
 * Telegram & Announcement Channel Intelligence Monitor
 */

export interface ChannelSignal {
  providerId: string;
  signalType: 'runaway' | 'maintenance' | 'migration' | 'none';
  weight: number;
  snippet: string;
}

const HIGH_RISK_KEYWORDS = ['跑路', '关闭', '停止服务', '退款', '迁移', '跑路通知', '失联'];
const MEDIUM_RISK_KEYWORDS = ['维护', '调整', '线路升级', '节点更换', '紧急割接'];

export function analyzeChannelAnnouncement(providerId: string, text: string): ChannelSignal {
  for (const kw of HIGH_RISK_KEYWORDS) {
    if (text.includes(kw)) {
      return {
        providerId,
        signalType: 'runaway',
        weight: 50,
        snippet: `监测到高风险关键词：【${kw}】`,
      };
    }
  }

  for (const kw of MEDIUM_RISK_KEYWORDS) {
    if (text.includes(kw)) {
      return {
        providerId,
        signalType: 'maintenance',
        weight: 15,
        snippet: `监测到常规变动关键词：【${kw}】`,
      };
    }
  }

  return {
    providerId,
    signalType: 'none',
    weight: 0,
    snippet: '未发现异常公告信号',
  };
}
