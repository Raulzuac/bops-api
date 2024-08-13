import { Bop } from "src/bops/infraestructure/database/bop.entity";
import { Pages } from "src/bops/infraestructure/database/pages.entify";
import { Repository } from "typeorm";
export declare class GetDeporBops {
    private bopRepository;
    private pagesRepository;
    constructor(bopRepository: Repository<Bop>, pagesRepository: Repository<Pages>);
    extecute(): Promise<{
        bop: {
            id: string;
            place: string;
            date: Date;
        };
        depor_opos: number;
        num_page: number;
        bopId: string;
        content: string;
    }[]>;
}
