import { Test } from '@nestjs/testing';
import { StepsRestApiService } from './steps-rest-api.service';

describe('StepsRestApiService', () => {
  let service: StepsRestApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [StepsRestApiService],
    }).compile();

    service = module.get(StepsRestApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
