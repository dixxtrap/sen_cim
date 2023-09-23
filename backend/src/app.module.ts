import { Module } from '@nestjs/common';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
