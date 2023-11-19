import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cimetery } from 'src/ressources/typeorm';
import { Equal, Repository } from 'typeorm';
import { CimeteryDto } from './dto';
import { unlink } from 'fs';
import { ExceptionCode } from 'src/utils/exception_code';

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
  async createBulk(body: [CimeteryDto]) {
    const result = await Promise.all(
      body.map((item) => {
        try {
          this.create(item);
        } catch (error) {
          console.log(
            `---------------dublicate ${item.name}------------------`,
          );
          console.log(error); 
        }
      }),
    );
    if (result.length > 0) {
      return ExceptionCode.SUCCEEDED;
    }
  }
  async getById(id: number) {
    return await this.repos.findOne({ where: { id } });
  }

  async update(id: number, body: CimeteryDto) {
    const cim = await this.repos.findOne({ where: { id: Equal(id) } });
    if (cim.photo && cim.photo !== '') {
      unlink(cim.photo, () => {
        console.log('file delete');
      });
    }
    return await this.repos.update({ id }, { ...body });
  }
  async delete(id: number) {
    return await this.repos.update({ id }, { isActive: false });
  }
}
