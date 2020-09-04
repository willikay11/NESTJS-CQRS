import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Users } from '../entities/user.entity';
import { UsersService } from '../users.service';

export class  ListUsersQuery {
  constructor(
    public page: number = 1,
    public pageSize: number = 10
  ) {}
}

@QueryHandler(ListUsersQuery)
export class ListHandler implements IQueryHandler<ListUsersQuery> {
  constructor(
    private usersService: UsersService
  ) {}

  async execute(query: ListUsersQuery): Promise<Users[]> {
    // Here we are going to have any necessary logic related
    // to that Query and return the request information
    // such as a service method call
    const users = await this.usersService.findAll();
    console.log(users);
    return users;
  }
}