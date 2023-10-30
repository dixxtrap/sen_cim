import { InjectRepository } from '@nestjs/typeorm';
import { Obituary } from 'src/typeorm';
import { Repository } from 'typeorm';
import { ObituaryDto } from './dto';

export class ObituaryService {
  constructor(
    @InjectRepository(Obituary) private repos: Repository<Obituary>,
  ) {}
  async create(body: ObituaryDto) {
    return this.repos.save(this.repos.create(body));
  }
  async find() {
    return this.repos.find({ relations: { flowers: true, wishes: true } });
  }
}
