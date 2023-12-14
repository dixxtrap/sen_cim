import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ObituaryService } from './service';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { ObituaryDto } from './dto';
import { Response } from 'express';
import { basedire } from 'src/mysql.config';
import { fileInterceptor } from 'src/utils/multer.config';

@Controller('obituary')
@ApiTags('obituary')
export class ObituaryController {
  constructor(private service: ObituaryService) {}

  @Post()
  @UseInterceptors(fileInterceptor)
  create(
    @Body() body: ObituaryDto,
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    body.fileName = file.filename;
    body.fileUrl = file.path;
    return this.service.create(body);
  }
  @Get('file/:name')
  async getFile(@Res() res: Response, @Param('name') name: string) {
    console.log(
      `file--------------------${basedire}------------------ ${join(
        basedire,
        '..',
    
        'upload',
        name,
      )}`,
    );
    const filePath = join(basedire, '..', 'upload', name); // Path to the specific file
    return res.sendFile(filePath);
  }
  @Get('')
  find() {
    return this.service.find();
  }
}
