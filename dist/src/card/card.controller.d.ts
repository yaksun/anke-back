import { CardService } from './card.service';
import { Card } from './card.entity';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    getList(params: any): Promise<any>;
    addUser(params: Card): Promise<any>;
    updCard(idObj: Record<string | number | symbol, any>, params: Card): Promise<any>;
    delCard(idObj: Record<string | number | symbol, any>): Promise<any>;
}
