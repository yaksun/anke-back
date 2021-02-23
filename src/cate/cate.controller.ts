import { Controller,Get, Post,Body,Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {CateService} from './cate.service'
import { Cate } from './cate.entity';

@Controller('cate')
@ApiTags('分类')
export class CateController {
    constructor(private readonly cateService: CateService) {}
    

    @Get()
    @ApiOperation({summary:'分类列表'})
    public async getList():Promise<any>{
        try {
          
          const res =  await this.cateService.getCateList() 
          let temp=[]
          for(let key in res){
             temp.push(res[key])
          }

          return temp 
            
        } catch (error) {
            return {
                code:400,
                data:[],
                message:'fail'
            }
        }
     }

     
        // 新增分类
    @Post()
    @ApiOperation({summary:'新增分类'})
    public async addUser(@Body() params:Cate):Promise<any>{
            try {
                const res = await this.cateService.addCate({
                ...params
                })

                if(res){
                    return []
                }

            
            } catch (error) {
                
            }
    }


    //    修改分类 
   @Post(':id') 
   @ApiOperation({summary:'修改分类'})
   public async updCard(@Param() idObj:Record<string | number | symbol,any>,@Body() params:Cate):Promise<any>{
        try {
            const res = await this.cateService.updCate(idObj.id,{
                title:params.title
            })

            console.log(idObj ,'===============');
            if(res){
                return []
            }
            
            
        } catch (error) {
            
        }
   }


    //    删除分类
    @Post('/del/:id')
    @ApiOperation({summary:'删除分类'})
    public async delCard(@Param() idObj:Record<string | number | symbol,any>):Promise<any>{
        try {
            const res = await this.cateService.delCate(idObj.id)
          
            if(res){
                    return []
            }
            
        } catch (error) {
            
        }
    }

}
