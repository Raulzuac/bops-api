import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Bop } from "./bop.entity";

@Entity('pages')
export class Pages{
    @Column('tinyint')
    depor_opos: number;

    @Column('int',{
        primary: true
    })
    num_page: number;

    @Column('varchar',{
        length: 26
    })
    bopId: string;

    @Column('longtext')
    content: string;

}