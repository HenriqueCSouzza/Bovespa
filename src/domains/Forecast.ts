import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('forecasts')
class Forecast {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  date: string;

  @Column()
  weekday: string;

  @Column()
  max: number;

  @Column()
  min: number;

  @Column()
  description: string;

  @Column()
  condition: string;
}
export default Forecast;
