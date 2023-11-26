import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConcessionOwner } from 'src/ressources/typeorm';
import { Like, Repository } from 'typeorm';
import { ConcessionOwnerDto } from './dto';

@Injectable()
export class ConcessionOwnerService {
  constructor(
    @InjectRepository(ConcessionOwner)
    private repos: Repository<ConcessionOwner>,
  ) {}

  async get() {
    return await this.repos.find();
  }

  async getById(id: number) {
    return await this.repos.findOne({ where: { id } });
  }

  async create(body: ConcessionOwnerDto) {
    const own = await this.repos.find({ where: { phone: Like(body.phone) } });
  }

  async update(id: number, body: ConcessionOwnerDto) {
    return await this.repos.update(id, { ...body });
  }

  async delete(id: number) {
    return await this.repos.delete(id);
  }
}
