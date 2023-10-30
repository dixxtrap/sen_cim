import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishes, DeceasedWishes } from 'src/typeorm';
import { WishControlller } from './controller';
import { WishService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([DeceasedWishes, Wishes])],
  controllers: [WishControlller],
  providers: [WishService],
})
export class WishModule {}
