import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

export const MulterConfig = MulterModule.register({
  preservePath: false,

  dest: 'upload',
  storage: diskStorage({
    destination: 'upload', // Dossier de destination où les fichiers téléchargés seront stockés
  }),
});

export const fileInterceptor = FileInterceptor('file', {
  dest: 'upload',
  storage: diskStorage({
    destination: (req, file, cb) => {
      console.log('------------------destination file-------------------');
      console.log(file);
      console.log(file);
      cb(null, 'upload');
    }, // Dossier de destination où les fichiers téléchargés seront stockés
    filename: (req, file, callback) => {
      console.log('------------------destination file name-------------------');

      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');

      return callback(null, `${randomName}${extname(file.originalname)}`);
    },
  }),
});
