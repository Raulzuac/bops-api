import { Injectable } from "@nestjs/common";
import { SearchBopDtoInput } from "../infraestructure/dto/search_bop_dto_input";
import { GetBopsSearchQuery } from "../domain/query/get_bops_search.query";
import { ulid } from "ulid";
import { SaveBusquedaDto } from "../infraestructure/dto/save_busqueda_dto";
import { SaveSearchQuery } from "../domain/query/save_search.query";

@Injectable()
export class GetBopsSearchService{
    constructor(
        private readonly getBopQuery: GetBopsSearchQuery,
        private readonly saveSearchQuery: SaveSearchQuery
    ){

    }

    execute(query: SearchBopDtoInput){
        // console.log(query);
        const startDateString = query.start_date.split('/').reverse().join('-');
        const endDateString = query.end_date.split('/').reverse().join('-');
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);
        
        const busqueda: SaveBusquedaDto = {
            id: ulid(),
            criteria: query.criteria.join(','),
            fechaBusqueda: new Date(),
            fechaInicio: startDate,
            fechaFin: endDate

        };
        // console.log(busqueda);
        
        this.saveSearchQuery.execute(busqueda);
        return this.getBopQuery.execute(query)
    }
}