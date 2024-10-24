import { Injectable, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '@form-builder-app/db-configuration';

@Injectable()
export class StepsRestApiService {
  constructor(@Inject('STEPS_CLIENT') private stepsClient: ClientProxy) {}
  findAll() {
    return this.stepsClient.send('steps.findAll', {})
  }

  findOne(@Param('id') id: number) {
    return this.stepsClient.send('steps.findOne', id)
  }

  create() {
    return this.stepsClient.send('steps.create', {})
  }


  update(@Param('id') id: number, updatedUser: User) {
    return this.stepsClient.send('steps.update', { id, updatedUser})
  }

  delete(@Param('id') id: number) {
    return this.stepsClient.send('steps.delete', id)
  }
}
