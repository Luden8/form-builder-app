import { Test } from '@nestjs/testing';
import { AnswersRestApiController } from './answers-rest-api.controller';
import { AnswersRestApiService } from './answers-rest-api.service';

describe('AnswersRestApiController', () => {
  let controller: AnswersRestApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AnswersRestApiService],
      controllers: [AnswersRestApiController],
    }).compile();

    controller = module.get(AnswersRestApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
