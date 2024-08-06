import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { databaseProviders } from './core/config/orm.config';
import { BopsModule } from './bops/bops.module';
import { Bop } from './bops/infraestructure/database/bop.entity';
import { Pages } from './bops/infraestructure/database/pages.entify';

const Entities = [
  Bop,
  Pages
]

@Module({
  imports: [BopsModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'bops',
      entities: Entities
    })
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
