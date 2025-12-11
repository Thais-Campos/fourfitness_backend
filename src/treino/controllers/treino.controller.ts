import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TreinoService } from "../services/treino.service";
import { Treino } from "../entities/treino.entity";

@Controller("/treinos")
export class TreinoController {

    constructor(private readonly treinoService: TreinoService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Treino[]> {
        return this.treinoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Treino[]> {
        return this.treinoService.findAll();
    }

    @Get('/divisao/:divisao')
    @HttpCode(HttpStatus.OK)
    findByDivisao(@Param('divisao', ParseIntPipe) divisao: string): Promise<Treino[]> {
        return this.treinoService.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() treino: Treino): Promise<Treino> {
        return this.treinoService.create(treino);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() treino: Treino): Promise<Treino> {
        return this.treinoService.update(treino);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.treinoService.delete(id);
    }
}