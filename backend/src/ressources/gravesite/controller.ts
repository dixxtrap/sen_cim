import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GravesiteService } from './service';
import { GravesiteDto } from './dto';

@Controller('gravesite')
@ApiTags('Gravesite')
export class GravesiteController {
  constructor(private service: GravesiteService) {}

  @Get()
  get() {
    return this.service.get();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() body: GravesiteDto) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: GravesiteDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
