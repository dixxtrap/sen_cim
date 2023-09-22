import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Deceased } from "src/typeorm";
import { DeceasedController } from "./controller";
import { DeceasedService } from "./service";


@Module({
    imports:[TypeOrmModule.forFeature([Deceased])],
    controllers:[DeceasedController],
    providers:[DeceasedService]
})
export class DeceasedModule{}