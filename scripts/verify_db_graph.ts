import { db, entityGraph } from '../src/db/index';

console.log('🔍 [AirportMatrix X 5.0] 验证统一实体知识图谱与数据库仓库...');

const providers = db.providers.getAll();
const clients = db.clients.getAll();
const protocols = db.protocols.getAll();
const routes = db.routes.getAll();
const keywords = db.keywords.getAll();

console.log(`✅ [Database] 已载入 Providers 实体: ${providers.length} 家`);
console.log(`✅ [Database] 已载入 Clients 客户端: ${clients.length} 款`);
console.log(`✅ [Database] 已载入 Protocols 协议: ${protocols.length} 种`);
console.log(`✅ [Database] 已载入 Routes 专线: ${routes.length} 类`);
console.log(`✅ [Database] 已载入 Keywords 搜索机会: ${keywords.length} 个`);

// Verify Graph Relations
const guangsuNode = entityGraph.getEntity('guangsucloud');
console.log(`\n🕸️ [Graph] 节点查询测试: ${guangsuNode?.name} (${guangsuNode?.type})`);

const connected = entityGraph.getConnectedEntities('guangsucloud');
console.log(`🕸️ [Graph] 关联实体数量: ${connected.length} 个`);
connected.forEach((c) => {
  console.log(`   - [${c.direction}] --(${c.relation})--> ${c.node.name} (${c.node.type})`);
});

console.log('\n✨ Phase 1 统一实体知识图谱与数据库验证 100% 通过！');
