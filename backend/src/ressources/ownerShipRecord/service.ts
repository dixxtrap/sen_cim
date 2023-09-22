import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OwnerShipRecord } from "src/typeorm";
import { Repository } from "typeorm";
import { OwnerShipRecordDto } from "./dto";


@Injectable()
export class OwnerShipRecordService{
    constructor(
        @InjectRepository(OwnerShipRecord) private repos: Repository<OwnerShipRecord>
    ){}

    async get(){
        return await this.repos.find()
    }

    async getById(id: number){
        return await this.repos.findOne({where: {id}})
    }

    async create(body: OwnerShipRecordDto){
        return await this.repos.save(this.repos.create(body))
    }

    async update(id: number, body: OwnerShipRecordDto){
        return await this.repos.update({id}, {...body})
    }

    async delete(id :number){
        return await this.repos.delete(id)
    }
}