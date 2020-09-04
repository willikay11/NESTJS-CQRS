import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';
import { NotFoundException } from '@nestjs/common';

export class UpdateUserCommand {
  constructor(
    public id: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public phone?: string
  ) { }
}@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements IQueryHandler<UpdateUserCommand>
{
  constructor(
    @InjectRepository(Users)
    private readonly _repository: Repository<Users>
  ) { }
  public async execute(request: UpdateUserCommand): Promise<Users>
  {
    const user = await this._repository.findOne(request.id);
    if (!user)
    throw new NotFoundException('User does not exist');

    user.first_name = request.firstName || user.first_name;
    user.last_name = request.lastName || user.last_name;
    user.email = request.email || user.email;
    user.phone = request.phone|| user.phone;

    return await this._repository.save( user );
  }
}