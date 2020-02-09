import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchRes } from './search-res.entity';

@Injectable()
export class SearchResService {
  constructor(@InjectRepository(SearchRes) private SearchResRepository: Repository<SearchRes>) { }

    async getAllSearchRes(): Promise<SearchRes[]> {
        return await this.SearchResRepository.find();
    }

    async getSearchRes(_id: number): Promise<SearchRes[]> {
        return await this.SearchResRepository.find({
            select: ["query", "created"],
            where: [{ "id": _id }]
        });
    }

    async createSearchRes(SearchResEntity: SearchRes) {
      this.SearchResRepository.insert(SearchResEntity);
    }

    async updateSearchRes(SearchResEntity: SearchRes) {
        this.SearchResRepository.save(SearchResEntity);
    }

    async deleteSearchRes(SearchResEntity: SearchRes) {
        this.SearchResRepository.delete(SearchResEntity);
    }
}
