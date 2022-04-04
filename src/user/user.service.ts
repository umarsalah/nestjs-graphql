import { Injectable } from '@nestjs/common';
import { v4 as uuid4 } from 'uuid';

import {
  CreateUserInput,
  DeleteUserInput,
  UpdateUserInput,
} from './dto/inputs';
import { GetUserArgs, GetUsersArgs } from './dto/args';

import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  getUser(userArgs: GetUserArgs): User {
    return this.users.find((user) => user.id === userArgs.id);
  }

  getUsers(usersData: GetUsersArgs): User[] {
    return usersData.ids.map((id) => this.getUser({ id }));
  }

  createUser(userData: CreateUserInput): User {
    const user: User = {
      id: uuid4(),
      ...userData,
    };
    this.users.push(user);
    return user;
  }

  updateUser(userData: UpdateUserInput): User {
    const user = this.users.find((user) => user.id === userData.id);
    if (user) {
      Object.assign(user, userData);
    }
    return user;
  }

  deleteUser(deletedUserData: DeleteUserInput): boolean {
    const user = this.getUser(deletedUserData);
    if (user) {
      this.users = this.users.filter((user) => user.id !== deletedUserData.id);
      return true;
    }
    return false;
  }
}
