import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { StepsModule } from './app/steps.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    StepsModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001
      }
    },
  );
  await app.listen();
}
bootstrap();
