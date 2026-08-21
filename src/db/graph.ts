import providersData from './data/providers.json';
import clientsData from './data/clients.json';
import protocolsData from './data/protocols.json';
import routesData from './data/routes.json';
import issuesData from './data/issues.json';
import keywordsData from './data/keywords.json';
import risksData from '../../risk-engine/database/risks.json';

import type { EntityType, ProviderEntity, ClientEntity, ProtocolEntity, RouteEntity, IssueEntity } from './schema';

export interface GraphNode {
  id: string;
  name: string;
  type: EntityType;
  slug: string;
  score?: number;
  data: any;
}

export interface GraphEdge {
  source: string;
  target: string;
  relationType: string;
  label?: string;
}

export class KnowledgeGraphEngine {
  private nodes: Map<string, GraphNode> = new Map();
  private edges: GraphEdge[] = [];

  constructor() {
    this.buildGraph();
  }

  private buildGraph() {
    // 1. Register Providers
    for (const p of (providersData as ProviderEntity[])) {
      this.nodes.set(p.id, {
        id: p.id,
        name: p.name,
        type: 'provider',
        slug: p.slug,
        score: p.score.overall,
        data: p,
      });

      // Register edges
      if (p.relations) {
        for (const rel of p.relations) {
          this.edges.push({
            source: p.id,
            target: rel.targetId,
            relationType: rel.relationType,
            label: rel.relationType,
          });
        }
      }
    }

    // 2. Register Clients
    for (const c of (clientsData as ClientEntity[])) {
      this.nodes.set(c.id, {
        id: c.id,
        name: c.name,
        type: 'client',
        slug: c.slug,
        score: 10 - c.difficultyScore * 1.5,
        data: c,
      });

      if (c.relations) {
        for (const rel of c.relations) {
          this.edges.push({
            source: c.id,
            target: rel.targetId,
            relationType: rel.relationType,
            label: rel.relationType,
          });
        }
      }
    }

    // 3. Register Protocols
    for (const proto of (protocolsData as ProtocolEntity[])) {
      this.nodes.set(proto.id, {
        id: proto.id,
        name: proto.name,
        type: 'protocol',
        slug: proto.slug,
        score: proto.scores.antiBlocking,
        data: proto,
      });

      if (proto.relations) {
        for (const rel of proto.relations) {
          this.edges.push({
            source: proto.id,
            target: rel.targetId,
            relationType: rel.relationType,
            label: rel.relationType,
          });
        }
      }
    }

    // 4. Register Routes
    for (const r of (routesData as RouteEntity[])) {
      this.nodes.set(r.id, {
        id: r.id,
        name: r.name,
        type: 'route',
        slug: r.slug,
        score: r.stabilityScore,
        data: r,
      });

      if (r.relations) {
        for (const rel of r.relations) {
          this.edges.push({
            source: r.id,
            target: rel.targetId,
            relationType: rel.relationType,
            label: rel.relationType,
          });
        }
      }
    }

    // 5. Register Issues
    for (const iss of (issuesData as IssueEntity[])) {
      this.nodes.set(iss.id, {
        id: iss.id,
        name: iss.title,
        type: 'issue',
        slug: iss.slug,
        data: iss,
      });

      if (iss.relations) {
        for (const rel of iss.relations) {
          this.edges.push({
            source: iss.id,
            target: rel.targetId,
            relationType: rel.relationType,
            label: rel.relationType,
          });
        }
      }
    }
  }

  /**
   * Look up any entity by ID
   */
  public getEntity(id: string): GraphNode | undefined {
    return this.nodes.get(id);
  }

  /**
   * Find all directly connected entities (both outgoing and incoming relations)
   */
  public getConnectedEntities(entityId: string): { node: GraphNode; relation: string; direction: 'outgoing' | 'incoming' }[] {
    const result: { node: GraphNode; relation: string; direction: 'outgoing' | 'incoming' }[] = [];

    for (const edge of this.edges) {
      if (edge.source === entityId) {
        const targetNode = this.nodes.get(edge.target);
        if (targetNode) {
          result.push({ node: targetNode, relation: edge.relationType, direction: 'outgoing' });
        }
      } else if (edge.target === entityId) {
        const sourceNode = this.nodes.get(edge.source);
        if (sourceNode) {
          result.push({ node: sourceNode, relation: edge.relationType, direction: 'incoming' });
        }
      }
    }

    return result;
  }

  /**
   * Query full graph nodes and edges for visual rendering
   */
  public getFullGraph() {
    return {
      nodes: Array.from(this.nodes.values()),
      edges: this.edges,
    };
  }
}

export const entityGraph = new KnowledgeGraphEngine();
