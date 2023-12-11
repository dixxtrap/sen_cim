import { Module } from '@nestjs/common';
import { Gravesite } from 'src/ressources/typeorm';
import { GravesiteController } from './controller';
import { GravesiteService } from './service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Gravesite])],
  controllers: [GravesiteController],
  providers: [GravesiteService],
})
export class GravesiteModule {}
