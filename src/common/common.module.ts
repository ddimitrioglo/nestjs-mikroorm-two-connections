import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { mongo, mssql } from '../mikro-orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MikroOrmModule.forRootAsync({
      inject: [ConfigService],
      contextName: 'mongo',
      useFactory: (configService: ConfigService) => mongo(configService),
    }),
    MikroOrmModule.forRootAsync({
      inject: [ConfigService],
      contextName: 'mssql',
      useFactory: (configService: ConfigService) => mssql(configService),
    }),
  ],
  exports: [],
})
export class CommonModule {}
