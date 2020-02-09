import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UpdateJobDto } from './dto/update-job.dto';
import { CreateJobDto } from './dto/create-job.dto';
const fetch = require("node-fetch");

@Controller('jobsearch')
export class JobsearchController {
  @Post()
  create(@Body() CreateJobDto: CreateJobDto) {
    return `Created a job listing with the following data:`;
  }
  
  @Get(':jobTitle/:country/:location')
  async findAll(@Param('jobTitle') jobTitle: string, @Param('location') location: string, @Param('country') country: string) {
    const targetURL = `${process.env.BASE_URL}/${country.toLocaleLowerCase()}/${process.env.BASE_PARAMS}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&what=${jobTitle}&where=${location}`;
    const res = await fetch(targetURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    return await res.json();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} job`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} job`;
  }
}
  