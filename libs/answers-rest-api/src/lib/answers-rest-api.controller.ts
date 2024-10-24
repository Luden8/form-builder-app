import { Controller, Get, Patch, Post, Delete, Body } from '@nestjs/common';
import { AnswersRestApiService } from './answers-rest-api.service';
import { Answer } from '@form-builder-app/db-configuration';

@Controller('answers')
export class AnswersRestApiController {
  constructor(private answersRestApiService: AnswersRestApiService) {}
  @Get()
  findAll() {
    return this.answersRestApiService.findAll()
  }
  @Get(':id')
  findOne(id: number) {
    return this.answersRestApiService.findOne(id)
  }

  @Post()
  create(@Body() newAnswer: Answer) {
    return this.answersRestApiService.create(newAnswer)
  }

  @Patch(':id')
  update(id: number, updatedAnswer: Answer) {
    return this.answersRestApiService.update(id, updatedAnswer)
  }

  @Delete(':id')
  delete(id: number) {
    return this.answersRestApiService.delete(id)
  }
}
