import { config } from 'dotenv';

const { NODE_ENV } = process.env;
const path = `.env${NODE_ENV ? `.${NODE_ENV}` : ''}`;

export default config({ path });
