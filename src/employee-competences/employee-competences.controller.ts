import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeCompetencesService } from './employee-competences.service';
import { CreateEmployeeCompetenceDto } from './dto/create-employee-competence.dto';
import { UpdateEmployeeCompetenceDto } from './dto/update-employee-competence.dto';

@Controller('employee-competences')
export class EmployeeCompetencesController {
  constructor(private readonly employeeCompetencesService: EmployeeCompetencesService) {}

  @Post()
  create(@Body() createEmployeeCompetenceDto: CreateEmployeeCompetenceDto) {
    return this.employeeCompetencesService.create(createEmployeeCompetenceDto);
  }

  @Get()
  findAll() {
    return this.employeeCompetencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeCompetencesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeCompetenceDto: UpdateEmployeeCompetenceDto) {
    return this.employeeCompetencesService.update(+id, updateEmployeeCompetenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeCompetencesService.remove(+id);
  }
}
