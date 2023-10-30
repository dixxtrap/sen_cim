import { ApiProperty } from '@nestjs/swagger';

export class WishDto {
  id: number;
  @ApiProperty()
  wish: string;
  @ApiProperty()
  sign: string;
  deceasedId: number;
}
