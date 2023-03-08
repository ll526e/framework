import { Module } from '@nestjs/common';
import { AppController } from '@controller';
import { AppService } from '@service';
import { DiscoverModule } from './discover'

@Module({
  imports: [DiscoverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
