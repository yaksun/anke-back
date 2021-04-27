import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    uploadFile(file: any): {
        code: number;
        path: any;
        data: {
            filename: string;
        };
    };
}
