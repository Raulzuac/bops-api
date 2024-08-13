import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`Puerto ${process.env.PORT}`);
  const app = await NestFactory.create(AppModule);
  //cors
  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
});

  await app.listen(3000);
  
}
bootstrap();
