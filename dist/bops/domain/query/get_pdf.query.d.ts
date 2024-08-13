import { Bop } from "src/bops/infraestructure/database/bop.entity";
import { Pages } from "src/bops/infraestructure/database/pages.entify";
import { Repository } from "typeorm";
export declare class GetPdfQuery {
    private bopRepository;
    private pagesRepository;
    constructor(bopRepository: Repository<Bop>, pagesRepository: Repository<Pages>);
    extecute(id: string): Promise<Bop>;
}
