// /* eslint-disable @typescript-eslint/no-empty-function */
// import { ListUsersQuery } from '../queries/list.query';
// import { CommandHandler, ICommandHandler, IQueryHandler } from '@nestjs/cqrs';
//
// export class AddUserCommand {
//   constructor(
//     public name: string,
//     public email: string,
//     public birthdate: Date
//   ) { }
// }
//
// @CommandHandler(AddUserCommand)
// export class AddUserHandler implements IQueryHandler<AddUserCommand> {
//   constructor(
//     // Here we would inject what is necessary to persist our data
//   ) { }
//   public async execute(query: AddUserCommand): Promise<User> {
//     // Here we are going to have any necessary logic related
//     // to that Command and do any change operations
//   }
// }