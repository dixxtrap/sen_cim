import { ApiProperty } from '@nestjs/swagger';
import { SearchDeceasedDto } from '../deceased/dto';

export class BurialDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  burialDate: Date;
  @ApiProperty()
  funeralType: string;
  @ApiProperty()
  issuingMunicipality: string;
  @ApiProperty()
  burialPermitNumber: string;
  @ApiProperty()
  issueIn: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  dateOfIssuanceOfThePermit: Date;
  @ApiProperty()
  receiptNumber: string;
  @ApiProperty()
  amountPaid: number;
  @ApiProperty()
  allocatedTombVaultArea: number;
  @ApiProperty()
  gravesiteId: number;
  @ApiProperty()
  deceasedId: number;
}

export class SearchBurialDto extends SearchDeceasedDto {
  @ApiProperty()
  cimeteryName: string;
  @ApiProperty()
  burialDate: Date;
}
