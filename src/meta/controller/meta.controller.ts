import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { MetaService } from "../services/meta.service";
import { Meta } from "../entities/meta.entitys";


@Controller("/meta")
export class MetaController {
  constructor(private readonly metaService: MetaService) { }

  //Listar todos
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Meta[]> {
    return this.metaService.findAll();
  }

  //Buscar por id
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Meta> {
    return this.metaService.findById(id);
  }

  //Cria meta
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() meta: Meta): Promise<Meta> {
    return await this.metaService.create(meta);
  }

  // Atualizar meta
  @Put()
  @HttpCode(HttpStatus.OK)
  async update(
    // @Param('id') id: number,
    @Body() meta: Meta
  ): Promise<Meta> {
    return await this.metaService.update(meta);
  }

  // Deletar meta
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: number): Promise<void> {
    return await this.metaService.delete(id);
  }


}