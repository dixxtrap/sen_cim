import { HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeceasedWishes, Wishes } from 'src/ressources/typeorm';
import { ExceptionCode } from 'src/utils/exception_code';
import { Repository } from 'typeorm';
import { WishDto } from './dto';
import { PaginationDto } from 'src/utils/pagination_dto';

export class WishService {
  constructor(
    @InjectRepository(Wishes) private repos: Repository<Wishes>,
    @InjectRepository(DeceasedWishes)
    private reposDeceasedWish: Repository<DeceasedWishes>,
  ) {}
  async get(pagination: PaginationDto) {
    console.log('----------------------paginaton---------------');
    console.log(pagination);
    const totalItems = await this.repos.count();
    const data = await this.repos.find({
      skip: (pagination.page ?? 0 + 1) * pagination.perPage ?? 20,
      take: pagination.perPage ?? 20,
    });
    return {
      page: pagination.page ?? 0,
      pageSize: data.length,
      totalItems: totalItems,
      totalPages: Math.round(totalItems / pagination.perPage),
      items: data,
    };
  }
  async getById(id: number) {
    const wish = await this.repos.findOne({ where: { id } });
    if (!wish) new HttpException(ExceptionCode.NOT_FOUND, 404);

    return wish;
  }
  async create(body: WishDto) {
    const wish = await this.repos.save(this.repos.create(body));
    if (!wish) new HttpException(ExceptionCode.FAILLURE, 400);
    if (body.deceasedId) {
      await this.reposDeceasedWish.save(
        this.reposDeceasedWish.create({
          deceasedId: body.deceasedId,
          wishesId: wish.id,
        }),
      );
    }
    return ExceptionCode.SUCCEEDED;
  }
}
