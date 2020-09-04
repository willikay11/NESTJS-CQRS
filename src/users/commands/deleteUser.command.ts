import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { UsersService } from '../users.service';

export class DeleteUserCommand {
  constructor(
    public id: number
  ) { }
}

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements IQueryHandler<DeleteUserCommand>
{
  constructor(
    private usersService: UsersService
  ) { }

  public async execute(request: DeleteUserCommand): Promise<void>
  {
    return await this.usersService.remove(request.id);
  }
}