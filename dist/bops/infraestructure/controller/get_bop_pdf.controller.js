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
exports.GetBopPdfController = void 0;
const common_1 = require("@nestjs/common");
const get_pdf_service_1 = require("../../application/get_pdf.service");
let GetBopPdfController = class GetBopPdfController {
    constructor(getPdfService) {
        this.getPdfService = getPdfService;
    }
    async getBopPdf(id, res) {
        console.log(id);
        const pdf = await this.getPdfService.execute(id);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${pdf.place}-${pdf.date}.pdf"`);
        res.send(pdf.file);
    }
};
exports.GetBopPdfController = GetBopPdfController;
__decorate([
    (0, common_1.Get)('downloadpdf/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GetBopPdfController.prototype, "getBopPdf", null);
exports.GetBopPdfController = GetBopPdfController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [get_pdf_service_1.GetPdfService])
], GetBopPdfController);
//# sourceMappingURL=get_bop_pdf.controller.js.map