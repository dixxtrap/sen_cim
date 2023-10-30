import { DeceasedWishes, Wishes } from 'src/typeorm';
import { Repository } from 'typeorm';
import { WishDto } from './dto';
import { PaginationDto } from 'src/utils/pagination_dto';
export declare class WishService {
    private repos;
    private reposDeceasedWish;
    constructor(repos: Repository<Wishes>, reposDeceasedWish: Repository<DeceasedWishes>);
    get(pagination: PaginationDto): Promise<{
        page: number;
        pageSize: number;
        totalItems: number;
        totalPages: number;
        items: Wishes[];
    }>;
    getById(id: number): Promise<Wishes>;
    create(body: WishDto): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
}
