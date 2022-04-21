import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateLoginCredentialsDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  student_id: string;

  @IsOptional()
  school_id: string;

  @IsOptional()
  company_id: string;
}
