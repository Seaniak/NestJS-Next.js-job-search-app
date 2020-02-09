import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchRes } from './search-res.entity';

@Injectable()
export class SearchResService {
  constructor(
      @InjectRepository(SearchRes) private searchResRepository: Repository<SearchRes>,
      ) { }

    async getAllSearchRes(): Promise<SearchRes[]> {
        return await this.searchResRepository.find();
    }

    async getSearchRes(_id: number): Promise<SearchRes[]> {
        return await this.searchResRepository.find({
            select: ["query", "created"],
            where: [{ "id": _id }]
        });
    }

    async createSearchRes(searchRes: SearchRes) {
      await this.searchResRepository.insert(searchRes);
    }

    async updateSearchRes(searchRes: SearchRes) {
        await this.searchResRepository.save(searchRes);
    }

    async deleteSearchRes(searchRes: SearchRes) {
       await this.searchResRepository.delete(searchRes);
    }
}
