var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// start the app
var app = express();
// connect mongo
mongoose.connect('mongodb://localhost/main-gallery');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(8000, function() {
  console.log('listening on port 8000');
});
