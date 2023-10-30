import { BurialService } from './service';
import { BurialDto, SearchBurialDto } from './dto';
import { PaginationDto } from 'src/utils/pagination_dto';
export declare class BurialController {
    private service;
    constructor(service: BurialService);
    get(): Promise<import("../../typeorm").Burial[]>;
    search(body: SearchBurialDto, param: PaginationDto): Promise<import("../../typeorm").Burial[]>;
    getById(id: number): Promise<import("../../typeorm").Burial>;
    create(body: BurialDto): Promise<import("../../typeorm").Burial>;
    update(id: number, body: BurialDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
