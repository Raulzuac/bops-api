import { GetDeporBopsService } from "src/bops/application/get_depor_bops.service";
export declare class GetDeporBopsController {
    private readonly getDeporBopsService;
    constructor(getDeporBopsService: GetDeporBopsService);
    getDeporBops(): Promise<import("../database/pages.entify").Pages[]>;
}
