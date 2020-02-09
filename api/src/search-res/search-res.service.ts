import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchRes } from './search-res.entity';
const fetch = require("node-fetch");

@Injectable()
export class SearchResService {
  constructor(
      @InjectRepository(SearchRes) private searchResRepository: Repository<SearchRes>,
      ) { }

    async getAllSearchRes(query: string, location: string, country: string): Promise<SearchRes[] | any> {
        const res = await this.searchResRepository.find(
            {
                select: ["query", "created", "location"],
                where: [{"query": query, "location": location}]
            }
            );

        if (res.length) return res;
         
        const targetURL = `${process.env.BASE_URL}/${country.toLowerCase()}/${process.env.BASE_PARAMS}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&what=${query}&where=${location}`;
        const newFetch = await fetch(targetURL, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        return await newFetch.json();  
    }

    async getSearchRes(_id: number): Promise<SearchRes[]> {
        return await this.searchResRepository.find({
            select: ["query", "created", "location"],
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
