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

@Controller('obituary')
@ApiTags('obituary')
export class ObituaryController {
  constructor(private service: ObituaryService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      dest: 'dist/upload',
      storage: diskStorage({
        destination: (req, file, cb) => {
          console.log('------------------destination file-------------------');
          console.log(file);
          console.log(file);
          cb(null, 'dist/upload/');
        }, // Dossier de destination où les fichiers téléchargés seront stockés
        filename: (req, file, callback) => {
          console.log(
            '------------------destination file name-------------------',
          );

          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');

          return callback(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
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
    const filePath = join(__dirname, '../..', 'upload', name); // Path to the specific file
    return res.sendFile(filePath);
  }
  @Get('')
  find() {
    return this.service.find();
  }
}
