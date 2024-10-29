import { GetAllPlacesService } from "src/bops/application/get_all_places.service";
export declare class GetAllPlacesController {
    private readonly getAllPlacesService;
    constructor(getAllPlacesService: GetAllPlacesService);
    getAllPlaces(): Promise<string[]>;
}
