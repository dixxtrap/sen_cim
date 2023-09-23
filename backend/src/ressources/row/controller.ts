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
import { RowServive } from './service';
import { RowDto } from './dto';

@Controller('row')
@ApiTags('Row')
export class RowController {
  constructor(private service: RowServive) {}

  @Get()
  get() {
    return this.service.get();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() body: RowDto) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: RowDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
