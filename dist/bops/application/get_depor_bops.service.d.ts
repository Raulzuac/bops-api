import { GetDeporBops } from "../domain/query/get_depor_bops.query";
import { Pages } from "../infraestructure/database/pages.entify";
export declare class GetDeporBopsService {
    private getDeporBopsQuery;
    constructor(getDeporBopsQuery: GetDeporBops);
    execute(): Promise<Pages[]>;
}
