import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ConcessionOwnerService } from "./service";
import { ConcessionOwnerDto } from "./dto";




@Controller('concessionOwner')
@ApiTags('ConcessionOwner')
export class ConcessionOwnerController{
    constructor(
        private service: ConcessionOwnerService
    ){}

    @Get()
    get(){
        return this.service.get();
    }

    @Get(':id')
    getById(@Param('id') id: number){
        return this.service.getById(id)
    }

    @Post() 
    create(@Body() body: ConcessionOwnerDto){
        return this.service.create(body)
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() body: ConcessionOwnerDto){
        return this.service.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.service.delete(id)
    }
}