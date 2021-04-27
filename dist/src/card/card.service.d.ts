import { Repository } from 'typeorm';
import { TradingLog } from './trading_log.entity';
export declare class CardService {
    private cardRepository;
    constructor(cardRepository: Repository<TradingLog>);
    getCardListByPage(params: any): Promise<any[]>;
    getCardList(): Promise<any[]>;
    addCard(params: Record<string, unknown>): Promise<any>;
    updCard(id: number, params: Record<string, unknown>): Promise<any>;
    delCard(id: number): Promise<any>;
}
