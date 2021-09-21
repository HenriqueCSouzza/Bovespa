import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('codes')
class Code {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  day: string;

  @Column()
  codbdi: string;

  @Column()
  codneg: string;

  @Column()
  tpmerc: string;

  @Column()
  nomres: string;

  @Column()
  especi: string;

  @Column()
  prazot: string;

  @Column()
  modref: string;

  @Column()
  preabe: string;

  @Column()
  premin: string;

  @Column()
  premax: string;

  @Column()
  premed: string;

  @Column()
  preult: string;

  @Column()
  preofc: string;

  @Column()
  preofv: string;

  @Column()
  preexe: string;

  @Column()
  totneg: string;

  @Column()
  quatot: string;

  @Column()
  voltot: string;

  @Column()
  indopc: string;

  @Column()
  fatcot: string;

  @Column()
  ptoexe: string;

  @Column()
  codisi: string;

  @Column()
  dismes: string;

  @Column()
  datven: string;
}
export default Code;
