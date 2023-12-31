import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { SectionService } from './service';
import { ApiTags } from '@nestjs/swagger';
import { SectionDto } from './dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('section')
@ApiTags('Section')
export class SectionController {
  constructor(private service: SectionService) {}

  @Get()
  get() {
    return this.service.get();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }
  @Post('bulk')
  @UseInterceptors(FileInterceptor('file'))
  bulk(@Body() body: SectionDto, @UploadedFile() file: Express.Multer.File) {
    return this.service.bulk({ path: file.path, body });
  }
  @Post()
  create(@Body() body: SectionDto) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: SectionDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
