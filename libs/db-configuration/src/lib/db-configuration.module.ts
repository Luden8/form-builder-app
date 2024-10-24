import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './answers.entity';
import { User } from './user.entity';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 8001,
      username: 'postgres',
      password: 'example',
      database: 'postgres',
      entities: [User, Answer],
      synchronize: true,
    }),
  ],
})
export class DbConfigurationModule {}
