import { Module ,forwardRef} from '@nestjs/common';
import { CateService } from './cate.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CateController } from './cate.controller';
import { Images } from './images.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Images])
  ],
  controllers: [CateController],
  providers: [CateService],
  exports:[TypeOrmModule]
})
export class CateModule {}
