import service from './index';

const params = {
  key: process.env.HGBRASIL_KEY,
};

const financeService = {
  show: service.get('/finance', { params }),
};

export default financeService;
