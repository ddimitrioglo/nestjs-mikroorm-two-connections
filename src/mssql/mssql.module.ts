import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Msqlama } from './mssql.entities';
import { MssqlController } from './mssql.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Msqlama], 'mssql')],
  controllers: [MssqlController],
})
export class MssqlModule {}
