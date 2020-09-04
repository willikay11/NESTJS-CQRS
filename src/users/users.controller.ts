import { Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ListUsersQuery } from './queries/list.query';
import { GetUserByIdQuery } from './queries/getById.query';

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
  }

  @Get('/user/:id')
  public async getUser(
    @Param() param: GetUserByIdQuery,
    @Res() response
  ) {
    const user = await this.queryBus.execute(
      new GetUserByIdQuery(param.id)
    );

    response.status(HttpStatus.OK).json(user);
  }
}