import { Repository } from 'typeorm';
import { Money } from './money.entity';
export declare class MoneyService {
    private moneyRepository;
    constructor(moneyRepository: Repository<Money>);
    getMoneyListByPage(params: any): Promise<any[]>;
    getMoneyList(): Promise<any[]>;
    addItem(params: Record<string, unknown>): Promise<any>;
    updItem(id: number, params: Record<string, unknown>): Promise<any>;
    delItem(id: number): Promise<any>;
}
