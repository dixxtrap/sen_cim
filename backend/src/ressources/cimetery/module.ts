import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cimetery } from 'src/ressources/typeorm';
import { CimeteryController } from './controller';
import { CimeteryService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Cimetery])],
  controllers: [CimeteryController],
  providers: [CimeteryService],
})
export class CimeteryModule {}
