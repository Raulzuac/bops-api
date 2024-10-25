import { Body, Controller, Get, Post } from "@nestjs/common";
import { SearchBopDtoInput } from "../dto/search_bop_dto_input";
import { GetBopsSearchService } from '../../application/get_bop_search.service';

@Controller()
export class GetBopsByQueryController{
    constructor(
        private readonly getBopSearchService: GetBopsSearchService
    ){}

    @Post('search')
    async getBopsByQuery(@Body() body: SearchBopDtoInput){
        
        const response = await this.getBopSearchService.execute(body);
    
        return response; 

    }
}