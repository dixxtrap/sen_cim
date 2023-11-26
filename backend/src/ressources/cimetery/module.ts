import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cimetery } from 'src/ressources/typeorm';
import { CimeteryController } from './controller';
import { CimeteryService } from './service';
import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import { MulterConfig } from 'src/utils/multer.config';
import { ExcelService } from 'src/utils/excel.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cimetery]), MulterConfig],
  controllers: [CimeteryController],
  providers: [CimeteryService, ExcelService],
})
export class CimeteryModule {}
