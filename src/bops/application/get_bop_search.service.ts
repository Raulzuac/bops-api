import { Injectable } from "@nestjs/common";
import { SearchBopDtoInput } from "../infraestructure/dto/search_bop_dto_input";
import { GetBopsSearchQuery } from "../domain/query/get_bops_search.query";

@Injectable()
export class GetBopsSearchService{
    constructor(
        private readonly getBopQuery: GetBopsSearchQuery
    ){

    }

    execute(query: SearchBopDtoInput){
        console.log(query);
        
        return this.getBopQuery.execute(query)
    }
}