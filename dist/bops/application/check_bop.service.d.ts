import { CheckBopDto } from "../infraestructure/dto/check_bop.dto";
import { CheckBopQuery } from "../domain/query/check_bop.query";
export declare class CheckBopService {
    private readonly checkBopQuery;
    constructor(checkBopQuery: CheckBopQuery);
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
