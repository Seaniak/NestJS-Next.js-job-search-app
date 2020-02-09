import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsearchController } from './jobsearch/jobsearch.controller';
import { SearchResModule } from './search-res/search-res.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    SearchResModule
  ],
  controllers: [AppController, JobsearchController],
  providers: [AppService],
})

export class AppModule {}
