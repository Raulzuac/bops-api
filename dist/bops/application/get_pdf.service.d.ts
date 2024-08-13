import { GetPdfQuery } from '../domain/query/get_pdf.query';
export declare class GetPdfService {
    private getPdfQuery;
    constructor(getPdfQuery: GetPdfQuery);
    execute(id: string): Promise<import("../infraestructure/database/bop.entity").Bop>;
}
