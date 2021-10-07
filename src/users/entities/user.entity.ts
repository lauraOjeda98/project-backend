import { Candidate } from "src/candidate/entities/candidate.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')

export class User {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Candidate, id_users => id_users.id_candidate)
    id_users: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    create_at: string;

    @Column()
    update_at: string;

    @Column()
    deleted_at: string;
}
