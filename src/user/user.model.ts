import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => Int)
  age: number;

  @Field({ nullable: true })
  isActive?: boolean;
}
