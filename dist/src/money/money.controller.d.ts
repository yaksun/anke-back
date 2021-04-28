import { MoneyService } from './money.service';
import { Asset } from './asset.entity';
export declare class MoneyController {
    private readonly moneyService;
    constructor(moneyService: MoneyService);
    getList(params: any): Promise<any>;
    changeTime(newTime: any): Promise<void>;
    addUser(params: Asset): Promise<any>;
    updCard(idObj: Record<string | number | symbol, any>, params: Asset): Promise<any>;
    delCard(idObj: Record<string | number | symbol, any>): Promise<any>;
}
