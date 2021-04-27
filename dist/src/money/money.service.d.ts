import { Repository } from 'typeorm';
import { Asset } from './asset.entity';
export declare class MoneyService {
    private moneyRepository;
    constructor(moneyRepository: Repository<Asset>);
    getMoneyListByPage(params: any): Promise<any[]>;
    getMoneyList(): Promise<any[]>;
    changeTime(newTime: any): Promise<void>;
    addItem(params: Record<string, unknown>): Promise<any>;
    updItem(id: number, params: Record<string, unknown>): Promise<any>;
    delItem(id: number): Promise<any>;
}
