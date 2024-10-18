import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Busqueda } from "src/bops/infraestructure/database/busqueda.entity";
import { SaveBusquedaDto } from "src/bops/infraestructure/dto/save_busqueda_dto";
import { Repository } from "typeorm";

@Injectable()
export class SaveSearchQuery{

    constructor(
        @InjectRepository(Busqueda) private busquedaRepository: Repository<Busqueda>,
        
    ){}

    async execute(busqueda: SaveBusquedaDto){
        const busquedaBBDD: Busqueda = {
            ...busqueda
        }
        console.log(busquedaBBDD);
        this.busquedaRepository.save(busquedaBBDD);
    }
}