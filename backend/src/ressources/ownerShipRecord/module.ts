import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerShipRecord } from 'src/ressources/typeorm';
import { OwnerShipRecordController } from './controller';
import { OwnerShipRecordService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([OwnerShipRecord])],
  controllers: [OwnerShipRecordController],
  providers: [OwnerShipRecordService],
  exports: [OwnerShipRecordService],
})
export class OwnerShipRecordModule {}
