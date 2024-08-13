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
exports.GetDeporBopsQuery = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bop_entity_1 = require("../../infraestructure/database/bop.entity");
const pages_entify_1 = require("../../infraestructure/database/pages.entify");
const typeorm_2 = require("typeorm");
let GetDeporBopsQuery = class GetDeporBopsQuery {
    constructor(bopRepository, pagesRepository) {
        this.bopRepository = bopRepository;
        this.pagesRepository = pagesRepository;
    }
    async extecute(content) {
        const pages = await this.pagesRepository.createQueryBuilder()
            .where("content LIKE :content", { content: `%${content}%` })
            .getMany();
        const bops_ids = pages.map(page => page.bopId);
        const bops = await this.bopRepository.createQueryBuilder()
            .where("id IN (:...ids)", { ids: bops_ids })
            .getMany();
        pages.sort((a, b) => {
            const dateA = bops.find(bop => bop.id === a.bopId).date;
            const dateB = bops.find(bop => bop.id === b.bopId).date;
            return dateA > dateB ? -1 : 1;
        });
        return pages.map(page => {
            const find_bop = bops.find(bop => bop.id === page.bopId);
            const bop = {
                id: find_bop.id,
                place: find_bop.place,
                date: find_bop.date,
            };
            return {
                ...page,
                bop
            };
        });
    }
};
exports.GetDeporBopsQuery = GetDeporBopsQuery;
exports.GetDeporBopsQuery = GetDeporBopsQuery = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bop_entity_1.Bop)),
    __param(1, (0, typeorm_1.InjectRepository)(pages_entify_1.Pages)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], GetDeporBopsQuery);
//# sourceMappingURL=get_bop_by_content.querty.js.map