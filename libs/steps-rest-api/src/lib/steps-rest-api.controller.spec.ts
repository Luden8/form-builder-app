import { Test } from '@nestjs/testing';
import { StepsRestApiController } from './steps-rest-api.controller';
import { StepsRestApiService } from './steps-rest-api.service';

describe('StepsRestApiController', () => {
  let controller: StepsRestApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [StepsRestApiService],
      controllers: [StepsRestApiController],
    }).compile();

    controller = module.get(StepsRestApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
