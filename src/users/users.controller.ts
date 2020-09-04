import { Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ListUsersQuery } from './queries/list.query';

@Controller('api')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

@Get('/users')
public async getAllUsers(
    @Query() request: ListUsersQuery,
    @Res() response
  ) {
  const users = await this.queryBus.execute(
    new ListUsersQuery(
      request.page,
      request.pageSize
    )
  );

  response.status(HttpStatus.OK).json(users);
}}