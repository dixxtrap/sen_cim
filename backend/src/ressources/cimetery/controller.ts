import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CimeteryService } from './service';
import { ApiTags } from '@nestjs/swagger';
import { CimeteryDto } from './dto';

@Controller('cimetery')
@ApiTags('Cimetery')
export class CimeteryController {
  constructor(private service: CimeteryService) {}
  @Get()
  get() {
    return this.service.get();
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }
  @Post()
  create(@Body() body: CimeteryDto) {
    return this.service.create(body);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() body: CimeteryDto) {
    return this.service.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
