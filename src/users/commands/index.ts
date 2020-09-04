import { AddUserHandler } from './addUser.command';
import { UpdateUserHandler } from './updateUser.command';
import { DeleteUserHandler } from './deleteUser.command';

export const CommandHandlers = [
  AddUserHandler,
  UpdateUserHandler,
  DeleteUserHandler
];