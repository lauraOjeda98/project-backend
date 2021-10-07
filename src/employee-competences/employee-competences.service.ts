import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeCompetenceDto } from './dto/create-employee-competence.dto';
import { UpdateEmployeeCompetenceDto } from './dto/update-employee-competence.dto';
import { EmployeeCompetence } from './entities/employee-competence.entity';

@Injectable()
export class EmployeeCompetencesService {
  constructor(
    @InjectRepository(EmployeeCompetence) private employeeCompetenceRepository: Repository<EmployeeCompetence>
  ){}

  create(createEmployeeCompetenceDto: CreateEmployeeCompetenceDto) {
    return this.employeeCompetenceRepository.save(createEmployeeCompetenceDto);
  }

  findAll() {
    return `This action returns all employeeCompetences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeCompetence`;
  }

  update(id: number, updateEmployeeCompetenceDto: UpdateEmployeeCompetenceDto) {
    return `This action updates a #${id} employeeCompetence`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeCompetence`;
  }
}
