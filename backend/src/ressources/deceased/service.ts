import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Burial,
  Deceased,
  Gravesite,
  OwnerShipRecord,
  Row,
  Section,
} from 'src/ressources/typeorm';
import { Equal, In, Like, Raw, Repository } from 'typeorm';
import { DeceasedDto, SearchDeceasedDto } from './dto';
import { PaginationDto } from 'src/utils/pagination_dto';
import { ExceptionCode } from 'src/utils/exception_code';
import { ExcelService } from 'src/utils/excel.service';
import { rejects } from 'assert';
import * as moment from 'moment';
import { SectionService } from '../section/service';
import { RowServive } from '../row/service';
import { OwnerShipRecordService } from '../ownerShipRecord/service';
const makeDate = ({
  day,
  month,
  year,
}: {
  day: number;
  month: number;
  year: number;
}) => {
  if (!year) return null;

  const date = new Date(0);
  if (year) date.setFullYear(year);
  date.setMonth(month === 0 || !day ? 1 : month);

  date.setDate(day === 0 || !day ? 1 : day);
  return date;
};
const test = <T>(val: unknown) => {
  if (val === '-') return null;
  return val as T;
};
const tranformBirthDay = (str: string) => {
  if (!str) return null;
  const [day, month, year] = str.toString().split('/');
  if (!test(year)) return null;
  const date = new Date();
  date.setFullYear(parseInt(year));
  date.setDate(!parseInt(day) || parseInt(day) === 0 ? 1 : parseInt(day));
  date.setMonth(
    !parseInt(month) || parseInt(month) === 0 ? 1 : parseInt(month),
  );
  return date;
};

@Injectable()
export class DeceasedService {
  constructor(
    @InjectRepository(Deceased) private repos: Repository<Deceased>,
    @InjectRepository(Burial) private burial: Repository<Burial>,
    private section: SectionService,
    private row: RowServive,
    private owner: OwnerShipRecordService,
    @InjectRepository(Gravesite) private gravesite: Repository<Gravesite>,
    private excelService: ExcelService,
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
  async create2(body: DeceasedDto) {
    const section = await this.section.create({
      cimeteryId: body.cimeteryId,
      name: `${body.sectionName}`,
    });
    const row = await this.row.create({
      numero: `${body.rowName}`,
      sectionId: section.id,
    });
    const deceased = await this.repos.save(this.repos.create(body));
    const gravasite = await this.gravesite.save(
      this.gravesite.create({ rowId: row.id, platNumber: body.platNumber }),
    );
    const burial = await this.burial.save(
      this.burial.create({
        burialPermitNumber: body.burialPermitNumber,
        gravesiteId: gravasite.id,
        deceasedId: deceased.id,
        burialDate: body.burialDate,
      }),
    );
    if (body.ownShipPhone || body.ownShipName) {
      await this.owner.create({
        gravesiteId: gravasite.id,
        ownerShipName: body.ownShipName,
        ownerShipAddress: body.ownShipAddress,
        ownerShipPhone: body.ownShipPhone,
      });
    }
    return burial;
  }
  async bulk({ path, body }: { path: string; body: DeceasedDto }) {
    const successList: Burial[] = [];
    const data = await this.excelService.readExcel<Map<string, unknown>[]>(
      path,
    );

    console.log(data);
    const deceasedList: DeceasedDto[] = data.map((item) => {
      return {
        burialPermitNumber: item[body.burialPermitNumber],
        dateOfBirth: tranformBirthDay(test(item[body.dateOfBirthStr])),
        firstName: item[body.firstName],
        lastName: item[body.lastName],
        placeOfBirth: item[body.placeOfBirth],
        placeOfDeath: item[body.placeOfDeath],
        gender: item[body.gender],
        photo: null,
        sectionName: item[body.sectionName],
        rowName: item[body.rowName],
        cimeteryId: body.cimeteryId,
        platNumber: item[body.platNumber],
        ownShipAddress: `${item[body.ownShipAddress]}`,
        ownShipName: `${item[body.ownShipName]}`,
        ownShipPhone: `${item[body.ownShipPhone]}`,
        dateOfDeath: makeDate({
          day: test(item[body.dateOfDeathDay]),
          month: test(item[body.dateOfDeathMonth]),
          year: test(item[body.dateOfDeathYear]),
        }),
        burialDate: makeDate({
          day: test(item[body.burialDateDay]),
          month: test(item[body.burialDateMonth]),
          year: test(item[body.burialDateYear]),
        }),
      };
    });
    try {
      await Promise.all(
        deceasedList.map(async (item) => {
          const b = await this.create2(item);
          successList.push(b);
          return b;
        }),
      );
    } catch (error) {
      console.log(error);
      
    }

    return ExceptionCode.SUCCEEDED;
  }
  // async findSectionOrCreate({
  //   name,
  //   cimeteryId,
  // }: {
  //   name: string;
  //   cimeteryId: number;
  // }) {
  //   const section = await this.section.findOne({
  //     where: {
  //       name: Equal((name ?? '-').toLowerCase().trim()),
  //       cimeteryId: Equal(cimeteryId),
  //     },
  //   });
  //   console.log(section.link);
  //   if (section) return section;
  //   console.log(`section :${name}:${cimeteryId} not found`);
  //   return this.section.create({
  //     cimeteryId: cimeteryId,
  //     name: `${name}`,
  //   });
  // }

  // async create(body: DeceasedDto) {
  //   const section = await this.section.create({
  //     name: body?.sectionName,
  //     cimeteryId: body.cimeteryId,
  //   });

  //   //TODO/ Create or find row
  //   row = await this.row.findOne({
  //     where: {
  //       sectionId: section.id,
  //       numero: body?.rowName,
  //     },
  //   });
  //   if (!row)
  //     row = await this.row.save(
  //       await this.row.create({
  //         sectionId: section.id,
  //         numero: body.rowName,
  //       }),
  //     );
  //   // console.log('-----------------row created successful------------------');
  //   //TODO: create Deceased
  //   const deceased = await this.repos.save(this.repos.create(body));
  //   //TODO: create gravesite
  //   const gravasite = await this.gravesite.save(
  //     this.gravesite.create({ rowId: row.id, platNumber: body.platNumber }),
  //   );
  //   // console.log(
  //   //   '-----------------gravesite created successful------------------',
  //   // );

  //   //TODO: create burial
  //   const burial = await this.burial.save(
  //     this.burial.create({
  //       burialPermitNumber: body.burialPermitNumber,
  //       gravesiteId: gravasite.id,
  //       deceasedId: deceased.id,
  //       burialDate: body.burialDate,
  //     }),
  //   );
  //   return burial;
  // }

  async update(id: number, body: DeceasedDto) {
    return await this.repos.update(id, { ...body });
  }

  async delete(id: number) {
    return await this.repos.delete(id);
  }
}
