"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpFilter = void 0;
const common_1 = require("@nestjs/common");
let HttpFilter = class HttpFilter {
    catch(exception, host) {
        var _a;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = (_a = exception.message) !== null && _a !== void 0 ? _a : `${status >= 500 ? 'Service Error' : 'Client Error'}`;
        const errorResponse = {
            data: { error: message },
            message: 'error',
            status: 0,
        };
        response.status(status);
        response.header('Content-Type', 'application/json; charset=utf-8');
        response.send(errorResponse);
    }
};
HttpFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpFilter);
exports.HttpFilter = HttpFilter;
//# sourceMappingURL=http.filter.js.map