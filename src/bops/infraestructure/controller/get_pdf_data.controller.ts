import { Controller, Get, Param, Query, Res } from "@nestjs/common";
import { GetPdfService } from '../../application/get_pdf.service';
import { Response } from 'express';
@Controller()
export class GetBopPdfDataController{

    constructor(
        private readonly getPdfService :GetPdfService
    ){
        
    }

    @Get('pdf/:id')
    async getBopPdf(@Param('id') id: string){
        
        console.log(id);
        

        const pdf =await this.getPdfService.execute(id)

        return pdf.file;


    }
}