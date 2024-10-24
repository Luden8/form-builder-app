import { Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
import { UsersRestApiService } from './users-rest-api.service';
import { User } from '@form-builder-app/db-configuration';

@Controller('users')
export class UsersRestApiController {
  constructor(private usersRestApiService: UsersRestApiService) {}

  @Get()
  findAll() {
    return this.usersRestApiService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersRestApiService.findOne(id)
  }

  @Post()
  create() {
    return this.usersRestApiService.create()
  }

  @Patch(':id')
  update(@Param('id') id: number, updatedUser: User) {
    return this.usersRestApiService.update(id, updatedUser)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersRestApiService.delete(id)
  }
}
