import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

export const MulterConfig = MulterModule.register({
  preservePath: false,

  dest: 'upload',
  storage: diskStorage({
    destination: 'upload', // Dossier de destination où les fichiers téléchargés seront stockés
  }),
});
