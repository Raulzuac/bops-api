"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BopsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bop_entity_1 = require("./infraestructure/database/bop.entity");
const get_depor_bops_service_1 = require("./application/get_depor_bops.service");
const get_depor_bops_controller_1 = require("./infraestructure/controller/get_depor_bops.controller");
const pages_entify_1 = require("./infraestructure/database/pages.entify");
const get_bop_by_content_controller_1 = require("./infraestructure/controller/get_bop_by_content.controller");
const get_bop_by_content_service_1 = require("./application/get_bop_by_content.service");
const get_bop_by_content_querty_1 = require("./domain/query/get_bop_by_content.querty");
const get_depor_bops_query_1 = require("./domain/query/get_depor_bops.query");
const get_pdf_service_1 = require("./application/get_pdf.service");
const get_pdf_query_1 = require("./domain/query/get_pdf.query");
const get_bop_pdf_controller_1 = require("./infraestructure/controller/get_bop_pdf.controller");
const get_pdf_data_controller_1 = require("./infraestructure/controller/get_pdf_data.controller");
const get_bop_query_controler_1 = require("./infraestructure/controller/get_bop_query.controler");
const get_bop_search_service_1 = require("./application/get_bop_search.service");
const get_bops_search_query_1 = require("./domain/query/get_bops_search.query");
const save_search_query_1 = require("./domain/query/save_search.query");
const busqueda_entity_1 = require("./infraestructure/database/busqueda.entity");
const get_all_places_controller_1 = require("./infraestructure/controller/get_all_places.controller");
const get_all_places_service_1 = require("./application/get_all_places.service");
const get_all_places_query_1 = require("./domain/query/get_all_places.query");
const check_bops_from_place_controller_1 = require("./infraestructure/controller/check_bops_from_place.controller");
const check_bop_service_1 = require("./application/check_bop.service");
const check_bop_query_1 = require("./domain/query/check_bop.query");
const Services = [
    get_depor_bops_service_1.GetDeporBopsService,
    get_bop_by_content_service_1.GetBopsQueryService,
    get_pdf_service_1.GetPdfService,
    get_bop_search_service_1.GetBopsSearchService,
    get_all_places_service_1.GetAllPlacesService,
    check_bop_service_1.CheckBopService
];
const Query = [
    get_depor_bops_query_1.GetDeporBops,
    get_bop_by_content_querty_1.GetDeporBopsQuery,
    get_bop_by_content_controller_1.GetBopByContentController,
    get_pdf_query_1.GetPdfQuery,
    get_bops_search_query_1.GetBopsSearchQuery,
    save_search_query_1.SaveSearchQuery,
    get_all_places_query_1.GetAllPlacesQuery,
    check_bop_query_1.CheckBopQuery
];
const Controller = [
    get_depor_bops_controller_1.GetDeporBopsController,
    get_bop_by_content_controller_1.GetBopByContentController,
    get_bop_pdf_controller_1.GetBopPdfController,
    get_pdf_data_controller_1.GetBopPdfDataController,
    get_bop_query_controler_1.GetBopsByQueryController,
    get_all_places_controller_1.GetAllPlacesController,
    check_bops_from_place_controller_1.CheckBopsFromPlaceController
];
let BopsModule = class BopsModule {
};
exports.BopsModule = BopsModule;
exports.BopsModule = BopsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                bop_entity_1.Bop,
                pages_entify_1.Pages,
                busqueda_entity_1.Busqueda
            ])
        ],
        controllers: [
            ...Controller
        ],
        providers: [
            ...Services,
            ...Query
        ]
    })
], BopsModule);
//# sourceMappingURL=bops.module.js.map