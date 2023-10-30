import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeceasedService } from './service';
import { DeceasedDto, SearchDeceasedDto } from './dto';
import { PaginationDto } from 'src/utils/pagination_dto';

@Controller('deceased')
@ApiTags('Deceased')
export class DeceasedController {
  constructor(private service: DeceasedService) {}
  @Get()
  get() {
    return this.service.get();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() body: DeceasedDto) {
    return this.service.create(body);
  }
  @Put('search')
  search(@Query('') param: PaginationDto, @Body() body: SearchDeceasedDto) {
    return this.service.search(body, param);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() body: DeceasedDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
