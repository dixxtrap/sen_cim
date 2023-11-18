import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from 'src/ressources/typeorm';
import { Repository } from 'typeorm';
import { SectionDto } from './dto';

@Injectable()
export class SectionService {
  constructor(@InjectRepository(Section) private repos: Repository<Section>) {}

  async get() {
    return await this.repos.find();
  }

  async create(body: SectionDto) {
    return await this.repos.save(this.repos.create(body));
  }

  async getById(id: number) {
    return await this.repos.findOne({
      where: { id },
      relations: { cimetery: true },
    });
  }

  async update(id: number, body: SectionDto) {
    return await this.repos.update(id, { ...body });
  }

  async delete(id: number) {
    return await this.repos.delete({ id });
  }
}
