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
import { BurialService } from './service';
import { BurialDto, SearchBurialDto } from './dto';
import { PaginationDto } from 'src/utils/pagination_dto';

@Controller('burial')
@ApiTags('Burial')
export class BurialController {
  constructor(private service: BurialService) {}

  @Get()
  get() {
    return this.service.get();
  }

  @Post('search')
  search(@Body() body: SearchBurialDto, @Query() param: PaginationDto) {
    return this.service.search(body, param);
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() body: BurialDto) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: BurialDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
