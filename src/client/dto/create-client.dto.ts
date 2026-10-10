import { IsEnum, IsNotEmpty, IsString, Matches } from 'class-validator';
import { ClientCategory } from '../enums/client-category.enum';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  shopName: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @Matches(/^[0-9+\s-]{8,15}$/, { message: 'phone is not valid' })
  phone: string;

  @IsEnum(ClientCategory)
  category: ClientCategory;
}