import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
import './database';

const app = express();
app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.listen(7000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 7000!');
});
