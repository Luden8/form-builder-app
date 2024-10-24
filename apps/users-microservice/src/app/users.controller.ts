import { Controller } from '@nestjs/common';

import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';
import { User } from '@form-builder-app/db-configuration';

@Controller()
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @MessagePattern('users.findAll')
  findAll() {
    return this.appService.findAll();
  }

  @MessagePattern('users.findOne')
  findOne(id: number) {
    return this.appService.findOne(id);
  }

  @MessagePattern('users.create')
  create() {
    return this.appService.create();
  }

  @MessagePattern('users.update')
  update(id: number, updatedUser: User) {
    return this.appService.update(id, updatedUser);
  }

  @MessagePattern('users.delete')
  delete(id: number) {
    return this.appService.delete(id);
  }
}
