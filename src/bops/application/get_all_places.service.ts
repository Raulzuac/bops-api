import { Injectable } from "@nestjs/common";
import { GetAllPlacesQuery } from "../domain/query/get_all_places.query";

@Injectable()
export class GetAllPlacesService{

    constructor(
        private readonly getAllPlacesQuery: GetAllPlacesQuery
    ){}

    async execute(){
        
        return this.getAllPlacesQuery.execute();
    }
}