import { Body, Controller, Get, Post } from '@nestjs/common';
import { SharedFlowerService } from './service';
import { ApiTags } from '@nestjs/swagger';
import { SharedFlowerDto } from './dto';

@Controller('shared_flower')
@ApiTags('shared_flower')
export class SharedFlowerController {
  constructor(private service: SharedFlowerService) {}
  @Get()
  getS() {
    return this.service.getS();
  }
  @Post()
  create(@Body() body: SharedFlowerDto) {
    return this.service.create(body);
  }
}
