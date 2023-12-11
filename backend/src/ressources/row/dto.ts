import { ApiProperty } from '@nestjs/swagger';
export class RowDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  numero: string;
  @ApiProperty()
  emplacement?: string;
  @ApiProperty()
  capacity?: number;
  @ApiProperty()
  sectionId: number;
}
