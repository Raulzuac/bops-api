import { SearchBopDtoInput } from "../dto/search_bop_dto_input";
import { GetBopsSearchService } from '../../application/get_bop_search.service';
export declare class GetBopsByQueryController {
    private readonly getBopSearchService;
    constructor(getBopSearchService: GetBopsSearchService);
    getBopsByQuery(body: SearchBopDtoInput): Promise<{
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
