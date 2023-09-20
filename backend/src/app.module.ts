import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CimeteryModule } from './ressources/cimetery/module';
import config from './mysql.config';
import { SectionModule } from './ressources/section/module';

@Module({
  imports: [TypeOrmModule.forRoot(config), CimeteryModule, SectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
