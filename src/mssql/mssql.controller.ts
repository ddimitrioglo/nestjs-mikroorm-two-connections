import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mssql';
import { Msqlama } from './mssql.entities';

@Controller()
export class MssqlController {
  constructor(
    @InjectRepository(Msqlama, 'mssql')
    private readonly msqlamaRepository: EntityRepository<Msqlama>,
  ) {}

  @Get('/mssql')
  async mssql(): Promise<Record<string, any>> {
    const count = await this.msqlamaRepository.count();

    return {
      inject: '@InjectRepository',
      connection: 'mssql',
      count,
    }
  }
}
