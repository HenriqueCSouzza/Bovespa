// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity('codes')
class Code {
  id: string;

  day: string;

  codbdi: string;

  codneg: string;

  tpmerc: string;

  nomres: string;

  especi: string;

  prazot: string;

  modref: string;

  preabe: string;

  premin: string;

  premax: string;

  premed: string;

  preult: string;

  preofc: string;

  preofv: string;

  preexe: string;

  totneg: string;

  quatot: string;

  voltot: string;

  indopc: string;

  fatcot: string;

  ptoexe: string;

  codisi: string;

  dismes: string;

  datven: string;

  // eslint-disable-next-line camelcase
  created_at: string;

  // eslint-disable-next-line camelcase
  updated_at: string;
}
export default Code;
