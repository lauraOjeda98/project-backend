import { Module } from '@nestjs/common';
import { EmployeeCompetencesService } from './employee-competences.service';
import { EmployeeCompetencesController } from './employee-competences.controller';
import { EmployeeCompetence } from './entities/employee-competence.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeCompetence])],
  controllers: [EmployeeCompetencesController],
  providers: [EmployeeCompetencesService]
})
export class EmployeeCompetencesModule {}
