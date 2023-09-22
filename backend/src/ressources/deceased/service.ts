import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Deceased } from "src/typeorm";
import { Repository } from "typeorm";
import { DeceasedDto } from "./dto";



@Injectable()
export class DeceasedService{
    constructor(
        @InjectRepository(Deceased) private repos: Repository<Deceased>
    ){}

    async get(){
        return await this.repos.find()
    }

    async getById(id: number){
        return await this.repos.findOne({where: {id}})
    }

    async create(body: DeceasedDto){
        return await this.repos.save(this.repos.create(body))
    }

    async update(id: number, body: DeceasedDto){
        return await this.repos.update(id, {...body})
    }

    async delete(id: number){
        return await this.repos.delete(id)
    }
}