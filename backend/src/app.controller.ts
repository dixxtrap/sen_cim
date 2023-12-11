import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';
import { basedire } from './mysql.config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('file/:name')
  async getFile(@Res() res: Response, @Param('name') name: string) {
    // const filePath = join(path); //Path to the specific file
    return res.sendFile(join(basedire,'..', 'upload', name));
  }
}
