import { Test, TestingModule } from '@nestjs/testing';
import { JobsearchController } from './jobsearch.controller';

describe('Jobsearch Controller', () => {
  let controller: JobsearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobsearchController],
    }).compile();

    controller = module.get<JobsearchController>(JobsearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
