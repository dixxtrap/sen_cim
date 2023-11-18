import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Burial, Deceased, Gravesite, Row, Section } from 'src/ressources/typeorm';
import { Equal, Like, Raw, Repository } from 'typeorm';
import { DeceasedDto, SearchDeceasedDto } from './dto';
import { PaginationDto } from 'src/utils/pagination_dto';
import { ExceptionCode } from 'src/utils/exception_code';

@Injectable()
export class DeceasedService {
  constructor(
    @InjectRepository(Deceased) private repos: Repository<Deceased>,
    @InjectRepository(Burial) private burial: Repository<Burial>,
    @InjectRepository(Section) private section: Repository<Section>,
    @InjectRepository(Row) private row: Repository<Row>,
    @InjectRepository(Gravesite) private gravesite: Repository<Gravesite>,
  ) {}

  async get() {
    return await this.repos.find({ take: 15 });
  }
  async search(body: SearchDeceasedDto, pagination: PaginationDto) {
    const deceased = await this.repos.find({
      where: {
        firstName: Like(`%${body.firstName}%`),
        dateOfDeath: Raw((alias) => `YEAR(${alias}) = :year`, {
          year: body.year,
        }),
      },
      skip: pagination.page * pagination.perPage,
    });
    if (deceased.length > 0) return deceased;
    throw new HttpException(ExceptionCode.NOT_FOUND, 404);
  }
  async getById(id: number) {
    return await this.repos.findOne({ where: { id } });
  }

  async create(body: DeceasedDto) {
    // TODO/Find or inconue section
    const section = await this.section.findOne({
      where: { name: body.sectionName },
    });
    if (!section)
      throw new HttpException(
        {
          code: 404,
          status: 'NOT_FOUND',
          message: `Section with name ${body.sectionName} not found`,
        },
        404,
      );
    console.log(
      '-----------------section created successful------------------',
    );
    //TODO/ Create or find row
    const row =
      (await this.row.findOne({
        where: { sectionId: section.id, numero: body.rowName },
      })) ??
      (await this.row.save(
        this.row.create({ sectionId: section.id, numero: body.rowName }),
      ));
    console.log('-----------------row created successful------------------');
    //TODO: create Deceased
    const deceased = await this.repos.save(this.repos.create(body));
    console.log(
      '-----------------Deceased created successful------------------',
    );

    //TODO: create gravesite
    const gravasite = await this.gravesite.save(
      this.gravesite.create({ rowId: row.id, platNumber: body.platNumber }),
    );
    console.log(
      '-----------------gravesite created successful------------------',
    );

    //TODO: create burial
    const burial = await this.burial.save(
      this.burial.create({
        burialPermitNumber: body.burialPermitNumber,
        gravesiteId: gravasite.id,
        deceasedId: deceased.id,
        burialDate: body.burialDate,
      }),
    );
    return burial;
  }

  async update(id: number, body: DeceasedDto) {
    return await this.repos.update(id, { ...body });
  }

  async delete(id: number) {
    return await this.repos.delete(id);
  }
}
