import { Controller, Get } from "@nestjs/common";
import { GetAllPlacesService } from "src/bops/application/get_all_places.service";

@Controller()
export class GetAllPlacesController{

    constructor(
        private readonly getAllPlacesService: GetAllPlacesService
    ){

    }

    @Get('places')
    getAllPlaces(){
        return this.getAllPlacesService.execute();
    }
}