import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity({ name: "tb_metas" })
export class Meta {

  @PrimaryGeneratedColumn()
  id: number

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  meta: string

  @Column({ type: "date", nullable: true })
  data_limite: string

  // @Column({
  //   type: "enum",
  //   enum: ["pendente", "andamento", "concluida", "cancelada"],
  //   default: "pendente"
  // })
  // status: string;
}

