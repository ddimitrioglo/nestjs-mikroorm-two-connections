import { Entity, PrimaryKey } from '@mikro-orm/mssql';

@Entity({ tableName: 'replace-me' })
export class Msqlama {
  @PrimaryKey()
  id: number;
}
