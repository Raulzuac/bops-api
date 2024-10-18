import { SearchBopDtoInput } from "../infraestructure/dto/search_bop_dto_input";
import { GetBopsSearchQuery } from "../domain/query/get_bops_search.query";
import { SaveSearchQuery } from "../domain/query/save_search.query";
export declare class GetBopsSearchService {
    private readonly getBopQuery;
    private readonly saveSearchQuery;
    constructor(getBopQuery: GetBopsSearchQuery, saveSearchQuery: SaveSearchQuery);
    execute(query: SearchBopDtoInput): Promise<{
        bop: {
            id: string;
            place: string;
            date: Date;
        };
        pre_coincidence: string;
        coincidence: string;
        post_coincidence: string;
        depor_opos: number;
        num_page: number;
        bopId: string;
        content: string;
    }[]>;
}
