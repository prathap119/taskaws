require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());

const listRouter = require('./routes/list');
app.use('/api', listRouter);


module.exports = app;


app.listen(port, () => {
  console.log(`Server is running on port http://0.0.0.0:${port}`);
});
