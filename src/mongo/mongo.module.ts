import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Monsquito } from './mongo.entities';
import { MongoController } from './mongo.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Monsquito], 'mongo')],
  controllers: [MongoController],
})
export class MongoModule {}
