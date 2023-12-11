import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeceasedFlower, SharedFlower } from 'src/ressources/typeorm';
import { SharedFlowerController } from './controller';
import { SharedFlowerService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([SharedFlower, DeceasedFlower])],
  controllers: [SharedFlowerController],
  providers: [SharedFlowerService],
})
export class SharedFlowerModule {}
