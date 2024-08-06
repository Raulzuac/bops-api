import { Injectable } from "@nestjs/common";
import { GetDeporBops } from "../domain/query/get_depor_bops.query";
import { Pages } from "../infraestructure/database/pages.entify";
import { GetPdfQuery } from '../domain/query/get_pdf.query';

@Injectable()
export class GetPdfService{


    
    constructor(
        private getPdfQuery: GetPdfQuery
    ){}

    async execute(id:string){
        const pdf =await this.getPdfQuery.extecute(id);
        return pdf;
    }
}