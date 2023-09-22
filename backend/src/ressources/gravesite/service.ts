import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Gravesite } from "src/typeorm";
import { Repository } from "typeorm";
import { GravesiteDto } from "./dto";

@Injectable()
export class GravesiteService{
    constructor(@InjectRepository(Gravesite) private repos: Repository<Gravesite>){}

    async get(){
        return await this.repos.find()
    }

    async create(body: GravesiteDto){
        return await this.repos.save(this.repos.create(body))
    }

    async getById(id: number){
        return await this.repos.findOne({where: {id}})
    }
    
    async update(id: number, body: GravesiteDto){
        return await this.repos.update(id, {...body})
    }

    async delete(id: number){
        return await this.repos.delete({id})
    }
}