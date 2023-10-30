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
  @ApiProperty()
  burialPermitNumber: string;
  // DeceasedDto
  @ApiProperty()
  id: number;
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

export class SearchDeceasedDto  {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  year: number;
}
