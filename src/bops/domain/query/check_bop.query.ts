import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bop } from "src/bops/infraestructure/database/bop.entity";
import { CheckBopDto } from "src/bops/infraestructure/dto/check_bop.dto";
import { Repository } from "typeorm";
import { GetPdfService } from '../../application/get_pdf.service';

@Injectable()
export class CheckBopQuery{
    constructor(
        @InjectRepository(Bop) private bopRepository: Repository<Bop>,
    ){}

    async execute(query: CheckBopDto){
        

        const bops = await this.bopRepository.createQueryBuilder("bop")
        .select(["bop.id", "bop.place", "bop.date"])
        .where(`bop.place LIKE '%${query.place}%' and bop.date >= '${query.from}' and bop.date <= '${query.to}'`)
        .getMany();
        
        //Array con las fechas desde la query.from hasta la query.to
        const dates = [];
        let date = new Date(query.from);
        while(date <= new Date(query.to)){
            dates.push(date.toISOString().split('T')[0]);
            date.setDate(date.getDate() + 1);
        }
        
        return dates.map(date =>{
            const bop = bops.find(bop => bop.date=== date);
            return bop?
            {
                date,
                id:bop.id,
                place:bop.place
            }:
            {
                date,
                bop: null
            }
        })
        
    }
}