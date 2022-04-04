import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  age?: number;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  isActive?: boolean;
}
