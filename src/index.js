const express = require('express');
const { resolve } = require('path');
const { info } = require('log-symbols');

const { routes: dataRouter } = require('./routes/data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/data', dataRouter);
app.use(express.static(resolve(__dirname, '../static')));

app.listen(PORT, () => {
  console.log(`%s Server listening on port %d`, info, PORT);
});
