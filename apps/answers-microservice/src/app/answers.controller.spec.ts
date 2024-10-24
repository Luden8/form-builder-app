import { Test, TestingModule } from '@nestjs/testing';

import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';

describe('AnswersController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AnswersController],
      providers: [AnswersService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<AnswersController>(AnswersController);
      expect(appController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
