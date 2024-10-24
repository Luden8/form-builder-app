import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AnswersModule } from './app/answers.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AnswersModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3002
      }
    },
  );
  await app.listen();
}
bootstrap();
