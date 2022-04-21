import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import envVariables from '@config/env';
import { TransformInterceptor } from './transform.interceptor';

console.log('Teste');
async function bootstrap() {
  const logger = new Logger('NestApplication');
  console.log('Teste');
  logger.log('Teste');

  console.log(envVariables());
  console.log('Teste: ', process.env.db_password);

  const app = await NestFactory.create(AppModule);

  logger.log(process.env.PORT);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(process.env.PORT || 3000);
  logger.log(`Application listening on port ${process.env.PORT}`);
}
bootstrap();
