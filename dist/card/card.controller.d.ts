import { CardService } from './card.service';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    getList(): Promise<any>;
}
