import { Controller, Get } from "@nestjs/common";
import { GetDeporBopsService } from "src/bops/application/get_depor_bops.service";

@Controller()
export class GetDeporBopsController{

    constructor(
        private readonly getDeporBopsService: GetDeporBopsService
    ){}

    @Get('deporBops')
    getDeporBops(){
        return this.getDeporBopsService.execute();
    }
}