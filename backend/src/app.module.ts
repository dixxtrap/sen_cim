import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import * as express from 'express';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CimeteryModule } from './ressources/cimetery/module';
import config from './mysql.config';
import { SectionModule } from './ressources/section/module';
import { RowModule } from './ressources/row/module';
import { GravesiteModule } from './ressources/gravesite/module';
import { BurialModule } from './ressources/burial/module';
import { DeceasedModule } from './ressources/deceased/module';
import { OwnerShipRecordModule } from './ressources/ownerShipRecord/module';
import { ConcessionOwnerModule } from './ressources/concessionOwner/module';
import { FlowerModule } from './ressources/flower/module';
import { WishModule } from './ressources/wish/module';
import { SharedFlowerModule } from './ressources/shared_flower/module';
import { ObituaryModule } from './ressources/obituary/module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    CimeteryModule,
    SectionModule,
    RowModule,
    GravesiteModule,
    BurialModule,
    DeceasedModule,
    OwnerShipRecordModule,
    ConcessionOwnerModule,
    FlowerModule,
    WishModule,
    SharedFlowerModule,
    ObituaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log(
      `------------------${path.join(__dirname, 'upload')}-----------------`,
    );
    // Serve static assets from the "public" directory at the '/assets' route
    consumer
      .apply(express.static(path.join(__dirname, 'upload/')))
      .forRoutes({ path: 'uploads', method: RequestMethod.GET });
  }
}
