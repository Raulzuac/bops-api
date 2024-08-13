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
const Services = [
    get_depor_bops_service_1.GetDeporBopsService,
    get_bop_by_content_service_1.GetBopsQueryService,
    get_pdf_service_1.GetPdfService
];
const Query = [
    get_depor_bops_query_1.GetDeporBops,
    get_bop_by_content_querty_1.GetDeporBopsQuery,
    get_bop_by_content_controller_1.GetBopByContentController,
    get_pdf_query_1.GetPdfQuery,
];
const Controller = [
    get_depor_bops_controller_1.GetDeporBopsController,
    get_bop_by_content_controller_1.GetBopByContentController,
    get_bop_pdf_controller_1.GetBopPdfController,
    get_pdf_data_controller_1.GetBopPdfDataController
];
let BopsModule = class BopsModule {
};
exports.BopsModule = BopsModule;
exports.BopsModule = BopsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                bop_entity_1.Bop,
                pages_entify_1.Pages
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