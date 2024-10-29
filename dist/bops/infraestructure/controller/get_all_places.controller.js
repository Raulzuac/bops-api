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
exports.GetAllPlacesController = void 0;
const common_1 = require("@nestjs/common");
const get_all_places_service_1 = require("../../application/get_all_places.service");
let GetAllPlacesController = class GetAllPlacesController {
    constructor(getAllPlacesService) {
        this.getAllPlacesService = getAllPlacesService;
    }
    getAllPlaces() {
        return this.getAllPlacesService.execute();
    }
};
exports.GetAllPlacesController = GetAllPlacesController;
__decorate([
    (0, common_1.Get)('places'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GetAllPlacesController.prototype, "getAllPlaces", null);
exports.GetAllPlacesController = GetAllPlacesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [get_all_places_service_1.GetAllPlacesService])
], GetAllPlacesController);
//# sourceMappingURL=get_all_places.controller.js.map