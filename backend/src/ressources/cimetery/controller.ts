import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CimeteryService } from './service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CimeteryDto } from './dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExceptionCode } from 'src/utils/exception_code';
import { fileInterceptor } from 'src/utils/multer.config';

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
  @Post('bulk')
  @UseInterceptors(fileInterceptor)
  createBulk(@Body() body, @UploadedFile() file: Express.Multer.File) {
    console.log(body);
    // return ExceptionCode.SUCCEEDED;
    return this.service.createBulk({ path: file.path, body });
  }
  @Put('add_photo/:id')
  @UseInterceptors(fileInterceptor)
  addPhoto(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CimeteryDto,
  ) {
    console.log(file);
    return this.service.update(id, {
      ...body,
      photo: file.path,
      photoName: file.filename,
    });
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() body: CimeteryDto) {
    return this.service.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
  @Post()
  create(@Body() body: CimeteryDto) {
    return this.service.create(body);
  }
}
