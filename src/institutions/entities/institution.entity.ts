import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('institutions')
export class Institution {
    @PrimaryGeneratedColumn()
    id_institution: number;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @Column()
    deleted_at: Date;
}
