import { EmployeeCompetence } from "src/employee-competences/entities/employee-competence.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('competences')
export class Competence {
    @PrimaryGeneratedColumn()
    @OneToMany(() => EmployeeCompetence, id_compentences => id_compentences.competences_id)
    id_compentences: number;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
