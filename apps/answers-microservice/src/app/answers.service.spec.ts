import { Test } from '@nestjs/testing';

import { AnswersService } from '././answers.service';

describe('AppService', () => {
  let service: AnswersService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AnswersService],
    }).compile();

    service = app.get<AnswersService>(AnswersService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
