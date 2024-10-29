import { Bop } from "src/bops/infraestructure/database/bop.entity";
import { Repository } from "typeorm";
export declare class GetAllPlacesQuery {
    private bopRepository;
    constructor(bopRepository: Repository<Bop>);
    execute(): Promise<string[]>;
}
