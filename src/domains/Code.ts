import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('codes')
class Code {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}
export default Code;
