import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_titles')
export class JobTitle {
    @PrimaryGeneratedColumn()
    id_job: number;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @Column()
    deleted_at: Date;
}
