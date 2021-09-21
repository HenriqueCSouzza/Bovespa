import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import Forecast from './Forecast';

@Entity('weathers')
class Weather {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  temp: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  conditionCode: string;

  @Column()
  description: string;

  @Column()
  currently: string;

  @Column()
  cid: string;

  @Column()
  city: string;

  @Column()
  imgId: string;

  @Column()
  humidity: number;

  @Column()
  windSpeedy: string;

  @Column()
  sunrise: string;

  @Column()
  sunset: string;

  @Column()
  conditionSlug: string;

  @Column()
  cityName: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  forecasts: string;
}
export default Weather;
