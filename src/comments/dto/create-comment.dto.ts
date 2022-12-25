import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ maxLength: 100 })
  content: string;
}
