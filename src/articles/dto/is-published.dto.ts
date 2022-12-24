import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class IsPublishedDto {
  @IsOptional()
  @Transform((query) => query.value === 'true')
  published: boolean;
}
