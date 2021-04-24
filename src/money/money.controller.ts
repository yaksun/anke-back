import { Controller, Get, Post,Body,Param,Query, UploadedFile,UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {MoneyService} from './money.service'
import { Money } from './money.entity';

@Controller('money')
@ApiTags('流水账')
export class MoneyController {
    constructor(private readonly moneyService: MoneyService) {}


    
    @Get()
    @ApiOperation({summary:'流水账列表'})
    public async getList(@Query() params):Promise<any>{
    
        try {
          const res =  await this.moneyService.getMoneyList() 
          const res2 = await this.moneyService.getMoneyListByPage(params)
          let temp=[]
          let temp2=[]
         for(let key in res2){
            temp.push(res2[key])
         }

         for(let key in res){
            temp2.push(res[key])
         }



          return {
              code:200,
              data:temp,
              current:1,
              pageSize:params.pageSize*1,
              total:temp2.length
          } 
            
        } catch (error) {
            return {
                code:400,
                data:[],
                message:'fail'
            }
        }
     }


           // 新增
    @Post()
    @ApiOperation({summary:'新增'})
    public async addUser(@Body() params:Money):Promise<any>{
        
            try {
                const res = await this.moneyService.addItem({
                ...params
                })

                if(res){
               
                    return {
                        code:200,
                        msg:'success'

                    }
                }

            
            } catch (error) {
                
            }
    }


         //    修改卡片 
        @Post(':id') 
        @ApiOperation({summary:'修改'})
        public async updCard(@Param() idObj:Record<string | number | symbol,any>,@Body() params:Money):Promise<any>{
            try {
                
                    const res = await this.moneyService.updItem(idObj.id,{
                    ...params
                    })

                    if(res){
                        return {
                            code:200,
                            msg:'success'
                        }
                    }

                
                    
                } catch (error) {
                    
                }
        }


         //    删除卡片
        @Post('/del/:id')
        @ApiOperation({summary:'删除'})
        public async delCard(@Param() idObj:Record<string | number | symbol,any>):Promise<any>{
            try {
                const res = await this.moneyService.delItem(idObj.id)
                if(res){
                    return {
                            code:200,
                            msg:'success'
                        }
                }
                
            } catch (error) {
                
            }
        }

}
