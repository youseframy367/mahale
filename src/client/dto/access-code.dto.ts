import { IsString, Length } from 'class-validator';

export class AccessCodeDto {
  @IsString()
  @Length(8, 8)
  code: string;
}