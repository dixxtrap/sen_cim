import { Burial } from 'src/ressources/typeorm';
import { Repository } from 'typeorm';
import { BurialDto } from './dto';
import { SearchDeceasedDto } from '../deceased/dto';
import { PaginationDto } from 'src/utils/pagination_dto';
export declare class BurialService {
    private repos;
    constructor(repos: Repository<Burial>);
    get(): Promise<Burial[]>;
    search(body: SearchDeceasedDto, pagination: PaginationDto): Promise<{
        totalPage: number;
        data: Burial[];
        length: number;
        hasNext: boolean;
    }>;
    create(body: BurialDto): Promise<Burial>;
    getById(id: number): Promise<Burial>;
    update(id: number, body: BurialDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
