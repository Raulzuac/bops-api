import { Bop } from "src/bops/infraestructure/database/bop.entity";
import { CheckBopDto } from "src/bops/infraestructure/dto/check_bop.dto";
import { Repository } from "typeorm";
export declare class CheckBopQuery {
    private bopRepository;
    constructor(bopRepository: Repository<Bop>);
    execute(query: CheckBopDto): Promise<({
        date: any;
        id: string;
        place: string;
        bop?: undefined;
    } | {
        date: any;
        bop: any;
        id?: undefined;
        place?: undefined;
    })[]>;
}
