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
exports.CheckBopsFromPlaceController = void 0;
const common_1 = require("@nestjs/common");
const check_bop_service_1 = require("../../application/check_bop.service");
let CheckBopsFromPlaceController = class CheckBopsFromPlaceController {
    constructor(checkBopService) {
        this.checkBopService = checkBopService;
    }
    checkBopsFromPlace(place, from, to) {
        const query = {
            place,
            from,
            to
        };
        return this.checkBopService.execute(query);
    }
};
exports.CheckBopsFromPlaceController = CheckBopsFromPlaceController;
__decorate([
    (0, common_1.Get)('check'),
    __param(0, (0, common_1.Query)('place')),
    __param(1, (0, common_1.Query)('from')),
    __param(2, (0, common_1.Query)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], CheckBopsFromPlaceController.prototype, "checkBopsFromPlace", null);
exports.CheckBopsFromPlaceController = CheckBopsFromPlaceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [check_bop_service_1.CheckBopService])
], CheckBopsFromPlaceController);
//# sourceMappingURL=check_bops_from_place.controller.js.map