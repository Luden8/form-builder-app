import { Module } from '@nestjs/common';
import { StepsRestApiController } from './steps-rest-api.controller';
import { StepsRestApiService } from './steps-rest-api.service';
import { ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  controllers: [StepsRestApiController],
  providers: [StepsRestApiService],
  exports: [StepsRestApiService],
  imports: [
    ClientsModule.register([{
      name: 'STEPS_CLIENT',
      transport: Transport.TCP,
      options: { port: 3001 }
    }])
  ],
})
export class StepsRestApiModule {}
