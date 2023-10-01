import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flower } from 'src/typeorm';
import { FlowerController } from './controller';
import { FlowerService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Flower])],
  controllers: [FlowerController],
  providers: [FlowerService],
})
export class FlowerModule {}
