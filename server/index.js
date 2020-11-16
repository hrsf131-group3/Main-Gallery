const express = require('express');
const mongoCont = require('../controllers/listing.js');
// const path = require('path')

const app = express();
const PORT = 8040;

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

app.get('/db', mongoCont.get);
app.get('/dbs', mongoCont.getAll);
