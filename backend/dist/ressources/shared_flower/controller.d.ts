import { SharedFlowerService } from './service';
import { SharedFlowerDto } from './dto';
export declare class SharedFlowerController {
    private service;
    constructor(service: SharedFlowerService);
    getS(): Promise<import("../../typeorm").SharedFlower[]>;
    create(body: SharedFlowerDto): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
}
