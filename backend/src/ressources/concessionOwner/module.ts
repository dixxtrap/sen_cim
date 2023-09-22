import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConcessionOwner, Deceased } from "src/typeorm";
import { ConcessionOwnerController } from "./controller";
import { ConcessionOwnerService } from "./service";



@Module({
    imports:[TypeOrmModule.forFeature([ConcessionOwner])],
    controllers:[ConcessionOwnerController],
    providers:[ConcessionOwnerService]
})
export class ConcessionOwnerModule{}