import { ApiProperty } from "@nestjs/swagger";



export class DeceasedDto{
    @ApiProperty()
    id:number
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    placeOfBirth: string;
    @ApiProperty()
    placeOfDeath: string;
    @ApiProperty()
    dateOfBirth: Date;
    @ApiProperty()
    dateOfDeath: Date;
    @ApiProperty()
    gender: string;
    @ApiProperty()
    photo: string;
}