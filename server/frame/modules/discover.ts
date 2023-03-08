import { Module } from '@nestjs/common';
import { DisCoverController } from '@controller';
import { DiscoverService } from '@service';
import { HttpModule } from '@nestjs/axios'
@Module({
  imports: [HttpModule],
  controllers: [DisCoverController],
  providers: [DiscoverService],
})
export class DiscoverModule { }
