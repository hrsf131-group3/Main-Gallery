const express = require('express');
// const morgan = require('morgan');
const subdomain = require('express-subdomain');
const apiRouter = require('./routers/api.js');
const controller = require('../controllers/listing.js');

const app = express();

// app.use(morgan('dev'));
app.use(express.json());

app.set('subdomain offset', 1);

app.get('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'default-src *');
  next();
});
app.use(subdomain('api', apiRouter));
app.use('/gallery/:id', express.static('client/dist'));

module.exports = app;
