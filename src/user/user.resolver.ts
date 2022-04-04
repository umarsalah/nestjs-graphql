import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';

import {
  CreateUserInput,
  DeleteUserInput,
  UpdateUserInput,
} from './dto/inputs';
import { GetUserArgs, GetUsersArgs } from './dto/args';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() userArgs: GetUserArgs): User {
    return this.userService.getUser(userArgs);
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUsers(@Args() usersArgs: GetUsersArgs): User[] {
    return this.userService.getUsers(usersArgs);
  }

  @Mutation(() => User)
  createUser(@Args('userData') userData: CreateUserInput): User {
    return this.userService.createUser(userData);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.userService.updateUser(updateUserData);
  }

  @Mutation(() => Boolean)
  deleteUser(
    @Args('deletedUserData') deletedUserData: DeleteUserInput,
  ): boolean {
    return this.userService.deleteUser(deletedUserData);
  }
}
