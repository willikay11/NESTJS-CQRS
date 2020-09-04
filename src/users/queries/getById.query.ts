import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';

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
    @InjectRepository(Users)
    private readonly _repository: Repository<Users>
  ) {}

  public async execute(query: GetUserByIdQuery): Promise<Users> {
    // We fetch user data and return it on the execute method
    return await this._repository.findOne(query.id);
  }
}