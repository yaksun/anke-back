import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardService {
    constructor(
        @InjectRepository(Card)
        private cardRepository:Repository<Card>
    ){
       
    }


    /**
     * 获取卡片列表
     * */ 
    public async getCardList():Promise<any[]>{
    
        return await this.cardRepository.createQueryBuilder().getMany()
    }
   
}
