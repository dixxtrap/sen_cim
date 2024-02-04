import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cimetery } from 'src/ressources/typeorm';
import { DataSource, Equal, In, QueryBuilder, Repository } from 'typeorm';
import { CimeteryDto, getLocalisation } from './dto';
import { unlink } from 'fs';
import { ExceptionCode } from 'src/utils/exception_code';
import { ExcelService } from 'src/utils/excel.service';

@Injectable()
export class CimeteryService {
  constructor(
    @InjectRepository(Cimetery) private repos: Repository<Cimetery>,
    private excelService: ExcelService,
  ) {}
  async get() {
    return await this.repos.find();
  }
  async create(body: CimeteryDto) {
    return await this.repos.save(body);
  }
  async createBulk({ path, body }: { path: string; body: CimeteryDto }) {
    const data = await this.excelService.readExcel<Map<string, unknown>[]>(
      path,
    );
    console.log(data[0]);
    const succesList: Cimetery[] = [];
    const listCimetiery: CimeteryDto[] = data.map((item) => {
      return {
        name: item[body.name].toLowerCase().trim(),
        address: item[body.address],
        city: item[body.city],
        confession: item[body.confession],
        description: item[body.description],
        email: item[body.email],
        country: item[body.country],
        phone: item[body.phone],
        link: item[body.link]?.text,
        laltitude: getLocalisation(item[body.localisation]).laltitude,
        longitude: getLocalisation(item[body.localisation]).longitude,
      };
    });
    try {
      await Promise.all(
        listCimetiery.map(async (item) => {
          return this.create(item);
        }),
      )
        .then(() => ExceptionCode.SUCCEEDED)
        .catch((err) => {
          console.log(err);
          throw new HttpException(ExceptionCode.FAILLURE, 500);
        });
    } catch (error) {
      console.log(error);
      throw new HttpException(
        { ...ExceptionCode.FAILLURE, messageLigne: succesList.length },
        500,
      );
    } finally {
    }
  }
  async getById(id: number) {
    return await this.repos.findOne({ where: { id } });
  }

  async update(id: number, body: CimeteryDto) {
    const cim = await this.repos.findOne({ where: { id: Equal(id) } });
    if (cim && cim?.photo && cim?.photo !== '') {
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
