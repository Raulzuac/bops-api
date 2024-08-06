import {  Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bop } from "src/bops/infraestructure/database/bop.entity";
import { Pages } from "src/bops/infraestructure/database/pages.entify";
import { Repository } from "typeorm";

@Injectable()
export class GetPdfQuery{

    constructor(
        @InjectRepository(Bop) private bopRepository: Repository<Bop>,
        @InjectRepository(Pages) private pagesRepository: Repository<Pages>
    ){}
    
    async extecute(id:string){
        const bop = await this.bopRepository.findOneBy({id:id});
        return bop;
    }
}