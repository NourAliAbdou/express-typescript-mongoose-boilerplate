import { Express } from 'express';

import { authRouter, userRouter } from '../mvc/routes';
import { Routes } from '../mvc/routes/routesStrings';

export default (app: Express) => {
  app.use('/', authRouter);
  app.use(Routes.user, userRouter);
};
