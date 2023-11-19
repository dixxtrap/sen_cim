import { ApiProperty } from '@nestjs/swagger';
export class CimeteryDto {
  id?: number;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  email!: string;
  @ApiProperty()
  description!: string;
  @ApiProperty()
  address!: string;
  @ApiProperty()
  city!: string;
  @ApiProperty()
  country!: string;
  @ApiProperty()
  link!: string;
  @ApiProperty()
  phone!: string;
  @ApiProperty()
  laltitude!: number;
  @ApiProperty()
  longitude!: number;
  @ApiProperty()
  isActive!: boolean;
  @ApiProperty()
  photo!: string;
  @ApiProperty()
  confession!: string;
}
