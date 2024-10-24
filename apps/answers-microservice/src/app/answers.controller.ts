import { Controller } from '@nestjs/common';

import { AnswersService } from './answers.service';
import { MessagePattern } from '@nestjs/microservices';
import { Answer } from '@form-builder-app/db-configuration';

@Controller()
export class AnswersController {
  constructor(private readonly appService: AnswersService) {}

  @MessagePattern('answers.findAll')
  findAll() {
    return this.appService.findAll();
  }

  @MessagePattern('answers.findOne')
  findOne(id: number) {
    return this.appService.findOne(id);
  }

  @MessagePattern('answers.create')
  create(newAnswer: Answer) {
    return this.appService.create(newAnswer);
  }

  @MessagePattern('answers.update')
  update(id: number, updatedAnswer: Answer) {
    return this.appService.update(id, updatedAnswer);
  }

  @MessagePattern('answers.delete')
  delete(id: number) {
    return this.appService.delete(id);
  }
}
