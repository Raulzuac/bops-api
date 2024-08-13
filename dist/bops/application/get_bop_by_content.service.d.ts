import { Pages } from "../infraestructure/database/pages.entify";
import { GetDeporBopsQuery } from '../domain/query/get_bop_by_content.querty';
export declare class GetBopsQueryService {
    private getBopsQuery;
    constructor(getBopsQuery: GetDeporBopsQuery);
    execute(content: string): Promise<Pages[]>;
}
