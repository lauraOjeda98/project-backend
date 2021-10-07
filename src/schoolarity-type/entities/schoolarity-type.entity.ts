import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('schoolarity_type')
export class SchoolarityType {
    @PrimaryGeneratedColumn()
    id_schoolarity: number;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @Column()
    deleted_at: Date;
}
