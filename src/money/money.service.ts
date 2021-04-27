import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from './asset.entity';

@Injectable()
export class MoneyService {
    constructor(
        @InjectRepository(Asset)
        private moneyRepository:Repository<Asset>
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


    public async changeTime(newTime){
        const res = await this.moneyRepository
        .createQueryBuilder()
        .where("e_time = :time", { time: '9999-12-31 00:00:00' })
        .getOne();
        
        if(res){
            res.e_time = newTime
            await this.moneyRepository.createQueryBuilder().update().set({
                ...res
                    })
            .where("e_time = :time", { time: '9999-12-31 00:00:00' })
            .execute()
        }
       
        
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
        return await this.moneyRepository.createQueryBuilder().delete().from(Asset).where("id=:id",{id:id}).execute()
    
    }

}
