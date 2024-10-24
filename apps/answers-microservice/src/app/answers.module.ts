import { Module } from '@nestjs/common';

import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';
import { Answer, DbConfigurationModule } from '@form-builder-app/db-configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [AnswersController],
  providers: [AnswersService],
  imports: [
    DbConfigurationModule,
    TypeOrmModule.forFeature([Answer]),
  ],
})
export class AnswersModule {}
