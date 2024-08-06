import { Injectable } from "@nestjs/common";
import { GetDeporBops } from "../domain/query/get_depor_bops.query";
import { Bop } from "../infraestructure/database/bop.entity";
import { Pages } from "../infraestructure/database/pages.entify";

@Injectable()
export class GetDeporBopsService{


    
    constructor(
        private getDeporBopsQuery: GetDeporBops
    ){}

    async execute(){
        const pages: Pages[] =await this.getDeporBopsQuery.extecute();
        
        return pages;
    }
}