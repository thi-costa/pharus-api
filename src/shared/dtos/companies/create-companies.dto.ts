import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  phone: number;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
