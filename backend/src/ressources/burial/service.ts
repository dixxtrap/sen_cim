import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Burial } from 'src/ressources/typeorm';
import { Equal, Like, Raw, Repository } from 'typeorm';
import { BurialDto } from './dto';
import { SearchDeceasedDto } from '../deceased/dto';
import { PaginationDto } from 'src/utils/pagination_dto';
import { ExceptionCode } from 'src/utils/exception_code';

@Injectable()
export class BurialService {
  constructor(@InjectRepository(Burial) private repos: Repository<Burial>) {}

  async get() {
    return await this.repos.find({ take: 15 });
  }
  async search(body: SearchDeceasedDto, pagination: PaginationDto) {
    return await this.repos
      .find({
        where: {
          deceased: {
            firstName: Like(`%${body.firstName}%`),
            lastName: Like(`%${body.lastName}%`),
            dateOfDeath: Raw((alias) => `YEAR(${alias}) = :year`, {
              year: body.year,
            }),
          },
        },
        relations: { gravesite: { row: { section: true } }, deceased: true },
        skip: pagination.page * pagination.perPage,
        take: pagination.perPage,
      })
      .then((value) => value)
      .catch((err) => {
        console.log(err);
        throw new HttpException(ExceptionCode.NOT_FOUND, 404);
      });
  }
  async create(body: BurialDto) {
    return await this.repos.save(this.repos.create(body));
  }

  async getById(id: number) {
    return await this.repos.findOne({
      where: { id: Equal(id) },
      relations: {
        deceased: { flowers: { flower: true }, wishes: true },
        gravesite: { row: { section: { cimetery: true } } },
      },
    });
  }

  async update(id: number, body: BurialDto) {
    return await this.repos.update(id, { ...body });
  }

  async delete(id: number) {
    return await this.repos.delete(id);
  }
}
