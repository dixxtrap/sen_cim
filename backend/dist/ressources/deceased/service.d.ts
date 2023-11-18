import { Burial, Deceased, Gravesite, Row, Section } from 'src/ressources/typeorm';
import { Repository } from 'typeorm';
import { DeceasedDto, SearchDeceasedDto } from './dto';
import { PaginationDto } from 'src/utils/pagination_dto';
export declare class DeceasedService {
    private repos;
    private burial;
    private section;
    private row;
    private gravesite;
    constructor(repos: Repository<Deceased>, burial: Repository<Burial>, section: Repository<Section>, row: Repository<Row>, gravesite: Repository<Gravesite>);
    get(): Promise<Deceased[]>;
    search(body: SearchDeceasedDto, pagination: PaginationDto): Promise<Deceased[]>;
    getById(id: number): Promise<Deceased>;
    create(body: DeceasedDto): Promise<Burial>;
    update(id: number, body: DeceasedDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
