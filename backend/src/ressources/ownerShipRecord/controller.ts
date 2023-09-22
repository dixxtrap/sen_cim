import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OwnerShipRecordService } from "./service";
import { OwnerShipRecordDto } from "./dto";




@Controller('ownerShipRecord')
@ApiTags('OwnerShipRecord')
export class OwnerShipRecordController{
    constructor(
        private service: OwnerShipRecordService
    ){}

    @Get()
    get(){
        return this.service.get()
    }

    @Get(':id')
    getById(@Param('id') id: number){
        return this.service.getById(id)
    }

    @Post()
    create(@Body() body: OwnerShipRecordDto){
        return this.service.create(body)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: OwnerShipRecordDto){
        return this.service.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.delete(id)
    }
}