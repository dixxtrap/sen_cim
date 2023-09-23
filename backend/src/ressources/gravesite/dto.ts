import { ApiProperty } from '@nestjs/swagger';

export class GravesiteDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  platNumber: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  purchase: Date;
  @ApiProperty()
  rowId: number;
}
