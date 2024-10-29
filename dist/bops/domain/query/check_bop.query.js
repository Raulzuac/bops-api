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
exports.CheckBopQuery = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bop_entity_1 = require("../../infraestructure/database/bop.entity");
const typeorm_2 = require("typeorm");
let CheckBopQuery = class CheckBopQuery {
    constructor(bopRepository) {
        this.bopRepository = bopRepository;
    }
    async execute(query) {
        const bops = await this.bopRepository.createQueryBuilder("bop")
            .select(["bop.id", "bop.place", "bop.date"])
            .where(`bop.place LIKE '%${query.place}%' and bop.date >= '${query.from}' and bop.date <= '${query.to}'`)
            .getMany();
        const dates = [];
        let date = new Date(query.from);
        while (date <= new Date(query.to)) {
            dates.push(date.toISOString().split('T')[0]);
            date.setDate(date.getDate() + 1);
        }
        return dates.map(date => {
            const bop = bops.find(bop => bop.date === date);
            return bop ?
                {
                    date,
                    id: bop.id,
                    place: bop.place
                } :
                {
                    date,
                    bop: null
                };
        });
    }
};
exports.CheckBopQuery = CheckBopQuery;
exports.CheckBopQuery = CheckBopQuery = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bop_entity_1.Bop)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CheckBopQuery);
//# sourceMappingURL=check_bop.query.js.map