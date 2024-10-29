import { CheckBopService } from '../../application/check_bop.service';
export declare class CheckBopsFromPlaceController {
    private readonly checkBopService;
    constructor(checkBopService: CheckBopService);
    checkBopsFromPlace(place: string, from: string, to: string): Promise<({
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
