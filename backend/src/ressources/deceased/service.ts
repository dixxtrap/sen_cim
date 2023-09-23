import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Burial, Deceased, Gravesite, Row, Section } from 'src/typeorm';
import { Repository } from 'typeorm';
import { DeceasedDto } from './dto';

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
    return await this.repos.find();
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
