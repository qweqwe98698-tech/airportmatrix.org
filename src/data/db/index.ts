import type {
  ProviderEntity,
  ClientEntity,
  ProtocolEntity,
  RouteEntity,
  AiToolEntity,
  StreamingEntity,
  NetworkIssueEntity,
  TopicEntity,
  KeywordEntity,
  RiskEntity,
  ArticleEntity,
  RecommendationEntity,
  AnalyticsEntity,
} from '@/types/schema';

import providersRaw from './providers.json';
import clientsRaw from './clients.json';
import protocolsRaw from './protocols.json';
import routesRaw from './routes.json';
import aiToolsRaw from './ai_tools.json';
import streamingRaw from './streaming.json';
import issuesRaw from './issues.json';
import topicsRaw from './topics.json';
import keywordsRaw from './keywords.json';
import risksRaw from './risks.json';
import articlesRaw from './articles.json';
import recommendationsRaw from './recommendations.json';
import analyticsRaw from './analytics.json';

// Typed Entity Stores
export const db = {
  providers: providersRaw as ProviderEntity[],
  clients: clientsRaw as ClientEntity[],
  protocols: protocolsRaw as ProtocolEntity[],
  routes: routesRaw as RouteEntity[],
  aiTools: aiToolsRaw as AiToolEntity[],
  streaming: streamingRaw as StreamingEntity[],
  issues: issuesRaw as NetworkIssueEntity[],
  topics: topicsRaw as TopicEntity[],
  keywords: keywordsRaw as KeywordEntity[],
  risks: risksRaw as RiskEntity[],
  articles: articlesRaw as ArticleEntity[],
  recommendations: recommendationsRaw as RecommendationEntity[],
  analytics: analyticsRaw as AnalyticsEntity,
};

// Graph Query Helpers
export function getProviderById(id: string): ProviderEntity | undefined {
  return db.providers.find((p) => p.id === id || p.slug === id);
}

export function getClientBySlug(slug: string): ClientEntity | undefined {
  return db.clients.find((c) => c.slug === slug || c.id === slug);
}

export function getProtocolById(id: string): ProtocolEntity | undefined {
  return db.protocols.find((p) => p.id === id || p.name.toLowerCase() === id.toLowerCase());
}

export function getIssuesForEntity(entityId: string): NetworkIssueEntity[] {
  return db.issues.filter(
    (issue) =>
      issue.related_entities.clients.includes(entityId) ||
      issue.related_entities.protocols.includes(entityId) ||
      issue.related_entities.providers.includes(entityId)
  );
}

export function getRecommendationsForScenario(scenario: string) {
  return db.recommendations.find((r) => r.scenario.toLowerCase() === scenario.toLowerCase());
}

export function getPillarTopics(): TopicEntity[] {
  return db.topics.filter((t) => t.pillar);
}
