import { Module ,forwardRef} from '@nestjs/common';
import { MoneyService } from './money.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoneyController } from './money.controller';
import { Asset } from './asset.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Asset])
  ],
  controllers: [MoneyController],
  providers: [MoneyService],
  exports:[TypeOrmModule]
})
export class MoneyModule {}
