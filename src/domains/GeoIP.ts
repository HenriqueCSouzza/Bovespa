// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

interface Flag {
  svg: string;
  // eslint-disable-next-line camelcase
  png_16: string;
}

interface Country {
  name: string;
  code: string;
  capital: string;
  // eslint-disable-next-line camelcase
  calling_code: string;
  flag: Flag;
}

// @Entity('codes')
class GeoIP {
  address: string;

  type: string;

  city: string;

  region: string;

  // eslint-disable-next-line camelcase
  country_name: string;

  continent: string;

  // eslint-disable-next-line camelcase
  continent_code: string;

  // eslint-disable-next-line camelcase
  region_code: string;

  isp: string;

  woeid: number;

  latitude: number;

  longitude: number;

  country: Country;
}
export default GeoIP;
