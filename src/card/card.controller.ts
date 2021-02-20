import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('card')
@ApiTags('卡片')
export class CardController {

    @Get()
    @ApiOperation({summary:'卡片列表'})
    index(){
        return {code:200,data:[]}
    }

    @Post()
    @ApiOperation({summary:'添加卡片'})
    async create(){

    }


    @Post(':id')
    @ApiOperation({summary:'修改卡片'})
    update() {
        
    }

    @Post('/del/:id')
    @ApiOperation({summary:'删除卡片'})
    delete(){

    }

}
