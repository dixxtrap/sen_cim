import { ApiProperty } from '@nestjs/swagger';

export class FlowerDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  comment: string;
  @ApiProperty()
  photo: string;
  @ApiProperty()
  photoText: string;
}
