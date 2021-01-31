import service from './index';

interface Parameters {
  format?: string;
  locale?: string;
  precision?: boolean;
  fields?: string;
  // eslint-disable-next-line camelcase
  user_ip?: string;
}

class GeoipService {
  public async show(params: Parameters): Promise<any> {
    const defaultParams = {
      ...params,
      key: process.env.HGBRASIL_KEY,
    };
    try {
      const res = await service.get('/geoip', { params: defaultParams });

      return res.data;
    } catch (err) {
      return err;
    }
  }
}

export default GeoipService;
