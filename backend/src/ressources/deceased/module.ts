import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Burial, Deceased, Gravesite, Row, Section } from 'src/typeorm';
import { DeceasedController } from './controller';
import { DeceasedService } from './service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Deceased, Burial, Section, Row, Gravesite]),
  ],
  controllers: [DeceasedController],
  providers: [DeceasedService],
})
export class DeceasedModule {}
