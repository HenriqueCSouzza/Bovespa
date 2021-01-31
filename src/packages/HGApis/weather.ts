import service from './index';
import Weather from '../../domains/Weather';

interface Parameters {
  format?: string;
  locale?: string;
  // eslint-disable-next-line camelcase
  city_name?: string;
}

class WeatherService {
  public async show(params: Parameters): Promise<Weather | null> {
    const defaultParams = {
      ...params,
      key: process.env.HGBRASIL_KEY,
    };
    try {
      const res = await service.get('/weather', { params: defaultParams });

      return res.data;
    } catch (err) {
      return err;
    }
  }
}

export default new WeatherService();
