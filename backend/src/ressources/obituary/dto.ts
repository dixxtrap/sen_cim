import { ApiProperty } from '@nestjs/swagger';

export class ObituaryDto {
  fileName: string;
  fileUrl: string;
  @ApiProperty()
  placeOfDeath: string;
  @ApiProperty()
  deceasedFirstname: string;
  @ApiProperty()
  deceasedLastname: string;
  @ApiProperty()
  deceasedDate: string;
  @ApiProperty()
  cause: string;
  @ApiProperty()
  userDisplayName: string;
}
