import service from './index';

interface Parameters {
  format?: string;
  locale?: string;
  precision?: boolean;
  fields?: string;
  // eslint-disable-next-line camelcase
  user_ip?: string;
}

class FinanceService {
  public async show(params: Parameters): Promise<any> {
    const defaultParams = {
      ...params,
      key: process.env.HGBRASIL_KEY,
    };
    try {
      const res = await service.get('/finance', { params: defaultParams });

      return res.data;
    } catch (err) {
      return err;
    }
  }
}
export default new FinanceService();
