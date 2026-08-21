/**
 * AirportMatrix X Core Database Schema v1.0 Types
 * Defines the 13 fundamental entity layers for the TrendMatrix Core system.
 */

// 1. Provider 品牌实体
export interface ProviderEntity {
  id: string;
  entity_type: 'provider';
  name: string;
  slug: string;
  brand: {
    logo: string;
    description: string;
    official_url: string;
    country: string;
    founded: string;
    status: 'active' | 'warning' | 'defunct';
  };
  positioning: {
    type: Array<'stable' | 'budget' | 'premium' | 'ai' | 'streaming'>;
    target_users: Array<'beginner' | 'developer' | 'student' | 'business'>;
  };
  service: {
    plans: Array<{
      name: string;
      price: string;
      traffic: string;
      devices: string;
      duration: string;
    }>;
    payment_methods: Array<'alipay' | 'wechat' | 'crypto' | 'credit_card'>;
  };
  network: {
    routes: Array<'IEPL' | 'IPLC' | 'BGP' | 'CN2' | 'Transit' | 'Direct'>;
    locations: string[];
    ip_type: Array<'native' | 'residential' | 'datacenter'>;
  };
  protocols: Array<'VLESS' | 'Trojan' | 'Shadowsocks' | 'Hysteria2' | 'TUIC'>;
  clients: string[];
  compatibility: {
    ai_tools: string[];
    streaming: string[];
  };
  risk: {
    level: 'low' | 'medium' | 'high' | 'critical';
    history: Array<{
      date: string;
      event: string;
      level: string;
    }>;
    last_check: string;
  };
  seo: {
    keywords: string[];
    related_topics: string[];
    faq: Array<{ question: string; answer: string }>;
  };
  content: {
    articles: string[];
    reviews: string[];
    tutorials: string[];
  };
  conversion: {
    affiliate_url: string;
    cta_text: string;
    click_tracking: boolean;
  };
  updated_at: string;
}

// 2. Client 客户端实体
export interface ClientEntity {
  id: string;
  entity_type: 'client';
  name: string;
  slug: string;
  platforms: Array<'Windows' | 'macOS' | 'iOS' | 'Android' | 'Linux'>;
  category: 'proxy_client' | 'network_tool';
  download: {
    official_url: string;
    github_url: string;
    versions: Array<{ version: string; date: string; url: string }>;
  };
  features: string[];
  protocol_support: string[];
  tutorials: {
    install: string[];
    config: string[];
    subscribe: string[];
    error_fix: string[];
  };
  common_errors: Array<{
    problem: string;
    solution: string;
  }>;
  recommended_providers: string[];
  related_articles: string[];
  updated_at: string;
}

// 3. Protocol 协议实体
export interface ProtocolEntity {
  id: string;
  entity_type: 'protocol';
  name: string;
  category: 'proxy_protocol';
  description: string;
  technical: {
    security: string;
    performance: string;
    complexity: string;
  };
  advantages: string[];
  disadvantages: string[];
  supported_clients: string[];
  supported_providers: string[];
  recommended_scenarios: string[];
  related_articles: string[];
  seo_keywords: string[];
  updated_at: string;
}

// 4. Route 线路实体
export interface RouteEntity {
  id: string;
  entity_type: 'route';
  name: string;
  category: 'network_route';
  features: {
    stability: number; // 1-5
    speed: number;     // 1-5
    latency: number;   // 1-5
    cost: number;      // 1-5
  };
  advantages: string[];
  limitations: string[];
  suitable_for: string[];
  related_providers: string[];
  related_articles: string[];
}

// 5. AI Tool 实体
export interface AiToolEntity {
  id: string;
  entity_type: 'ai_tool';
  name: string;
  company: string;
  category: string;
  access: {
    availability: string;
    network_requirements: string;
    common_errors: string[];
  };
  problems: Array<{
    title: string;
    solution: string;
  }>;
  recommended_clients: string[];
  recommended_providers: string[];
  related_articles: string[];
}

// 6. Streaming 流媒体实体
export interface StreamingEntity {
  id: string;
  entity_type: 'streaming_service';
  name: string;
  region: string[];
  requirements: {
    ip_type: Array<'native' | 'residential' | 'datacenter'>;
    stability: 'high' | 'medium' | 'low';
  };
  common_errors: Array<{
    error: string;
    solution: string;
  }>;
  supported_providers: string[];
  related_articles: string[];
}

// 7. Network Issue 故障实体
export interface NetworkIssueEntity {
  id: string;
  entity_type: 'network_issue';
  title: string;
  category: Array<'client' | 'network' | 'subscription' | 'protocol' | 'firewall'>;
  symptoms: string[];
  possible_causes: string[];
  solutions: Array<{
    step: number;
    content: string;
  }>;
  related_entities: {
    clients: string[];
    protocols: string[];
    providers: string[];
  };
  seo_keywords: string[];
}

// 8. Topic 主题实体
export interface TopicEntity {
  id: string;
  entity_type: 'topic';
  name: string;
  pillar: boolean;
  children: string[];
  keywords: string[];
  entities: string[];
  articles: string[];
  priority: 'high' | 'medium' | 'low';
}

// 9. Keyword 趋势关键词实体
export interface KeywordEntity {
  keyword: string;
  type: Array<'problem' | 'commercial' | 'tutorial' | 'brand' | 'protocol'>;
  search_intent: 'solution' | 'comparison' | 'navigational' | 'transactional';
  trend_score: number; // 0-100
  metrics: {
    growth: number;
    competition: number;
    commercial: number;
  };
  recommended_content: Array<'tutorial' | 'faq' | 'troubleshooting' | 'matrix'>;
  related_entities: string[];
}

// 10. Risk 风险实体
export interface RiskEntity {
  id: string;
  entity_type: 'risk';
  provider: string;
  event: {
    type: 'domain_change' | 'speed_drop' | 'scam_warning' | 'maintenance' | 'exit_scam';
    date: string;
    description: string;
  };
  level: 'low' | 'medium' | 'high' | 'critical';
  status: 'monitoring' | 'resolved' | 'confirmed_dead';
  history: Array<{
    date: string;
    status: string;
    note: string;
  }>;
}

// 11. Article 内容实体
export interface ArticleEntity {
  id: string;
  type: 'article';
  title: string;
  description: string;
  category: string;
  topic: string;
  entities: string[];
  intent: 'problem_solution' | 'comparison' | 'guide' | 'review';
  seo: {
    keywords: string[];
    schema: 'Article' | 'FAQPage' | 'HowTo';
  };
  links: {
    related: string[];
    pillar: string;
  };
  update_frequency: 'weekly' | 'monthly' | 'quarterly';
  status: 'published' | 'draft' | 'archived';
}

// 12. Recommendation 推荐模型实体
export interface RecommendationEntity {
  id: string;
  scenario: 'AI' | 'Streaming' | 'Gaming' | 'Development' | 'Budget';
  user_profile: 'beginner' | 'developer' | 'gamer' | 'cross_border_business';
  requirements: string[];
  recommended_providers: Array<{
    provider_id: string;
    match_score: number;
    reason: string;
  }>;
  reason: string;
  confidence: number;
}

// 13. Analytics 分析实体
export interface AnalyticsEntity {
  date: string;
  metrics: {
    page_views: number;
    search_queries: number;
    clicks: number;
    conversions: number;
  };
  top_keywords: string[];
  top_entities: string[];
  update_actions: string[];
}
