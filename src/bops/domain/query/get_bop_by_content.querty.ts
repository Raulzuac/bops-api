import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bop } from "src/bops/infraestructure/database/bop.entity";
import { Pages } from "src/bops/infraestructure/database/pages.entify";
import { Repository } from "typeorm";

@Injectable()
export class GetDeporBopsQuery{

    constructor(
        @InjectRepository(Bop) private bopRepository: Repository<Bop>,
        @InjectRepository(Pages) private pagesRepository: Repository<Pages>
    ){}
    
    async extecute(content:string){
        const pages = await this.pagesRepository.createQueryBuilder()
        .where("content LIKE :content",{content: `%${content}%`})
        .getMany();
        
        const bops_ids:string[] = pages.map(page => page.bopId);
        
        const bops = await this.bopRepository.createQueryBuilder()
        .where("id IN (:...ids)", {ids: bops_ids})
        .getMany();
        //ordenar las páginas por la fecha correspondiente de su bop
        pages.sort((a,b) => {
            const dateA = bops.find(bop => bop.id === a.bopId).date;
            const dateB = bops.find(bop => bop.id === b.bopId).date;
            return dateA > dateB ? -1 : 1;
        })     
        return pages.map(page =>{
            const find_bop:Bop = bops.find(bop => bop.id === page.bopId);
            const bop= {
                id: find_bop.id,
                place: find_bop.place,
                date: find_bop.date,
            }
            return {
                ...page,
                bop
            }
            
        })
    }
}