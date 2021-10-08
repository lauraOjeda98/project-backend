import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('candidate')

export class Candidate {
    @PrimaryGeneratedColumn()
    id_candidate: number;

    @ManyToOne(() => User, user_id => user_id.id_users)
    user_id: User;

    @Column()
    name: string;

    @Column()
    lastname: string;
}
