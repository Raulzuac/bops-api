import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bop } from "src/bops/infraestructure/database/bop.entity";
import { Repository } from "typeorm";

@Injectable()
export class GetAllPlacesQuery{
        
        constructor(
        @InjectRepository(Bop) private bopRepository: Repository<Bop>,
        ){}
    
        async execute(){
            const bops = await this.bopRepository.createQueryBuilder("bop")
            .select("bop.place")
            .groupBy("bop.place")
            .getMany();
            
            return bops.map(bop => {
                return bop.place
            })
        }  
}