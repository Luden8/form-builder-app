import { Module } from '@nestjs/common';
import { AnswersRestApiController } from './answers-rest-api.controller';
import { AnswersRestApiService } from './answers-rest-api.service';
import { ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  controllers: [AnswersRestApiController],
  providers: [AnswersRestApiService],
  exports: [AnswersRestApiService],
  imports: [
    ClientsModule.register([{
      name: 'ANSWERS_CLIENT',
      transport: Transport.TCP,
      options: { port: 3002 }
    }])
  ]
})
export class AnswersRestApiModule {}
