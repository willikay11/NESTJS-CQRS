import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';

export class DeleteUserCommand {
  constructor(
    public id: number
  ) { }
}@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements IQueryHandler<DeleteUserCommand>
{
  constructor(
    @InjectRepository(Users)
    private readonly _repository: Repository<Users>
  ) { }    public async execute(request: DeleteUserCommand):
  Promise<DeleteResult>
{
  return await this._repository.delete({
    'id': request.id
  });
}
}