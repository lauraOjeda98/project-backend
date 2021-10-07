import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeCompetencesService } from './employee-competences.service';

describe('EmployeeCompetencesService', () => {
  let service: EmployeeCompetencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeCompetencesService],
    }).compile();

    service = module.get<EmployeeCompetencesService>(EmployeeCompetencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
