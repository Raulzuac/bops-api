import { Controller, Get, Param, Query, Res } from "@nestjs/common";
import { GetPdfService } from '../../application/get_pdf.service';
import { Response } from 'express';
@Controller()
export class GetBopPdfController{

    constructor(
        private readonly getPdfService :GetPdfService
    ){
        
    }

    @Get('downloadpdf/:id')
    async getBopPdf(@Param('id') id: string,@Res() res:Response){
        
        console.log(id);
        

        const pdf =await this.getPdfService.execute(id)

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${pdf.place}-${pdf.date}.pdf"`); // Ajusta el nombre del archivo según sea necesario

        res.send(pdf.file);


    }
}