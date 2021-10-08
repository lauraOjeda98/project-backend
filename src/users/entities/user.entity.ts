import { Candidate } from "src/candidate/entities/candidate.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')

export class User {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Candidate, id_users => id_users.id_candidate)
    id_users: Candidate[];

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;
}
