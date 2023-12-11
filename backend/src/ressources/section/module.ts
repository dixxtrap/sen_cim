import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from 'src/ressources/typeorm';
import { SectionController } from './controller';
import { SectionService } from './service';
import { MulterConfig } from 'src/utils/multer.config';
import { ExcelService } from 'src/utils/excel.service';

@Module({
  imports: [TypeOrmModule.forFeature([Section]), MulterConfig],
  controllers: [SectionController],
  providers: [SectionService, ExcelService],
  exports: [SectionService],
})
export class SectionModule {}
