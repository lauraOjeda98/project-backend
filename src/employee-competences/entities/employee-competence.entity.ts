import { Competence } from "src/competences/entities/competence.entity";
import { Employee } from "src/employees/entities/employee.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('employee_competences')
export class EmployeeCompetence {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Employee, employee_id => employee_id.id_employee)
    employee_id: Employee;

    @ManyToOne(() => Competence, competences_id => competences_id.id_compentences)
    competences_id: Competence;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
