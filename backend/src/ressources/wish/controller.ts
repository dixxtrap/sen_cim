import { ApiTags } from '@nestjs/swagger';
import { WishService } from './service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { WishDto } from './dto';
import { PaginationDto } from 'src/utils/pagination_dto';

@ApiTags('Wish')
@Controller('wish')
export class WishControlller {
  constructor(private service: WishService) {}
  @Get()
  get(@Query() query: PaginationDto) {
    return this.service.get(query);
  }
  @Post()
  create(@Body() body: WishDto) {
    return this.service.create(body);
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }
}
