import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchResService } from './search-res.service';
import { SearchResController } from './search-res.controller';
import { SearchRes } from './search-res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SearchRes])],
  providers: [SearchResService],
  controllers: [SearchResController]
})

export class SearchResModule {}
