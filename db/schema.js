var mongoose = require('mongoose');
var mongo = require('./mongo.js');

mongoose.connect('mongodb://localhost/main-gallery-listings');

var listingSchema = mongoose.Schema ({
  listing_id: Number,
  topHeader: {
    sale: Boolean,
    pending: Boolean,
    new: Boolean,
    construction: Boolean,
  },
  address: String,
  price: Number,
  bed: Number,
  bath: Number,
  images: Array,

})

let ListingsModel = mongoose.model('Listing', listingSchema);


function write(listing, callback) {
  ListingsModel.create(listing, callback)
}

function getAllListings(callback) {
  ListingsModel.find({}, callback);
}

module.exports.ListingsModel = ListingsModel;
// module.exports.write = write;
exports.getAllListings = getAllListings;