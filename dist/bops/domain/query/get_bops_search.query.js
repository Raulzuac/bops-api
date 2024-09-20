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
exports.GetBopsSearchQuery = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bop_entity_1 = require("../../infraestructure/database/bop.entity");
const pages_entify_1 = require("../../infraestructure/database/pages.entify");
const typeorm_2 = require("typeorm");
let GetBopsSearchQuery = class GetBopsSearchQuery {
    constructor(bopRepository, pagesRepository) {
        this.bopRepository = bopRepository;
        this.pagesRepository = pagesRepository;
    }
    async execute(search) {
        const startDate = search.start_date.split('/').reverse().join('-');
        const endDate = search.end_date.split('/').reverse().join('-');
        const query = this.bopRepository.createQueryBuilder()
            .where(`date >= '${startDate}' and date <= '${endDate}'`);
        console.log(query.getSql());
        const bops = await query.getMany();
        const bops_ids = bops.map(bop => bop.id);
        console.log(bops_ids);
        const re = search.criteria.length == 1 ? `${search.criteria[0]}` : search.criteria.map(criteria => {
            if (criteria.startsWith('$')) {
                return `.{0,${criteria.slice(1)}}`;
            }
            return criteria;
        }).join('');
        console.log(re);
        const stringIds = bops_ids.map(id => `'${id}'`).join(',');
        const queryPages = this.pagesRepository.createQueryBuilder()
            .where(`bopId IN (${stringIds})`)
            .andWhere(`content REGEXP '${re}'`);
        console.log(queryPages.getSql());
        const pages = await queryPages.getMany();
        console.log(pages);
        console.log(bops);
        if (pages.length === 0) {
            return [];
        }
        return pages.map(page => {
            const find_bop = bops.find((bop) => {
                if (bop.id === page.bopId)
                    console.log('Encontrado');
                if (bop.id === page.bopId)
                    return bop;
            });
            console.log(find_bop);
            const coincidence = page.content.match(new RegExp(re, 'i'));
            const pre_coincidence = page.content.slice(0, coincidence.index);
            const post_coincidence = page.content.slice(coincidence.index + coincidence[0].length);
            console.log(coincidence[0]);
            console.log(pre_coincidence);
            console.log(post_coincidence);
            const bop = {
                id: find_bop.id,
                place: find_bop.place,
                date: find_bop.date,
            };
            return {
                ...page,
                bop,
                pre_coincidence,
                coincidence: coincidence[0],
                post_coincidence,
            };
        });
    }
};
exports.GetBopsSearchQuery = GetBopsSearchQuery;
exports.GetBopsSearchQuery = GetBopsSearchQuery = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bop_entity_1.Bop)),
    __param(1, (0, typeorm_1.InjectRepository)(pages_entify_1.Pages)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], GetBopsSearchQuery);
//# sourceMappingURL=get_bops_search.query.js.map