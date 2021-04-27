import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TradingLog } from './trading_log.entity';
import dayjs = require('dayjs');
import { diskStorage } from 'multer';
// import * as nuid from 'nuid'


@Module({
  imports: [
    TypeOrmModule.forFeature([TradingLog])
  ],
  controllers: [CardController],
  providers: [CardService],
  exports:[TypeOrmModule]
})
export class CardModule {}
