import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  titiel: string;

  @IsString()
  @IsOptional()
  description: string;
}
