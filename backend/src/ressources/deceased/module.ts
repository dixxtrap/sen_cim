import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Burial,
  Deceased,
  Gravesite,
  Row,
  Section,
} from 'src/ressources/typeorm';
import { DeceasedController } from './controller';
import { DeceasedService } from './service';
import { MulterConfig } from 'src/utils/multer.config';
import { ExcelService } from 'src/utils/excel.service';
import { SectionModule } from '../section/module';
import { RowModule } from '../row/module';
import { OwnerShipRecordModule } from '../ownerShipRecord/module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Deceased, Burial, Row, Gravesite]),
    SectionModule,
    RowModule,
    OwnerShipRecordModule,
    MulterConfig,
  ],
  controllers: [DeceasedController],
  providers: [DeceasedService, ExcelService],
})
export class DeceasedModule {}
