import { Bop } from "src/bops/infraestructure/database/bop.entity";
import { Pages } from "src/bops/infraestructure/database/pages.entify";
import { SearchBopDtoInput } from "src/bops/infraestructure/dto/search_bop_dto_input";
import { Repository } from "typeorm";
export declare class GetBopsSearchQuery {
    private bopRepository;
    private pagesRepository;
    constructor(bopRepository: Repository<Bop>, pagesRepository: Repository<Pages>);
    execute(search: SearchBopDtoInput): Promise<{
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
