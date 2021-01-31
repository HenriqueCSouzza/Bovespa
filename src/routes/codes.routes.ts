import { Router } from 'express';
// import { getCustomRepository } from 'typeorm';
// import { parseISO } from 'date-fns';
import weatherService from '../packages/HGApis/weather';

const codesRouter = Router();

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
