var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('../db/schema.js');
var listingController = require('../controllers/listing.js');

// start the app
var app = express();
// connect mongo
mongoose.connect('mongodb://localhost/main-gallery-listings');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/listings', listingController.getListings);

app.listen(8000, function() {
  console.log('listening on port 8000');
});
