const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/main-gallery-listings');

const listingSchema = mongoose.Schema ({
  listing_id: Number,
  topHeader: String,
  address: String,
  price: Number,
  bed: Number,
  bath: Number,
  images: [ { type: String } ],

})

let ListingsModel = mongoose.model('Listing', listingSchema);


function write(listing, callback) {
  ListingsModel.create(listing, callback)
}

function getAllListings(callback) {
  ListingsModel.find({}, callback);
}

module.exports.ListingsModel = ListingsModel;
module.exports.write = write;
exports.getAllListings = getAllListings;