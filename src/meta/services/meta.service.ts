import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Meta } from "../entities/meta.entitys";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class MetaService {
    findByNome(nome: string): Meta[] | PromiseLike<Meta[]> {
        throw new Error("Method not implemented.");
    }

    constructor(
        @InjectRepository(Meta)
        private readonly metaRepository: Repository<Meta>
    ) { }

    //Listar todos
    async findAll(): Promise<Meta[]> {
        return await this.metaRepository.find({
                relations: {
                usuario: true
            }
        });
    }

    //Buscar por ID
    async findById(id: number): Promise<Meta> {
        const meta = await this.metaRepository.findOne({
            where: { id },
                relations: {
                usuario: true
            }
        });

        if (!meta)
            throw new HttpException('Meta não encontrada!', HttpStatus.NOT_FOUND);

        return meta;
    }

    // Criar meta
    async create(meta: Meta): Promise<Meta> {
        return await this.metaRepository.save(meta);
    }

    // Atualizar meta
    async update(meta: Meta): Promise<Meta> {
        // const busca = await this.metaRepository.findOne({ where: { id } });

        // if (!busca)
        //     throw new HttpException('Meta não encontrada!', HttpStatus.NOT_FOUND);

        // meta.id = id;
        await this.findById(meta.id)

        return await this.metaRepository.save(meta);
    }

    // Deletar meta
    async delete(id: number): Promise<void> {
        const busca = await this.metaRepository.findOne({ where: { id } });

        if (!busca)
            throw new HttpException('Meta não encontrada!', HttpStatus.NOT_FOUND);

        await this.metaRepository.delete(id);
    }
}
