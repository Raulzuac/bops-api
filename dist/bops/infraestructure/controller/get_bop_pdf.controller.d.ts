import { GetPdfService } from '../../application/get_pdf.service';
import { Response } from 'express';
export declare class GetBopPdfController {
    private readonly getPdfService;
    constructor(getPdfService: GetPdfService);
    getBopPdf(id: string, res: Response): Promise<void>;
}
