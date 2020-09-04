import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ListUsersQuery } from './queries/list.query';
import { GetUserByIdQuery } from './queries/getById.query';
import { AddUserCommand } from './commands/addUser.command';

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

  @Post('/user')
  public async createUser(
    @Body() body: AddUserCommand,
    @Res() response
  ) {
    const user = await this.commandBus.execute(
      new AddUserCommand(body.firstName, body.lastName, body.email, body.phone)
    );

    response.status(HttpStatus.CREATED).json({
      message: 'Created!',
      user: user
    });
  }
}