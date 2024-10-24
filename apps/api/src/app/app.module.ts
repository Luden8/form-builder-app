import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { StepsRestApiModule, StepsRestApiController } from '@form-builder-app/steps-rest-api';
import { AnswersRestApiController, AnswersRestApiModule} from '@form-builder-app/answers-rest-api';
import { UsersRestApiController, UsersRestApiModule } from '@form-builder-app/users-rest-api';

@Module({
  imports: [StepsRestApiModule, AnswersRestApiModule, UsersRestApiModule],
  controllers: [StepsRestApiController, AnswersRestApiController, UsersRestApiController],
  providers: [AppService],
})
export class AppModule {}
