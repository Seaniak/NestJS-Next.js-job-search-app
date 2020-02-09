import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsearchController } from './jobsearch/jobsearch.controller';

@Module({
  imports: [],
  controllers: [AppController, JobsearchController],
  providers: [AppService],
})
export class AppModule {}
