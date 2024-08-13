import { GetBopsQueryService } from 'src/bops/application/get_bop_by_content.service';
export declare class GetBopByContentController {
    private readonly getBopsBycontentService;
    constructor(getBopsBycontentService: GetBopsQueryService);
    getDeporBops(content: string): Promise<import("../database/pages.entify").Pages[]>;
}
