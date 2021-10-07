import { EmployeeCompetence } from "src/employee-competences/entities/employee-competence.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('competences')
export class Competence {
    @PrimaryColumn()
    @OneToMany(() => EmployeeCompetence, id_compentences => id_compentences.competences_id)
    id_compentences: number;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @Column()
    deleted_at: Date;
}
