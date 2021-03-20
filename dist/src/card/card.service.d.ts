import { Repository } from 'typeorm';
import { Card } from './card.entity';
export declare class CardService {
    private cardRepository;
    constructor(cardRepository: Repository<Card>);
    getCardListByPage(params: any): Promise<any[]>;
    getCardList(): Promise<any[]>;
    addCard(params: Record<string, unknown>): Promise<any>;
    updCard(id: number, params: Record<string, unknown>): Promise<any>;
    delCard(id: number): Promise<any>;
}
