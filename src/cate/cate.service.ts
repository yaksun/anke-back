import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cate } from './cate.entity';

@Injectable()
export class CateService {
    constructor(
        @InjectRepository(Cate)
        private cateRepository:Repository<Cate>
    ){
       
    }

     /**
     * 获取分类列表
     * */ 
    public async getCateList():Promise<any[]>{
    
        return await this.cateRepository.createQueryBuilder().getMany();
    }
   
    /**
     * 添加分类
     * @Param params
     *  */ 
    public async addCate(params:Record<string, unknown>):Promise<any>{
        return await this.cateRepository.createQueryBuilder().insert().values({
            ...params
        }).execute();  
    }


    /**
     * 修改分类
     * @Param id
     * @Body params
    */
    public async updCate(id:number,params:Record<string, unknown>):Promise<any>{  
        const temp = {} 
        for(const i in params){
            if(params[i] != undefined){
                temp[i] = params[i]
            }
        }
        return await this.cateRepository.createQueryBuilder().update().set({
        ...temp
        }).where("id = :id", { id }).execute()
    }


    /**
     * 删除分类
     * @Param id
     * 
     * */ 
    public async delCate(id:number):Promise<any>{
        return await this.cateRepository.createQueryBuilder().delete().from(Cate).where("id=:id",{id:id}).execute()
    
    }
}
