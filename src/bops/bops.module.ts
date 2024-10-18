import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bop } from './infraestructure/database/bop.entity';
// import { Pages } from './infraestructure/database/pages.entify';
import { GetDeporBopsService } from './application/get_depor_bops.service';
import { GetDeporBopsController } from './infraestructure/controller/get_depor_bops.controller';
import { databaseProviders } from 'src/core/config/orm.config';
import { Pages } from './infraestructure/database/pages.entify';
import { GetBopByContentController } from './infraestructure/controller/get_bop_by_content.controller';
import { GetBopsQueryService } from './application/get_bop_by_content.service';
import { GetDeporBopsQuery } from './domain/query/get_bop_by_content.querty';
import { GetDeporBops } from './domain/query/get_depor_bops.query';
import { GetPdfService } from './application/get_pdf.service';
import { GetPdfQuery } from './domain/query/get_pdf.query';
import { GetBopPdfController } from './infraestructure/controller/get_bop_pdf.controller';
import { GetBopPdfDataController } from './infraestructure/controller/get_pdf_data.controller';
import { GetBopsByQueryController } from './infraestructure/controller/get_bop_query.controler';
import { GetBopsSearchService } from './application/get_bop_search.service';
import { GetBopsSearchQuery } from './domain/query/get_bops_search.query';
import { SaveSearchQuery } from './domain/query/save_search.query';
import { Busqueda } from './infraestructure/database/busqueda.entity';

const Services = [
    GetDeporBopsService,
    GetBopsQueryService,
    GetPdfService,
    GetBopsSearchService
]

const Query = [
    GetDeporBops,
    GetDeporBopsQuery,
    GetBopByContentController,
    GetPdfQuery,
    GetBopsSearchQuery,
    SaveSearchQuery
]

const Controller = [
    GetDeporBopsController,
    GetBopByContentController,
    GetBopPdfController,
    GetBopPdfDataController,
    GetBopsByQueryController
]

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Bop,
            Pages,
            Busqueda
        ])],
    controllers: [
        ...Controller
    ],
    providers: [
        ...Services,
        ...Query
    ]
})
export class BopsModule {}
