import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Meta } from "./entities/meta.entitys";
import { MetaService } from "./services/meta.service";
import { MetaController } from "./controller/meta.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Meta])],
  providers: [MetaService],
  controllers: [MetaController],
  exports: [MetaService],
})
export class MetaModule {}
