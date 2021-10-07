import { Test, TestingModule } from '@nestjs/testing';
import { SchoolarityTypeService } from './schoolarity-type.service';

describe('SchoolarityTypeService', () => {
  let service: SchoolarityTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolarityTypeService],
    }).compile();

    service = module.get<SchoolarityTypeService>(SchoolarityTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
