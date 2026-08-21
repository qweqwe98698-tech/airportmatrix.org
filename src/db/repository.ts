import providersData from './data/providers.json';
import clientsData from './data/clients.json';
import protocolsData from './data/protocols.json';
import routesData from './data/routes.json';
import issuesData from './data/issues.json';
import keywordsData from './data/keywords.json';
import risksData from '../../risk-engine/database/risks.json';

import type {
  ProviderEntity,
  ClientEntity,
  ProtocolEntity,
  RouteEntity,
  IssueEntity,
  KeywordOpportunityEntity,
} from './schema';

export class DatabaseRepository {
  // 1. Providers Repository
  public providers = {
    getAll: (): ProviderEntity[] => providersData as ProviderEntity[],
    getBySlug: (slug: string): ProviderEntity | undefined =>
      (providersData as ProviderEntity[]).find((p) => p.slug === slug || p.id === slug),
    getActive: (): ProviderEntity[] =>
      (providersData as ProviderEntity[]).filter((p) => p.status === 'active'),
    getByProtocol: (protocolSlug: string): ProviderEntity[] =>
      (providersData as ProviderEntity[]).filter((p) => p.protocols.includes(protocolSlug)),
    getByRoute: (routeSlug: string): ProviderEntity[] =>
      (providersData as ProviderEntity[]).filter((p) => p.routes.includes(routeSlug)),
  };

  // 2. Clients Repository
  public clients = {
    getAll: (): ClientEntity[] => clientsData as ClientEntity[],
    getBySlug: (slug: string): ClientEntity | undefined =>
      (clientsData as ClientEntity[]).find((c) => c.slug === slug || c.id === slug),
    getByPlatform: (platform: string): ClientEntity[] =>
      (clientsData as ClientEntity[]).filter((c) => c.platforms.includes(platform)),
  };

  // 3. Protocols Repository
  public protocols = {
    getAll: (): ProtocolEntity[] => protocolsData as ProtocolEntity[],
    getBySlug: (slug: string): ProtocolEntity | undefined =>
      (protocolsData as ProtocolEntity[]).find((p) => p.slug === slug || p.id === slug),
  };

  // 4. Routes Repository
  public routes = {
    getAll: (): RouteEntity[] => routesData as RouteEntity[],
    getBySlug: (slug: string): RouteEntity | undefined =>
      (routesData as RouteEntity[]).find((r) => r.slug === slug || r.id === slug),
  };

  // 5. Issues Repository
  public issues = {
    getAll: (): IssueEntity[] => issuesData as IssueEntity[],
    getBySlug: (slug: string): IssueEntity | undefined =>
      (issuesData as IssueEntity[]).find((i) => i.slug === slug || i.id === slug),
  };

  // 6. Keywords / Search Opportunities Repository
  public keywords = {
    getAll: (): KeywordOpportunityEntity[] => keywordsData as KeywordOpportunityEntity[],
    getHighOpportunity: (minScore = 90): KeywordOpportunityEntity[] =>
      (keywordsData as KeywordOpportunityEntity[]).filter((k) => k.opportunityScore >= minScore),
  };

  // 7. Risk Monitor Database Repository
  public risks = {
    getAll: () => risksData,
    getByProviderId: (id: string) => risksData.find((r) => r.providerId === id),
  };
}

export const db = new DatabaseRepository();
