import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('busquedas')
export class Busqueda {

  @PrimaryColumn('char', { length: 26 })
  id: string;

  @Column('varchar', { length: 255 })
  criteria: string;

  @Column('timestamp')
  fechaBusqueda: Date;

  @Column('timestamp')
  fechaInicio: Date;

  @Column('timestamp')
  fechaFin: Date;
}