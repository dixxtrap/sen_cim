import { ApiProperty } from '@nestjs/swagger';

export class DeceasedDto {
  @ApiProperty()
  sectionName: string;
  @ApiProperty()
  rowName: string;

  // Inhumation
  @ApiProperty()
  platNumber: string;
  @ApiProperty()
  burialDate: Date;
  burialDateMonth?: string;
  burialDateDay?: string;
  burialDateYear?: string;
  @ApiProperty()
  burialPermitNumber: string;
  // DeceasedDto
  @ApiProperty()
  id?: number;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  placeOfBirth: string;
  @ApiProperty()
  placeOfDeath: string;
  @ApiProperty()
  dateOfBirth?: Date;
  dateOfBirthStr?: string;

  dateOfDeathDay?: string;
  dateOfDeathMonth?: string;
  dateOfDeathYear?: string;
  @ApiProperty()
  dateOfDeath: Date;
  dateOfDeathStr?: string;

  @ApiProperty()
  gender?: string;
  @ApiProperty()
  photo?: string;
  cimeteryId?: number;
  ownShipName?: string;
  ownShipAddress?: string;
  ownShipPhone?: string;
}

export class SearchDeceasedDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  year: number;
}
