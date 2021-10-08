import { Employee } from "src/employees/entities/employee.entity";
import { JobTitle } from "src/job-titles/entities/job-title.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('work_record')
export class WorkRecord {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Employee, employee_id => employee_id.id_employee)
    employee_id: Employee;

    @ManyToOne(() => JobTitle, job_title_id => job_title_id.id_job)
    job_title_id = JobTitle;

    @Column()
    begin_data: Date;

    @Column()
    end_data: Date;

    @Column()
    company_name: string;

    @Column()
    boss_name: string;

    @Column()
    phone_company: string;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @Column()
    deleted_at: Date;
}
