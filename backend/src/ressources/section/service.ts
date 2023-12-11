import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from 'src/ressources/typeorm';
import { Equal, In, Like, Repository } from 'typeorm';
import { SectionDto } from './dto';
import { ExcelService } from 'src/utils/excel.service';
import { ExceptionCode } from 'src/utils/exception_code';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section) private repos: Repository<Section>,
    private excelService: ExcelService,
  ) {}

  async bulk({ path, body }: { path: string; body: SectionDto }) {
    const successList: Section[] = [];
    const data = await this.excelService.readExcel<Map<string, unknown>[]>(
      path,
    );
    console.log(data);
    const listSection: SectionDto[] = data.map((item) => {
      return {
        cimeteryId: body.cimeteryId,
        name: `${item[body.name]}`,
        link: item[body.link].text,
        comment: item[body.comment],
      };
    });
    console.log(`-----------------lenght:${listSection.length}-----------`);
    try {
      await Promise.all(
        listSection.map(async (item) => {
          successList.push(await this.create(item));
        }),
      );
      return ExceptionCode.SUCCEEDED;
    } catch (error) {
      console.log(error);
      await this.repos.delete({ id: In(successList.map((item) => item.id)) });
      throw new HttpException(
        { ...ExceptionCode.FAILLURE, ligne: successList.length },
        500,
      );
    }
  }
  async get() {
    return await this.repos.find();
  }

  async create(body: SectionDto) {
    console.log(body);
    const section = await this.repos.findOne({
      where: {
        cimeteryId: Equal(body.cimeteryId),
        name: Like(
          `${
            body.name === '' || body.name === null || body.name === '--'
              ? '-'
              : body.name
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
