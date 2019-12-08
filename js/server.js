const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const statsRouter = require('./routes/stats');
const mongoose = require('mongoose');

const port = process.env.PORT || 3030;
const clientPath = path.join(__dirname, './../');
const app = express();

app.use(bodyParser.json());
app.use('/api/stats', statsRouter);
app.use(express.static(clientPath));

app.listen(port, () => {
  console.log(`server has been started on port ${port}`);
});


mongoose.connect('mongodb://localhost/minesweeperStats',  {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      console.log('started');
    })
    .catch((e => console.log(e)));