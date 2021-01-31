import service from './index';

interface Parameters {
  format?: string;
  locale?: string;
  // eslint-disable-next-line camelcase
  city_name?: string;
}

class WeatherService {
  public async show(params: Parameters): Promise<any> {
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

export default WeatherService;
