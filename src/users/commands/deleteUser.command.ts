// export class DeleteUserCommand {
//   constructor(
//     public id: number
//   ) { }
// }@CommandHandler(DeleteUserCommand)
// export class DeleteUserHandler implements IQueryHandler<DeleteUserCommand>
// {
//   constructor(
//     @InjectRepository(User)
//     private readonly _repository: Repository<User>
//   ) { }    public async execute(request: DeleteUserCommand):
//   Promise<DeleteResult>
// {
//   return await this._repository.delete({
//     'id': request.id
//   });
// }
// }