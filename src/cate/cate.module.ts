import { Module } from '@nestjs/common';
import { CateService } from './cate.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CateController } from './cate.controller';
import { Cate } from './cate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cate])],
  controllers: [CateController],
  providers: [CateService],
  exports:[TypeOrmModule]
})
export class CateModule {}
