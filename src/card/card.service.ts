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
     * 获取卡片列表分页
     * */ 
     public async getCardListByPage(params):Promise<any[]>{
        let skip = (params.current-1)*(params.pageSize)
        return  await this.cardRepository.createQueryBuilder('card')
        .leftJoinAndSelect("card.cate", "cate")
        .skip(skip)
        .take(params.pageSize)
        .getMany();
    }
   

    /**
     * 获取卡片列表
     * @Param params
     * */ 
    public async getCardList(params):Promise<any[]>{
        return await this.cardRepository.createQueryBuilder('card')
        .getMany();
    }
   
    /**
     * 添加卡片
     * @Param params
     *  */ 
    public async addCard(params:Record<string, unknown>):Promise<any>{
        return await this.cardRepository.createQueryBuilder().insert().values({
            ...params
        }).execute();  
    }


    /**
     * 修改卡片
     * @Param id
     * @Body params
    */
    public async updCard(id:number,params:Record<string, unknown>):Promise<any>{  
        const temp = {} 
        for(let i in params){
            if(params[i] != undefined && i!='id'){
                temp[i] = params[i]
            }
        }

        return await this.cardRepository.createQueryBuilder().update().set({
        ...temp
        }).where("id = :id", { id }).execute()
    }


    /**
     * 删除卡片
     * @Param id
     * 
     * */ 
    public async delCard(id:number):Promise<any>{
        return await this.cardRepository.createQueryBuilder().delete().from(Card).where("id=:id",{id:id}).execute()
    
    }
}
