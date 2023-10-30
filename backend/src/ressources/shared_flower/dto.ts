import { ApiProperty } from '@nestjs/swagger';

export class SharedFlowerDto {
  @ApiProperty()
  flowerId: number;
  @ApiProperty()
  comment: string;
  @ApiProperty()
  sign: string;
  deceasedId: number;
}
