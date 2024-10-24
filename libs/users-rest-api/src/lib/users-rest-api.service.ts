import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '@form-builder-app/db-configuration';

@Injectable()
export class UsersRestApiService {
  constructor(@Inject('USERS_CLIENT') private usersClient: ClientProxy) {}
  findAll() {
    return this.usersClient.send('users.findAll', {})
  }

  findOne(id: number) {
    return this.usersClient.send('users.findOne', id)
  }

  create() {
    return this.usersClient.send('users.create', {})
  }


  update(id: number, updatedUser: User) {
    return this.usersClient.send('users.update', { id, updatedUser})
  }

  delete(id: number) {
    return this.usersClient.send('users.delete', id)
  }
}
