import { CateService } from './cate.service';
import { Cate } from './cate.entity';
export declare class CateController {
    private readonly cateService;
    constructor(cateService: CateService);
    getList(): Promise<any>;
    getItem(idObj: Record<string | number | symbol, any>): Promise<any>;
    addUser(params: Cate): Promise<any>;
    updCard(idObj: Record<string | number | symbol, any>, params: Cate): Promise<any>;
    delCard(idObj: Record<string | number | symbol, any>): Promise<any>;
}
