import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult } from "typeorm/browser";
import { Usuario } from "../entities/usuario.entity";


@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) { }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find({
             relations: {
                treino: true
            }
        });
    }
    async findById(id: number): Promise<Usuario> {

        const usuario = await this.usuarioRepository.findOne({
            where: {
                id
            },
             relations: {
                treino: true
            }
        });

        if (!usuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return usuario;
    }

    async findByNome(nome: string): Promise<Usuario[]> {
        return await this.usuarioRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
             relations: {
                treino: true
            }
        })
    }

    async create(usuario: Usuario): Promise<Usuario> {
        return await this.usuarioRepository.save(usuario);
    }

    async update(usuario: Usuario): Promise<Usuario> {

        const buscaUsuario = await this.findById(usuario.id);

        if (!buscaUsuario || !usuario.id)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return await this.usuarioRepository.save(usuario);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id)

        return await this.usuarioRepository.delete(id)
    }


    async imc(id: number): Promise<any> {
        let user = await this.findById(id);
        let imc = user.peso / (user.altura * user.altura);
        let imcFix = parseFloat(imc.toFixed(2));

        if (imcFix < 18.5) {
            return { imc: imcFix, classificacao: "Abaixo do peso" };
        } else
            if (imcFix >= 18.5 && imcFix <= 24.9) {
                return { imc: imcFix, classificacao: "Peso normal" };
            } else
                if (imcFix >= 25 && imcFix <= 29.9) {
                    return { imc: imcFix, classificacao: "Sobrepeso" };
                } else
                    if (imcFix >= 30 && imcFix <= 34.9) {
                        return { imc: imcFix, classificacao: "Obesidade I" };
                    } else
                        if (imcFix >= 35 && imcFix <= 39.9) {
                            return { imc: imcFix, classificacao: "Obesidade II" };
                        } else
                            if (imcFix >= 40) {
                                return { imc: imcFix, classificacao: "Obesidade III" };
                            }

    }

}
