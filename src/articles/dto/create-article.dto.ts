import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({ maxLength: 20 })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  description?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  body: string;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
