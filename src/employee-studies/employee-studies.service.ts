import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeStudyDto } from './dto/create-employee-study.dto';
import { UpdateEmployeeStudyDto } from './dto/update-employee-study.dto';
import { EmployeeStudy } from './entities/employee-study.entity';

@Injectable()
export class EmployeeStudiesService {
  constructor(
    @InjectRepository(EmployeeStudy) private employeeStudyRepository: Repository<EmployeeStudy>
  ){}

  create(createEmployeeStudyDto: CreateEmployeeStudyDto) {
    return this.employeeStudyRepository.save(createEmployeeStudyDto);
  }

  findAll() {
    return `This action returns all employeeStudies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeStudy`;
  }

  update(id: number, updateEmployeeStudyDto: UpdateEmployeeStudyDto) {
    return `This action updates a #${id} employeeStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeStudy`;
  }
}
