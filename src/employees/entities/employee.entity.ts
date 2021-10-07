import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee')
export class Employee {
    @PrimaryGeneratedColumn()
    id_employee: number;

    
}
