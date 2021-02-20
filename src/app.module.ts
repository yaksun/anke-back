import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardController } from './card/card.controller';
import { CardModule } from './card/card.module';

@Module({
  imports: [CardModule],
  controllers: [AppController, CardController],
  providers: [AppService],
})
export class AppModule {}
