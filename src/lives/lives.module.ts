import { Module } from '@nestjs/common';
import { LivesService } from './lives.service';
import { LivesController } from './lives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Live } from './lives.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Live]),
  ],
  providers: [LivesService],
  controllers: [LivesController]
})
export class LivesModule {}
