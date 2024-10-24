import { Controller, Delete, Get, Param, Patch, Post, Body } from '@nestjs/common';
import { StepsRestApiService } from './steps-rest-api.service';
import { User } from '@form-builder-app/db-configuration';

@Controller('steps')
export class StepsRestApiController {
  constructor(private stepsRestApiService: StepsRestApiService) {}

  @Get()
  findAll() {
    return this.stepsRestApiService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.stepsRestApiService.findOne(id)
  }

  @Post()
  create() {
    return this.stepsRestApiService.create()
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatedUser: User) {
    return this.stepsRestApiService.update(id, updatedUser)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.stepsRestApiService.delete(id)
  }
}
