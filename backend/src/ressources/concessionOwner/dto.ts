import { ApiProperty } from "@nestjs/swagger";


export class ConcessionOwnerDto{
    @ApiProperty()
    id: number
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    phone: number;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}