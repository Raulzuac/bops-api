import { Injectable } from "@nestjs/common";
import { CheckBopDto } from "../infraestructure/dto/check_bop.dto";
import { CheckBopQuery } from "../domain/query/check_bop.query";

@Injectable()
export class CheckBopService{
    constructor(
        private readonly checkBopQuery: CheckBopQuery
    ){}

    async execute(query: CheckBopDto){
        return this.checkBopQuery.execute(query);
        
    }
}