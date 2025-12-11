import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Usuario } from './Usuario/entities/usuario.entity';
import { UsuarioService } from './Usuario/services/usuario.service';
import { UsuarioController } from './Usuario/controllers/usuario.controller';
import { UsuarioModule } from './Usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
          isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Usuario],
      synchronize: true,
    }),
    
    UsuarioModule
],
    controllers: [],
    providers: [],
    exports: [],
})

export class AppModule {}
