import express, {Express} from 'express';
const app: Express = express();

app.get('/', (_req, res) => {
  res.send('Scaffold Express Server develop by myku');
});

export default {myku: 'hihi'};