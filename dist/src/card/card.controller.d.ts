import { CardService } from './card.service';
import { TradingLog } from './trading_log.entity';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    getList(params: any, session: any): Promise<any>;
    addUser(params: TradingLog): Promise<any>;
    updCard(idObj: Record<string | number | symbol, any>, params: TradingLog): Promise<any>;
    delCard(idObj: Record<string | number | symbol, any>): Promise<any>;
}
