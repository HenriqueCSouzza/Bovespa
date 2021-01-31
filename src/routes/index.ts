import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import codesRouter from './codes.routes';

const routes = Router();
routes.use('/appointments', appointmentsRouter);
routes.use('/codes', codesRouter);

export default routes;
