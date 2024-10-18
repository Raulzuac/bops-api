import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bop } from "src/bops/infraestructure/database/bop.entity";
import { Pages } from "src/bops/infraestructure/database/pages.entify";
import { SearchBopDtoInput } from "src/bops/infraestructure/dto/search_bop_dto_input";
import { Repository } from "typeorm";

@Injectable()
export class GetBopsSearchQuery {

    constructor(
        @InjectRepository(Bop) private bopRepository: Repository<Bop>,
        @InjectRepository(Pages) private pagesRepository: Repository<Pages>
    ) { }

    async execute(search: SearchBopDtoInput) {
        // Primero, buscamos los ids de los bops que están comprendidos en las fechas
        //formateamos bien las fechas 15/06/2021 > 2021-06-15
        const startDate = search.start_date.split('/').reverse().join('-');
        const endDate = search.end_date.split('/').reverse().join('-');

        // const query= this.bopRepository.createQueryBuilder()
        //     .where(`date >= '${startDate}' and date <= '${endDate}'`);

        const query = this.bopRepository.createQueryBuilder("bop")
            .select(["bop.id","bop.date","bop.place"])  // Selecciona solo el campo 'id'
            .where(`bop.date >= :startDate AND bop.date <= :endDate`, { startDate, endDate });
        // console.log(query.getSql());

        const bops = await query.getMany();


        const bops_ids = bops.map(bop => bop.id);
        // console.log(bops_ids);



        // Creamos la expresión regular
        const re = search.criteria.length == 1 ? `${search.criteria[0]}` : search.criteria.map(criteria => {
            if (criteria.startsWith('$')) {
                return `.{0,${criteria.slice(1)}}`;
            }
            return criteria;
        }).join('');
        // console.log(re);


        // Buscamos las páginas que contengan los criterios de búsqueda y que pertenezcan a los bops encontrados
        const stringIds = bops_ids.map(id => `'${id}'`).join(',');
        const queryPages = this.pagesRepository.createQueryBuilder()
            .where(`bopId IN (${stringIds})`)
            .andWhere(`content REGEXP '${re}'`);
        // console.log(queryPages.getSql());
        const pages = await queryPages.getMany();


        // console.log(pages);
        // console.log(bops);

        if (pages.length === 0) {
            return [];
        }
        // Ordenar las páginas por la fecha correspondiente de su bop
        return pages.map(page => {

            const find_bop: Bop = bops.find((bop) => {
                // if (bop.id === page.bopId) console.log('Encontrado');
                if (bop.id === page.bopId) return bop;

            });
            // console.log(find_bop);

            const coincidence = page.content.match(new RegExp(re, 'i'));
            const pre_coincidence = page.content.slice(0, coincidence.index);
            const post_coincidence = page.content.slice(coincidence.index + coincidence[0].length);
            // console.log(coincidence[0]);
            // console.log(pre_coincidence);
            // console.log(post_coincidence);

            const bop = {
                id: find_bop.id,
                place: find_bop.place,
                date: find_bop.date,
            };

            //quiero devolver para cada página lo que hay delante,lo que coincide con la expresión regular y lo que encuentra y lo que hay detrás

            return {
                ...page,
                bop,
                pre_coincidence,
                coincidence: coincidence[0],
                post_coincidence,
            };
        });

    }
}