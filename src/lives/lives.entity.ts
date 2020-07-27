import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Live {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}