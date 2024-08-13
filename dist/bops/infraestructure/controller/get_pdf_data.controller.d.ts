import { GetPdfService } from '../../application/get_pdf.service';
export declare class GetBopPdfDataController {
    private readonly getPdfService;
    constructor(getPdfService: GetPdfService);
    getBopPdf(id: string): Promise<Buffer>;
}
