import { Module ,forwardRef} from '@nestjs/common';
import { MoneyService } from './money.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoneyController } from './money.controller';
import { Money } from './money.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Money])
  ],
  controllers: [MoneyController],
  providers: [MoneyService],
  exports:[TypeOrmModule]
})
export class MoneyModule {}
