import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cimetery } from 'src/ressources/typeorm';
import { Repository } from 'typeorm';
import { CimeteryDto } from './dto';

@Injectable()
export class CimeteryService {
  constructor(
    @InjectRepository(Cimetery) private repos: Repository<Cimetery>,
  ) {}
  async get() {
    return await this.repos.find();
  }
  async create(body: CimeteryDto) {
    return await this.repos.save(this.repos.create(body));
  }
  async getById(id: number) {
    return await this.repos.findOne({ where: { id } });
  }
  async update(id: number, body: CimeteryDto) {
    return await this.repos.update({ id }, { ...body });
  }
  async delete(id: number) {
    return await this.repos.update({ id }, { isActive: false });
  }
}
