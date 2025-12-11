import { IsEAN, IsEmail, IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @IsEmail()
    @Column ({length: 150, nullable: false})
    email: string
   
    @IsNotEmpty()
    @Column({ length: 20, nullable: false })
    matricula: string;
    
    @IsNotEmpty()
    @Column({ nullable: false })
    idade: number;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 5, scale: 2 })
    peso: number;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 5, scale: 2 })
    altura: number;

}

