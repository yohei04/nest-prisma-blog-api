import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({ maxLength: 20 })
  name: string;
}
