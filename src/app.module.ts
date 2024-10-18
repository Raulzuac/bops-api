import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { databaseProviders } from './core/config/orm.config';
import { BopsModule } from './bops/bops.module';
import { Bop } from './bops/infraestructure/database/bop.entity';
import { Pages } from './bops/infraestructure/database/pages.entify';
import { ConfigModule } from '@nestjs/config';
import { Busqueda } from './bops/infraestructure/database/busqueda.entity';

const Entities = [
  Bop,
  Pages,
  Busqueda
]

@Module({
  imports: [
    ConfigModule.forRoot(),
    BopsModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_IP,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DATABASE,
      entities: Entities
    })
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
