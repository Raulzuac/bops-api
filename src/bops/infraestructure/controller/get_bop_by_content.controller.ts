import { Controller, Get, Query } from "@nestjs/common";
import { GetBopsQueryService } from 'src/bops/application/get_bop_by_content.service';
import { GetDeporBopsService } from "src/bops/application/get_depor_bops.service";

@Controller()
export class GetBopByContentController{

    constructor(
        private readonly getBopsBycontentService :GetBopsQueryService
    ){}

    @Get('bops')
    getDeporBops(@Query('content') content: string){
        
        return this.getBopsBycontentService.execute(content);
    }
}