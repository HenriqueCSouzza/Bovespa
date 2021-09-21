import service from './defaultConfig';
import Code from '../../domains/Code';

interface Parameters {
  date?: string;
  quote?: string;
}

class Bovespa {
  public async show({
    quote,
    date,
  }: Parameters): Promise<Code | null | unknown> {
    try {
      const res = await service.get(`/api/quote/${quote}/${date}`);
      return res.data;
    } catch (err: unknown) {
      return err;
    }
  }
}

export default new Bovespa();
