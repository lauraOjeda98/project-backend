import { Candidate } from "src/candidate/entities/candidate.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')

export class User {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Candidate, id_users => id_users.id_candidate)
    id_users: Candidate[];

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
