import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {CardService} from './card.service'

@Controller('card')
@ApiTags('卡片')
export class CardController {
    constructor(private readonly cardService: CardService) {}

    @Get('/list')
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

  

}
