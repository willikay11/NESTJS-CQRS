/* eslint-disable @typescript-eslint/no-empty-function */
import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { Users } from '../entities/user.entity';
import { UsersService } from '../users.service';

export class AddUserCommand {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string
  ) { }
}

@CommandHandler(AddUserCommand)
export class AddUserHandler implements IQueryHandler<AddUserCommand> {
  constructor(
    private usersService: UsersService
  ) {}
  public async execute(query: AddUserCommand): Promise<Users> {
    // Here we are going to have any necessary logic related
    // to that Command and do any change operations
    const params = {
      first_name: query.firstName,
      last_name: query.lastName,
      email: query.email,
      phone: query.phone
    }
    const user = this.usersService.create(params);

    return user;
  }
}