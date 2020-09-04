// export class UpdateUserCommand {
//   constructor(
//     public id: number,
//     public name?: string,
//     public email?: string,
//     public birthdate?: Date
//   ) { }
// }@CommandHandler(UpdateUserCommand)
// export class UpdateUserHandler implements IQueryHandler<UpdateUserCommand>
// {
//   constructor(
//     @InjectRepository(User)
//     private readonly _repository: Repository<User>
//   ) { }    public async execute(request: UpdateUserCommand): Promise<User>
// {
//   const user = await this._repository.findOne(request.id);      if (!user)
//   throw new NotFoundException('User does not exist');      user.name = request.name || user.name;
//   user.email = request.email || user.email;
//   user.birthdate = request.birthdate|| user.birthdate;      return await this._repository.save( user );
// }
// }