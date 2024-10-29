import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {

  const httpsOptions = {
    key: fs.readFileSync(process.env.SSL_PRIVATE_KEY,'utf8'),
    cert: fs.readFileSync(process.env.SSL_CERTIFICATE,'utf8'),
  }
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  //cors
  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
});

  await app.listen(3000);
  
}
bootstrap();
