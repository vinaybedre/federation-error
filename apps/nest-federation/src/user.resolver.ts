import { Query, Resolver } from '@nestjs/graphql';
import { UserDto } from './user.dto';

@Resolver()
export class UserResolver {
  @Query(() => UserDto, { name: 'username' })
  getUsername(): UserDto {
    return { id: 'id', name: 'name' };
  }
}
