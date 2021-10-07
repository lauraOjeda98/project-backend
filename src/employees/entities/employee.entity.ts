import { EmployeeCompetence } from "src/employee-competences/entities/employee-competence.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee')
export class Employee {
    @PrimaryGeneratedColumn()
    @OneToMany(() => EmployeeCompetence, id_employee => id_employee.employee_id)
    id_employee: EmployeeCompetence[];

    @ManyToOne(() => User, user_id => user_id.id_users)
    user_id: User;

    @Column()
    name: string;

    @Column()
    lastname: string;
}
