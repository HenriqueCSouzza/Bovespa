import { Router } from 'express';
import codesRouter from './codes.routes';

const routes = Router();
routes.use('/codes', codesRouter);

export default routes;
