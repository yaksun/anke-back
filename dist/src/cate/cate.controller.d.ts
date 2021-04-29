import { CateService } from './cate.service';
import { Images } from './images.entity';
export declare class CateController {
    private readonly cateService;
    constructor(cateService: CateService);
    getList(): Promise<any>;
    getItem(idObj: Record<string | number | symbol, any>): Promise<any>;
    addUser(params: Images): Promise<any>;
    updCard(idObj: Record<string | number | symbol, any>, params: Images): Promise<any>;
    delCard(idObj: Record<string | number | symbol, any>): Promise<any>;
}
