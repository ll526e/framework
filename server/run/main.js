"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_1 = require("./modules/app");
const http_interceptor_1 = require("./interceptors/http.interceptor");
const http_filter_1 = require("./filters/http.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_1.AppModule);
    app.useGlobalFilters(new http_filter_1.HttpFilter());
    app.useGlobalInterceptors(new http_interceptor_1.HttpInterceptor());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map