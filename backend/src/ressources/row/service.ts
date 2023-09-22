import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Row } from "src/typeorm";
import { Repository } from "typeorm";
import { RowDto } from "./dto";


@Injectable()
export class RowServive{
    constructor(
        @InjectRepository(Row) private repos: Repository<Row>
    ){}

    async get(){
        return await this.repos.find()
    }

    async create(body: RowDto){
        return await this.repos.save(this.repos.create(body))
    }

    async getById(id: number){
        return await this.repos.findOne({where : {id}})
    }

    async update(id: number, body: RowDto){
        return await this.repos.update(id, {...body})
    }

    async delete(id : number){
        return await this.repos.delete({id})
    }
}