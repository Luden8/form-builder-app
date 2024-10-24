import { Test } from '@nestjs/testing';
import { UsersRestApiController } from './users-rest-api.controller';
import { UsersRestApiService } from './users-rest-api.service';

describe('UsersRestApiController', () => {
  let controller: UsersRestApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UsersRestApiService],
      controllers: [UsersRestApiController],
    }).compile();

    controller = module.get(UsersRestApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
