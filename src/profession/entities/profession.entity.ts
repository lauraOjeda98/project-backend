import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('professions')
export class Profession {
    @PrimaryGeneratedColumn()
    id_profession: number;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @Column()
    deleted_at: Date;
}
