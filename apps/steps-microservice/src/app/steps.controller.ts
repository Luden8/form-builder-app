import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices'
import { StepsService } from './steps.service';

@Controller()
export class StepsController {
  constructor(private readonly appService: StepsService) {}

  @MessagePattern('steps.findAll')
  findAll() {
    return this.appService.findAll();
  }
}
