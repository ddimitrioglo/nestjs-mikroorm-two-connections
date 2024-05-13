import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { MongoModule } from './mongo/mongo.module';
import { MssqlModule } from './mssql/mssql.module';

@Module({
  imports: [
    CommonModule,
    MongoModule,
    MssqlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
