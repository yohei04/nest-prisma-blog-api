import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({ example: '名前', minLength: 5 })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'example@example.com', uniqueItems: true })
  email: string;
}
