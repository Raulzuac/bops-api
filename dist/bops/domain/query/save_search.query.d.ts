import { Busqueda } from "src/bops/infraestructure/database/busqueda.entity";
import { SaveBusquedaDto } from "src/bops/infraestructure/dto/save_busqueda_dto";
import { Repository } from "typeorm";
export declare class SaveSearchQuery {
    private busquedaRepository;
    constructor(busquedaRepository: Repository<Busqueda>);
    execute(busqueda: SaveBusquedaDto): Promise<void>;
}
