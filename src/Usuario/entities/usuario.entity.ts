import { IsEAN, IsEmail, IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Treino } from "../../treino/entities/treino.entity"
import { Meta } from "../../meta/entities/meta.entitys"


@Entity({ name: "tb_usuarios" })
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string

  @IsNotEmpty()
  @IsEmail()
  @Column({ length: 150, nullable: false })
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

  @ManyToOne(() => Treino, (treino) => treino.usuario, {
    onDelete: "CASCADE"
  })
  treino: Treino;

  @ManyToOne(() => Meta, (meta) => meta.usuario, {
    onDelete: "CASCADE"
  })
  meta: Meta

}

