import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Row } from 'src/ressources/typeorm';
import { Equal, Like, Repository } from 'typeorm';
import { RowDto } from './dto';

@Injectable()
export class RowServive {
  constructor(@InjectRepository(Row) private repos: Repository<Row>) {}

  async get() {
    return await this.repos.find();
  }

  async create(body: RowDto) {
    const section = await this.repos.findOne({
      where: {
        sectionId: Equal(body.sectionId),
        numero: Like(
          `${
            body.numero === '' ||  body.numero === '--'
              ? '-'
              : body.numero
          }`
            .trim()
            .toLowerCase(),
        ),
      },
    });
    console.log(section);
    if (section) return section;
    return this.repos.save(
      this.repos.create({
        ...body,
      }),
    );
  }

  async getById(id: number) {
    return await this.repos.findOne({ where: { id } });
  }

  async update(id: number, body: RowDto) {
    return await this.repos.update(id, { ...body });
  }

  async delete(id: number) {
    return await this.repos.delete({ id });
  }
}
