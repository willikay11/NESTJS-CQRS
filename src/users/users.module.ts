import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { Users } from './entities/user.entity';
import { QueryHandlers } from './queries';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    CqrsModule
  ],
  providers: [
    ...QueryHandlers,
    UsersService
  ],
  controllers: [UserController],
})
export class UsersModule {}