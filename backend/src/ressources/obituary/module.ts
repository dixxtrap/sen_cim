import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { Obituary } from 'src/typeorm';
import { ObituaryController } from './controller';
import { ObituaryService } from './service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Obituary]),
    MulterModule.register({
      preservePath: false,

      dest: './src/upload',
      storage: diskStorage({
        destination: './src/upload', // Dossier de destination où les fichiers téléchargés seront stockés
      }),
    }),
  ],
  controllers: [ObituaryController],
  providers: [ObituaryService],
})
export class ObituaryModule {}
