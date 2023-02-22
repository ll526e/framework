import { AppService } from '@service/app';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getName(): string;
}
