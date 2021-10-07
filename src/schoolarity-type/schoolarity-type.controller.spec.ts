import { Test, TestingModule } from '@nestjs/testing';
import { SchoolarityTypeController } from './schoolarity-type.controller';
import { SchoolarityTypeService } from './schoolarity-type.service';

describe('SchoolarityTypeController', () => {
  let controller: SchoolarityTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolarityTypeController],
      providers: [SchoolarityTypeService],
    }).compile();

    controller = module.get<SchoolarityTypeController>(SchoolarityTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
