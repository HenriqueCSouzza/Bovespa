import service from './index';

const params = {
  key: process.env.HGBRASIL_KEY,
};

const geoipService = {
  show: service.get('/geoip', { params }),
};

export default geoipService;
