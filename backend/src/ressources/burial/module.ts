import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Burial } from "src/typeorm";
import { BurialController } from "./controller";
import { BurialService } from "./service";


@Module({
    imports:[TypeOrmModule.forFeature([Burial])],
    controllers:[BurialController],
    providers:[BurialService]
})
export class BurialModule{}