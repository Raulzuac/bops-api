"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bops_module_1 = require("./bops/bops.module");
const bop_entity_1 = require("./bops/infraestructure/database/bop.entity");
const pages_entify_1 = require("./bops/infraestructure/database/pages.entify");
const config_1 = require("@nestjs/config");
const busqueda_entity_1 = require("./bops/infraestructure/database/busqueda.entity");
const Entities = [
    bop_entity_1.Bop,
    pages_entify_1.Pages,
    busqueda_entity_1.Busqueda
];
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            bops_module_1.BopsModule,
            typeorm_1.TypeOrmModule.forRoot({
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
], AppModule);
//# sourceMappingURL=app.module.js.map