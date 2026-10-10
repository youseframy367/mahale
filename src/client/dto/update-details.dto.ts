import { Transform } from 'class-transformer';
import { IsBoolean, Matches } from 'class-validator';

export class UpdateDetailsDto {
  @Matches(/^[0-9+\s-]{8,15}$/, { message: 'customerPhone is not valid' })
  customerPhone: string;

  // form-data بيبعت كل حاجة نص، فلازم نحوّلها لـ boolean
  @Transform(({ value }) => value === true || value === 'true')
  @IsBoolean()
  hasDelivery: boolean;
}