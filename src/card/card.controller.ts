import { Controller, Get, Post,Body,Param,Query, UploadedFile,UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {CardService} from './card.service'
import { TradingLog } from './trading_log.entity';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer = require('multer');
import { createWriteStream } from 'fs';
import { join } from 'path';

@Controller('card')
@ApiTags('卡片')
export class CardController {
    constructor(private readonly cardService: CardService) {}

    @Get()
    @ApiOperation({summary:'卡片列表'})
    public async getList(@Query() params):Promise<any>{
    
        try {
          const res =  await this.cardService.getCardList() 
          const res2 = await this.cardService.getCardListByPage(params)
          let temp=[]
          let temp2=[]
         for(let key in res2){
            temp.push(res2[key])
         }

         for(let key in res){
            temp2.push(res[key])
         }

         let keyWords=['trade_type','security_class']
         for(let key in params){
            if(keyWords.indexOf(key)!= -1 && params[key]){
                temp = temp.filter(item=>item[key].indexOf(params[key])!=-1)
                temp2 = temp2.filter(item=>item[key].indexOf(params[key])!=-1)
            }
         }

         if(params['trade_date_begin']){
                temp = temp.filter(item=>new Date(item['trade_date']).getTime()>params['trade_date_begin'])
                temp2 = temp2.filter(item=>new Date(item['trade_date']).getTime()>params['trade_date_begin'])
         }
         if(params['trade_date_end']){
            temp = temp.filter(item=>new Date(item['trade_date']).getTime()<params['trade_date_end'])
            temp2 = temp2.filter(item=>new Date(item['trade_date']).getTime()<params['trade_date_end'])
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
    @ApiOperation({summary:'新增列表'})
    public async addUser(@Body() params:TradingLog):Promise<any>{
        
            try {
                const res = await this.cardService.addCard({
                ...params
                })

                if(res){
                //  this.cateService.addCate({img_path:'/uploads'+file.filename ,thumb_path:'/api/uploads'+file.filename})
                        // console.log(res.identifiers[0].id,'=============');
                        
                    return {
                        code:200,
                        msg:'success'
                        // id:res.identifiers[0].id

                    }
                }

            
            } catch (error) {
                
            }
    }


    //    修改卡片 
   @Post(':id') 
   @ApiOperation({summary:'修改卡片'})
   public async updCard(@Param() idObj:Record<string | number | symbol,any>,@Body() params:TradingLog):Promise<any>{
     try {
         
            const res = await this.cardService.updCard(idObj.id,{
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
    @ApiOperation({summary:'删除卡片'})
    public async delCard(@Param() idObj:Record<string | number | symbol,any>):Promise<any>{
        try {
            const res = await this.cardService.delCard(idObj.id)
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


