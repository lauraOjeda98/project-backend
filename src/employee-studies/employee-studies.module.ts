import { Module } from '@nestjs/common';
import { EmployeeStudiesService } from './employee-studies.service';
import { EmployeeStudiesController } from './employee-studies.controller';
import { EmployeeStudy } from './entities/employee-study.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeStudy])],
  controllers: [EmployeeStudiesController],
  providers: [EmployeeStudiesService]
})
export class EmployeeStudiesModule {}
