import { Injectable, Get } from '@nestjs/common';
import { Bop } from "../infraestructure/database/bop.entity";
import { Pages } from "../infraestructure/database/pages.entify";
import { GetDeporBopsQuery } from '../domain/query/get_bop_by_content.querty';

@Injectable()
export class GetBopsQueryService{


    
    constructor(
        private getBopsQuery: GetDeporBopsQuery
    ){}

    async execute(content: string){
        const pages: Pages[] =await this.getBopsQuery.extecute(content);
        
        return pages;
    }
}