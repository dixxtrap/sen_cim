import { WishService } from './service';
import { WishDto } from './dto';
import { PaginationDto } from 'src/utils/pagination_dto';
export declare class WishControlller {
    private service;
    constructor(service: WishService);
    get(query: PaginationDto): Promise<{
        page: number;
        pageSize: number;
        totalItems: number;
        totalPages: number;
        items: import("../typeorm").Wishes[];
    }>;
    create(body: WishDto): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
    getById(id: number): Promise<import("../typeorm").Wishes>;
}
