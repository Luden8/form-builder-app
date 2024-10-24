import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, DbConfigurationModule } from '@form-builder-app/db-configuration';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DbConfigurationModule,
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
