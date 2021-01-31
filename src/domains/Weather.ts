// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

interface Forecast {
  date: string;
  weekday: string;
  max: number;
  min: number;
  description: string;
  condition: string;
}
// @Entity('codes')
class Weather {
  temp: number;

  date: string;

  time: string;

  conditionCode: string;

  description: string;

  currently: string;

  cid: string;

  city: string;

  imgId: string;

  humidity: number;

  windSpeedy: string;

  sunrise: string;

  sunset: string;

  conditionSlug: string;

  cityName: string;

  latitude: number;

  longitude: number;

  forecast: Array<Forecast>;
}
export default Weather;
