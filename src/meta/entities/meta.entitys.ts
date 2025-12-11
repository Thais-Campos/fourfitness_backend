import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({ name: "tb_metas" })
export class Meta {

  @PrimaryGeneratedColumn()
  id: number

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  meta: string

  @Column({ type: "date", nullable: true })
  data_limite: string

  @OneToMany(() => Usuario, (usuario) => usuario.meta,
    {
      onDelete: "CASCADE"
    })
  usuario: Usuario[]

}
// @Column({
//   type: "enum",
//   enum: ["pendente", "andamento", "concluida", "cancelada"],
//   default: "pendente"
// })
// status: string;


