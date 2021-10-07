import { Competence } from "src/competences/entities/competence.entity";
import { Employee } from "src/employees/entities/employee.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee_competences')
export class EmployeeCompetence {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Employee, employee_id => employee_id.id_employee)
    employee_id: Employee;

    @ManyToOne(() => Competence, competences_id => competences_id.id_compentences)
    competences_id: Competence;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @Column()
    deleted_at: Date;
}
