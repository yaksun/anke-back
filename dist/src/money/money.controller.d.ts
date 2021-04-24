import { MoneyService } from './money.service';
import { Money } from './money.entity';
export declare class MoneyController {
    private readonly moneyService;
    constructor(moneyService: MoneyService);
    getList(params: any): Promise<any>;
    addUser(params: Money): Promise<any>;
    updCard(idObj: Record<string | number | symbol, any>, params: Money): Promise<any>;
    delCard(idObj: Record<string | number | symbol, any>): Promise<any>;
}
