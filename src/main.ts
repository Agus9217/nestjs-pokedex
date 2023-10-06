import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT = 3000;
const PREFIX = 'api/v2';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(PREFIX);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/${PREFIX}`);
}
main();
