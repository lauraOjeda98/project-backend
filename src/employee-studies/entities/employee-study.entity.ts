import { Employee } from "src/employees/entities/employee.entity";
import { Institution } from "src/institutions/entities/institution.entity";
import { Profession } from "src/profession/entities/profession.entity";
import { SchoolarityType } from "src/schoolarity-type/entities/schoolarity-type.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee_studies')
export class EmployeeStudy {
    @PrimaryGeneratedColumn()
    id_studies: number;

    @ManyToOne(() => Employee, employee_id => employee_id.id_employee)
    employee_id: Employee;

    @ManyToOne(() => SchoolarityType, schoolarity_type_id =>  schoolarity_type_id.id_schoolarity)
    schoolarity_type_id: SchoolarityType;

    @ManyToOne(() => Institution, institution_id =>  institution_id.id_institution)
    institution_id: Institution;

    @ManyToOne(() => Profession, profession_id => profession_id.id_profession)
    profession_id: Profession;

    @Column()
    year: Date;

    @Column()
    completed: string;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @Column()
    deleted_at: Date;
}
