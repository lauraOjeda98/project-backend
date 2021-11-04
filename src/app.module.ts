import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './candidate/candidate.module';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeCompetencesModule } from './employee-competences/employee-competences.module';
import { CompetencesModule } from './competences/competences.module';
import { EmployeeStudiesModule } from './employee-studies/employee-studies.module';
import { SchoolarityTypeModule } from './schoolarity-type/schoolarity-type.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { ProfessionModule } from './profession/profession.module';
import { WorkRecordsModule } from './work-records/work-records.module';
import { JobTitlesModule } from './job-titles/job-titles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'project-backend',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CandidateModule, 
    UsersModule, 
    EmployeesModule,
    EmployeeCompetencesModule,
    CompetencesModule,
    EmployeeStudiesModule,
    SchoolarityTypeModule,
    InstitutionsModule,
    ProfessionModule,
    WorkRecordsModule,
    JobTitlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
