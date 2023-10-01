import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flower } from '../../typeorm';
import { FlowerDto } from './dto';

@Injectable()
export class FlowerService {
  constructor(@InjectRepository(Flower) private repos: Repository<Flower>) {}
  gets() {
    return this.repos.find();
  }
  getById(id: number) {
    return this.repos.findOne({ where: { id } });
  }
  async create(body: FlowerDto) {
    return await this.repos.save(this.repos.create(body));
  }
  async update(id: number, body: FlowerDto) {
    return await this.repos.update({ id }, { ...body });
  }
}
