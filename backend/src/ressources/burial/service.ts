import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Burial } from "src/typeorm";
import { Repository } from "typeorm";
import { BurialDto } from "./dto";



@Injectable()
export class BurialService {
    constructor(
        @InjectRepository(Burial) private repos: Repository<Burial>
    ){}

    async get(){
        return await this.repos.find()
    }

    async create(body: BurialDto){
        return await this.repos.save(this.repos.create(body))
    }

    async getById(id: number){
        return await this.repos.findOne({where: {id}})
    }

    async update(id: number, body: BurialDto){
        return await this.repos.update(id, {...body})
    }

    async delete(id: number){
        return await this.repos.delete(id)
    }
}