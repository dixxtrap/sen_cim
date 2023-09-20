"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
    });
    app.enableVersioning({ defaultVersion: '1', type: common_1.VersioningType.URI });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Sen Cim')
        .setDescription("L'application Cemetech Manager est une solution complète de gestion de cimetières destinée aux populations locales, aux gestionnaires de cimetières et aux familles. Elle vise à simplifier les processus administratifs, à améliorer la traçabilité des inhumations et à fournir un outil de communication essentiel")
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('doc', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map