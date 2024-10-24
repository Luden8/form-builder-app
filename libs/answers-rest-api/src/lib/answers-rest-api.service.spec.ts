import { Test } from '@nestjs/testing';
import { AnswersRestApiService } from './answers-rest-api.service';

describe('AnswersRestApiService', () => {
  let service: AnswersRestApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AnswersRestApiService],
    }).compile();

    service = module.get(AnswersRestApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
