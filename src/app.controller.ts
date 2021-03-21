import { Controller, Get, UploadedFile, UseInterceptors ,Post} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import {CateService} from './cate/cate.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file) {
      console.log(file);
      return {
        code:200,
        path:file.path
      }
    }


}
