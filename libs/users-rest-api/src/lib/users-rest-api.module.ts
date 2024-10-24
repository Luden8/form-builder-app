import { Module } from '@nestjs/common';
import { UsersRestApiController } from './users-rest-api.controller';
import { UsersRestApiService } from './users-rest-api.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [UsersRestApiController],
  providers: [UsersRestApiService],
  exports: [UsersRestApiService],
  imports:[
    ClientsModule.register([{
      name: 'USERS_CLIENT',
      transport: Transport.TCP,
      options: { port: 3003 }
    }])
  ]
})
export class UsersRestApiModule {}
