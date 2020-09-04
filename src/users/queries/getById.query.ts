import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Users } from '../entities/user.entity';
import { UsersService } from '../users.service';

// All we need is the id of the user we want to retrieve the data
export class GetUserByIdQuery {
  constructor(
    public id: number
  ) {}
}

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
  // We inject our TypeORM repository to fetch the user data
  constructor(
    private usersService: UsersService
  ) {}

  public async execute(query: GetUserByIdQuery): Promise<Users> {
    // We fetch user data and return it on the execute method
    return await this.usersService.findOne(query.id);
  }
}