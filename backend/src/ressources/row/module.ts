import { TypeOrmModule } from '@nestjs/typeorm';
import { Row } from 'src/ressources/typeorm';
import { RowController } from './controller';
import { RowServive } from './service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Row])],
  controllers: [RowController],
  providers: [RowServive],
})
export class RowModule {}
