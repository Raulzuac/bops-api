import { SearchBopDtoInput } from "../infraestructure/dto/search_bop_dto_input";
import { GetBopsSearchQuery } from "../domain/query/get_bops_search.query";
export declare class GetBopsSearchService {
    private readonly getBopQuery;
    constructor(getBopQuery: GetBopsSearchQuery);
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
