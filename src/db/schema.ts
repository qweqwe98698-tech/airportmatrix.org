/**
 * AirportMatrix X 5.0 - Database & Knowledge Graph Schema
 * Unified entity models for Providers, Clients, Protocols, Routes, Issues, Keywords & Risks.
 */

export type EntityType = 
  | 'provider'
  | 'client'
  | 'protocol'
  | 'route'
  | 'issue'
  | 'ai_tool'
  | 'streaming'
  | 'keyword'
  | 'article';

export interface EntityRelation {
  targetId: string;
  targetType: EntityType;
  relationType: 'supports' | 'runs_on' | 'resolves' | 'requires' | 'competes_with' | 'targets';
  weight?: number;
  notes?: string;
}

// 1. Provider Entity
export interface ProviderEntity {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  officialUrl: string;
  affiliateUrl: string;
  status: 'active' | 'observe' | 'warning' | 'dead';
  establishedYear: number;
  nodeCount: number;
  entryLocations: string[];
  bandwidthLimit: string;
  refundPolicy: string;
  couponCode?: string;
  discountInfo?: string;
  
  // Spec Matrix
  routes: string[];        // e.g. ['iepl', 'iplc', 'bgp']
  protocols: string[];     // e.g. ['vless', 'hysteria2', 'trojan']
  clients: string[];       // e.g. ['clash-verge', 'shadowrocket', 'sing-box']
  
  pricing: {
    minMonthly: number;
    billingPeriod: string;
    annualDiscount?: string;
    hasUnlimitedTraffic: boolean;
  };

  score: {
    overall: number;       // 0 - 10.0
    stability: number;
    speed: number;
    support: number;
    costPerformance: number;
  };

  aiSupport: {
    status: 'native' | 'partial' | 'unsupported';
    tools: string[];       // ['ChatGPT', 'Claude', 'Gemini', 'Cursor']
    notes: string;
  };

  streamingSupport: {
    status: 'native_4k' | 'partial' | 'unsupported';
    platforms: string[];   // ['Netflix', 'Disney+', 'YouTube', 'TikTok', 'Bahamut']
    notes: string;
  };

  riskScore: number;       // 0 - 100
  riskLevel: 'normal' | 'observe' | 'warning' | 'critical';
  
  conversionData: {
    clickCount: number;
    estimatedConversionRate: number;
    topAudience: string;
  };

  relations: EntityRelation[];
  history: Array<{ date: string; type: string; title: string }>;
}

// 2. Client Entity
export interface ClientEntity {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  developer: string;
  license: string;
  version: string;
  platforms: string[];     // ['windows', 'macos', 'ios', 'android', 'linux']
  downloadUrl: string;
  githubUrl?: string;
  coreEngine: string;      // e.g. 'Mihomo (Clash.Meta)'
  
  features: {
    tunMode: boolean;
    ruleClash: boolean;
    subConverter: boolean;
    fakeIp: boolean;
  };

  difficultyScore: number; // 1 - 5 (1 = easiest)
  recommendedFor: string[];
  supportedProtocols: string[];
  compatibleProviders: string[];
  commonErrors: string[];  // IDs of issues resolved
  relations: EntityRelation[];
}

// 3. Protocol Entity
export interface ProtocolEntity {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  author: string;
  year: number;
  transport: string;       // e.g. 'TCP / TLS 1.3 / QUIC UDP'
  encryption: string;      // e.g. 'XTLS-Reality / ChaCha20-Poly1305'
  
  scores: {
    speed: number;         // 0 - 10
    security: number;      // 0 - 10
    antiBlocking: number;  // 0 - 10
    configurationDifficulty: number; // 1 - 5
  };

  pros: string[];
  cons: string[];
  bestUseCases: string[];
  supportedClients: string[];
  relations: EntityRelation[];
}

// 4. Route Entity
export interface RouteEntity {
  id: string;
  slug: string;
  name: string;
  type: 'iepl' | 'iplc' | 'bgp' | 'direct';
  latencyScore: number;
  stabilityScore: number;
  costScore: number;
  packetLossPeak: string;
  crossBorderTech: string;
  description: string;
  bestFor: string[];
  relations: EntityRelation[];
}

// 5. Issue / Problem Entity
export interface IssueEntity {
  id: string;
  slug: string;
  title: string;
  category: 'connection' | 'ai_blocked' | 'streaming_geo' | 'client_crash';
  symptom: string;
  rootCause: string;
  solutionSteps: string[];
  relatedTools: string[];
  relatedClients: string[];
  recommendedProviders: string[];
  relations: EntityRelation[];
}

// 6. Keyword / Search Opportunity Entity
export interface KeywordOpportunityEntity {
  id: string;
  keyword: string;
  searchIntent: 'troubleshooting' | 'tutorial' | 'comparison' | 'recommendation' | 'commercial';
  searchVolumeGrowth: number;  // percentage e.g. +140%
  commercialValueScore: number; // 1 - 10
  difficultyScore: number;      // 1 - 10
  opportunityScore: number;     // calculated
  suggestedTemplate: 'faq' | 'tutorial' | 'entity' | 'compare';
  targetEntities: { id: string; type: EntityType }[];
  status: 'discovered' | 'queued' | 'generated' | 'published';
}
