import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { Obituary } from 'src/ressources/typeorm';
import { ObituaryController } from './controller';
import { ObituaryService } from './service';
import { MulterConfig } from 'src/utils/multer.config';

@Module({
  imports: [TypeOrmModule.forFeature([Obituary]), MulterConfig],
  controllers: [ObituaryController],
  providers: [ObituaryService],
})
export class ObituaryModule {}
