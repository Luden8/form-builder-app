import { Inject, Injectable, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Answer } from '@form-builder-app/db-configuration';

@Injectable()
export class AnswersRestApiService {
  constructor(@Inject('ANSWERS_CLIENT') private answersClient: ClientProxy) {}
  findAll() {
    return this.answersClient.send('answers.findAll', {})
  }

  findOne(id: number) {
    return this.answersClient.send('answers.findAOne', id)
  }

  create(newAnswer: Answer) {
    return this.answersClient.send('answers.create', newAnswer)
  }


  update(id: number, updatedAnswer: Answer) {
    return this.answersClient.send('answers.update', { id, updatedAnswer})
  }

  delete(id: number) {
    return this.answersClient.send('answers.delete', id)
  }
}
