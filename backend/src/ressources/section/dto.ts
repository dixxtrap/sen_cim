import { ApiProperty } from '@nestjs/swagger';
import { Cimetery, Row } from 'src/typeorm';
import { CimeteryDto } from '../cimetery/dto';
import { DeepPartial } from 'typeorm';

export class SectionDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  link: string;
  @ApiProperty()
  comment: string;
  @ApiProperty()
  laltitude: number;
  @ApiProperty()
  longitude: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  cimeteryId: number;
}
