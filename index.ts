import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './src/init/routes';
import localize from './src/init/localize';
import db from './src/init/db';
import theApp from './src/init/theApp';

dotenv.config();
const app: Express = express();

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
theApp(app);
localize(app);
db();
routes(app);

app.listen(3000, () => {
  console.log(`⚡️ [server]: Server is running at https://localhost:${3000}`);
});
export default app;
