import { ConfigService } from '@nestjs/config';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
import { defineConfig as mongoConfig, MongoDriver } from '@mikro-orm/mongodb';
import { defineConfig as mssqlConfig, MsSqlDriver } from '@mikro-orm/mssql';
import { type Options } from '@mikro-orm/core';
import { Monsquito } from './mongo/mongo.entities';
import { Msqlama } from './mssql/mssql.entities';

function commonConfig(): Pick<Options, 'debug' | 'highlighter'> {
  return {
    debug: true,
    highlighter: new MongoHighlighter(),
    // @ts-expect-error: https://mikro-orm.io/docs/usage-with-nestjs#multiple-database-connections
    registerRequestContext: false,
  };
}

export function mongo(config: ConfigService): Options<MongoDriver> {
  return mongoConfig({
    ...commonConfig(),
    clientUrl: config.get('MONGO_URI'),
    entities: [Monsquito],
    allowGlobalContext: true,
    persistOnCreate: true,
  });
}

export function mssql(config: ConfigService): Options<MsSqlDriver> {
  return mssqlConfig({
    ...commonConfig(),
    host: config.get('MSSQL_URI'),
    dbName: config.get('MSSQL_DB'),
    user: config.get('MSSQL_USER'),
    password: config.get('MSSQL_PASSWORD'),
    entities: [Msqlama],
    pool: {
      max: 50,
    },
  });
}
