import { Router } from 'express';
// import { getCustomRepository } from 'typeorm';
// import { parseISO } from 'date-fns';
import Service from '../packages/HGApis/weather';

const codesRouter = Router();
const weatherService = new Service();

codesRouter.get('/weather', async (request, response) => {
  const { query } = request;
  try {
    const res = await weatherService.show(query);
    return response.json(res);
  } catch (err) {
    return response.json(err);
  }
});

export default codesRouter;
