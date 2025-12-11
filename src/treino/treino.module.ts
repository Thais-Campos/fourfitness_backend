import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Treino } from "./entities/treino.entity";
import { TreinoService } from "./services/treino.service";
import { TreinoController } from "./controllers/treino.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ Treino ])],
    controllers: [TreinoController],
    providers: [TreinoService],
    exports: [],
})

export class TreinoModule { }