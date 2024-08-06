import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Pages } from "./pages.entify";

@Entity('bops')
export class Bop{

    @Column('varchar',{
        length: 100
    })
    place: string;

    @Column('date')
    date: Date;

    @Column('varchar',{
        length: 26,
        primary: true
    })
    id: string;

    @Column('longblob')
    file: Buffer;
}