import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { SearchResService } from './search-res.service';
import { SearchRes } from './search-res.entity';

@Controller('search-res')
export class SearchResController {
  constructor(private service: SearchResService) {}

  @Get()
  getAll() {
    return this.service.getAllSearchRes();
  }

  @Get(':id')
  getOne(@Param() params) {
    return this.service.getSearchRes(params.id);
  }

  @Post()
    create(@Body() searchRes: SearchRes) {
        return this.service.createSearchRes(searchRes);
    }

    @Put()
    update(@Body() searchRes: SearchRes) {
        return this.service.updateSearchRes(searchRes);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteSearchRes(params.id);
    }
}
