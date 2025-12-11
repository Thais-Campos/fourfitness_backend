import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'tb_treino' })
export class Treino {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    exercicio: string;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    divisao: string;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nivel: string;

    @IsNotEmpty()
    @Column({ type: 'time', nullable: false })
    duracao: string;

}