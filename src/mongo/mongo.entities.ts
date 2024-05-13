import { Entity, MongoEntityRepository, PrimaryKey } from '@mikro-orm/mongodb';

@Entity({ repository: () => MonsquitoRepository, tableName: 'replace-me' })
export class Monsquito {
  @PrimaryKey({ name: '_id' })
  id: string;
}

export class MonsquitoRepository extends MongoEntityRepository<Monsquito> {}
