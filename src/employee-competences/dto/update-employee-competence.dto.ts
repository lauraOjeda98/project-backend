import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeCompetenceDto } from './create-employee-competence.dto';

export class UpdateEmployeeCompetenceDto extends PartialType(CreateEmployeeCompetenceDto) {}
