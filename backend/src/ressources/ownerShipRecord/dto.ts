import { ApiProperty } from '@nestjs/swagger';

export class OwnerShipRecordDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  ownerShipStartDate?: Date;
  @ApiProperty()
  gravesiteId: number;
  @ApiProperty()
  ownerShipName?: string;
  @ApiProperty()
  ownerShipPhone?: string;
  @ApiProperty()
  ownerShipAddress?: string;
}
