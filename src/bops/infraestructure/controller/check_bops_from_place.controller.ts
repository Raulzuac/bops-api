import { Controller, Get, Param, Query } from "@nestjs/common";
import { from } from "rxjs";
import { CheckBopService } from '../../application/check_bop.service';
import { CheckBopDto } from "../dto/check_bop.dto";

@Controller()
export class CheckBopsFromPlaceController{

    constructor(
        private readonly checkBopService:CheckBopService
    ){}

    @Get('check')
    checkBopsFromPlace(@Query('place') place: string,@Query('from') from: string, @Query('to') to: string){

        const query:CheckBopDto = {
            place,
            from,
            to
        }
        return this.checkBopService.execute(query);
    }
}