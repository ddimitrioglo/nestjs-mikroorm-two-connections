import { Controller, Get } from '@nestjs/common';
import { MonsquitoRepository } from './mongo.entities';

@Controller()
export class MongoController {
  constructor(private readonly monsquitoRepository: MonsquitoRepository) {}

  @Get('/mongo')
  async mongo(): Promise<Record<string, any>> {
    const count = await this.monsquitoRepository.count();

    return {
      inject: 'custom repository',
      connection: 'mongo',
      count,
    }
  }
}
