import { GetAllPlacesQuery } from "../domain/query/get_all_places.query";
export declare class GetAllPlacesService {
    private readonly getAllPlacesQuery;
    constructor(getAllPlacesQuery: GetAllPlacesQuery);
    execute(): Promise<string[]>;
}
