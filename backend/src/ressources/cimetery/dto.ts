import { ApiProperty } from '@nestjs/swagger';

export const getLocalisation = (str?: string) => {
  const list = str?.split(',');
  if (list?.length === 2)
    return { laltitude: parseFloat(list[0]), longitude: parseFloat(list[1]) };
  else
    return {
      laltitude: null,
      longitude: null,
    };
};
export class CimeteryDto {
  id?: number;
  localisation?: string;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  address?: string;
  @ApiProperty()
  city?: string;
  @ApiProperty()
  country?: string;
  @ApiProperty()
  link?: string;
  @ApiProperty()
  phone?: string;
  @ApiProperty()
  laltitude?: number;
  @ApiProperty()
  longitude?: number;
  @ApiProperty()
  isActive?: boolean;
  @ApiProperty()
  photo?: string;
  @ApiProperty()
  confession?: string;
}
