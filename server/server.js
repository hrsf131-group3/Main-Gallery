const express = require('express');
const morgan = require('morgan');
const subdomain = require('express-subdomain');
const apiRouter = require('./routers/api.js');
const controller = require('./../controllers/listing.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/gallery/:id', express.static('client/dist'));
app.use(subdomain('api', apiRouter));

module.exports = app;