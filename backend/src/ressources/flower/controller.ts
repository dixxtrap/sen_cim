import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FlowerService } from './service';
import { FlowerDto } from './dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('flower')
@Controller('flower')
export class FlowerController {
  constructor(private service: FlowerService) {}
  @Get()
  gets() {
    return this.service.gets();
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }
  @Post()
  create(@Body() body: FlowerDto) {
    return this.service.create(body);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() body: FlowerDto) {
    return this.service.update(id, body);
  }
}
