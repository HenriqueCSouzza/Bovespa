import service from './defaultConfig';
import Code from '../../domains/Code';

interface Parameters {
  format?: string;
  locale?: string;
  precision?: boolean;
  fields?: string;
  // eslint-disable-next-line camelcase
  user_ip?: string;
}

class Bovespa {
  public async show(params: Parameters): Promise<Code | null> {
    try {
      const res = await service.get('/bovespa', { params });

      return res.data;
    } catch (err) {
      return err;
    }
  }
}

export default new Bovespa();
