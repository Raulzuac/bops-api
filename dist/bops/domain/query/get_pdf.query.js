"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPdfQuery = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bop_entity_1 = require("../../infraestructure/database/bop.entity");
const pages_entify_1 = require("../../infraestructure/database/pages.entify");
const typeorm_2 = require("typeorm");
let GetPdfQuery = class GetPdfQuery {
    constructor(bopRepository, pagesRepository) {
        this.bopRepository = bopRepository;
        this.pagesRepository = pagesRepository;
    }
    async extecute(id) {
        const bop = await this.bopRepository.findOneBy({ id: id });
        return bop;
    }
};
exports.GetPdfQuery = GetPdfQuery;
exports.GetPdfQuery = GetPdfQuery = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bop_entity_1.Bop)),
    __param(1, (0, typeorm_1.InjectRepository)(pages_entify_1.Pages)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], GetPdfQuery);
//# sourceMappingURL=get_pdf.query.js.map