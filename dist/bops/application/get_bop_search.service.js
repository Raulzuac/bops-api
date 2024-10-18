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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBopsSearchService = void 0;
const common_1 = require("@nestjs/common");
const get_bops_search_query_1 = require("../domain/query/get_bops_search.query");
const ulid_1 = require("ulid");
const save_search_query_1 = require("../domain/query/save_search.query");
let GetBopsSearchService = class GetBopsSearchService {
    constructor(getBopQuery, saveSearchQuery) {
        this.getBopQuery = getBopQuery;
        this.saveSearchQuery = saveSearchQuery;
    }
    execute(query) {
        const startDateString = query.start_date.split('/').reverse().join('-');
        const endDateString = query.end_date.split('/').reverse().join('-');
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);
        const busqueda = {
            id: (0, ulid_1.ulid)(),
            criteria: query.criteria.join(','),
            fechaBusqueda: new Date(),
            fechaInicio: startDate,
            fechaFin: endDate
        };
        this.saveSearchQuery.execute(busqueda);
        return this.getBopQuery.execute(query);
    }
};
exports.GetBopsSearchService = GetBopsSearchService;
exports.GetBopsSearchService = GetBopsSearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [get_bops_search_query_1.GetBopsSearchQuery,
        save_search_query_1.SaveSearchQuery])
], GetBopsSearchService);
//# sourceMappingURL=get_bop_search.service.js.map