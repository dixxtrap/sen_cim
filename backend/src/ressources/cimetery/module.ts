import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cimetery } from 'src/ressources/typeorm';
import { CimeteryController } from './controller';
import { CimeteryService } from './service';
import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cimetery]),
    MulterModule.register({
      preservePath: false,

      dest: 'upload',
      storage: diskStorage({
        destination: 'upload', // Dossier de destination où les fichiers téléchargés seront stockés
      }),
    }),
  ],
  controllers: [CimeteryController],
  providers: [CimeteryService],
})
export class CimeteryModule {}
