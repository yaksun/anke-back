import { Controller, Get, Post,Body,Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {CardService} from './card.service'
import { Card } from './card.entity';
@Controller('card')
@ApiTags('卡片')
export class CardController {
    constructor(private readonly cardService: CardService) {}

    @Get()
    @ApiOperation({summary:'卡片列表'})
    public async getList():Promise<any>{
        try {
          
          const res =  await this.cardService.getCardList() 
          return {
              code:200,
              date:res,
              message:'success'
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
    @ApiOperation({summary:'新增列表'})
    public async addUser(@Body() params:Card):Promise<any>{
            try {
                const res = await this.cardService.addCard({
                ...params
                })

                if(res){
                    return {
                        code:200
                    }   
                }

            
            } catch (error) {
                
            }
    }


    //    修改卡片 
   @Post(':id') 
   @ApiOperation({summary:'修改卡片'})
   public async updCard(@Param() idObj:Record<string | number | symbol,any>,@Body() params:Card):Promise<any>{
        try {
            const res = await this.cardService.updCard(idObj.id,{
                title:params.title,
                content:params.content,
                cateId:params.cateId,
                leavel:params.leavel,
                nextShowTime:params.nextShowTime 
            })

            console.log(idObj ,'===============');
            if(res){
                return {
                    code:200
                }
            }
            
            
        } catch (error) {
            
        }
   }


    //    删除卡片
    @Post('/del/:id')
    @ApiOperation({summary:'删除卡片'})
    public async delCard(@Param() idObj:Record<string | number | symbol,any>):Promise<any>{
        try {
            const res = await this.cardService.delCard(idObj.id)
            console.log(res,66666);
            if(res){
                    return {
                        code:200,
                        message:'删除成功'
                    }
            }
            
        } catch (error) {
            
        }
    }


}
