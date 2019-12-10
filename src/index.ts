import express from 'express';
import { info } from 'log-symbols';
import { resolve } from 'path';
import { routes as dataRouter } from './routes/data';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/data', dataRouter);
app.use(express.static(resolve(__dirname, '../static')));

app.listen(PORT, () => {
  console.log(`%s Server listening on port %d`, info, PORT);
});
