import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import envVariables from '@config/env';

console.log('Teste');
async function bootstrap() {
  const logger = new Logger('NestApplication');
  console.log('Teste');
  logger.log('Teste');

  console.log(envVariables());
  console.log('Teste: ', process.env.db_password);

  const app = await NestFactory.create(AppModule);

  logger.log(process.env.PORT);

  await app.listen(process.env.PORT);
}
bootstrap();
