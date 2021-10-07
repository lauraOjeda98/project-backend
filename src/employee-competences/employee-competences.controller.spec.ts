import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeCompetencesController } from './employee-competences.controller';
import { EmployeeCompetencesService } from './employee-competences.service';

describe('EmployeeCompetencesController', () => {
  let controller: EmployeeCompetencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeCompetencesController],
      providers: [EmployeeCompetencesService],
    }).compile();

    controller = module.get<EmployeeCompetencesController>(EmployeeCompetencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
