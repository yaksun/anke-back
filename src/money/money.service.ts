import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Money } from './money.entity';

@Injectable()
export class MoneyService {
    constructor(
        @InjectRepository(Money)
        private moneyRepository:Repository<Money>
    ){
       
    }

     /**
     * 获取卡片列表分页
     * */ 
      public async getMoneyListByPage(params):Promise<any[]>{
        let skip = (params.current-1)*(params.pageSize)
        return  await this.moneyRepository.createQueryBuilder('money')
        .skip(skip)
        .take(params.pageSize)
        .getMany();
    }
   

    /**
     * 获取卡片列表
     * @Param params
     * */ 
    public async getMoneyList():Promise<any[]>{
        return await this.moneyRepository.createQueryBuilder('money')
        .getMany();
    }


      /**
     * 添加卡片
     * @Param params
     *  */ 
       public async addItem(params:Record<string, unknown>):Promise<any>{
        return await this.moneyRepository.createQueryBuilder().insert().values({
            ...params
        }).execute();  
    }
  /**
     * 修改卡片
     * @Param id
     * @Body params
    */
        public async updItem(id:number,params:Record<string, unknown>):Promise<any>{  

            const temp = {} 
            for(let i in params){
                if(params[i] != undefined && i!='id'){
                    temp[i] = params[i]
                }
            }

            return await this.moneyRepository.createQueryBuilder().update().set({
            ...temp
            }).where("id = :id", { id }).execute()
        }
            

          /**
     * 删除卡片
     * @Param id
     * 
     * */ 
    public async delItem(id:number):Promise<any>{
        return await this.moneyRepository.createQueryBuilder().delete().from(Money).where("id=:id",{id:id}).execute()
    
    }

}
