import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });

  app.enableVersioning({ defaultVersion: '1', type: VersioningType.URI });
  const config = new DocumentBuilder()
    .setTitle('Sen Cim')
    .setDescription(
      "L'application Cemetech Manager est une solution complète de gestion de cimetières destinée aux populations locales, aux gestionnaires de cimetières et aux familles. Elle vise à simplifier les processus administratifs, à améliorer la traçabilité des inhumations et à fournir un outil de communication essentiel",
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}
bootstrap();
