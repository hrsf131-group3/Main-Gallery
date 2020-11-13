let mongoose = require('mongoose');
let Schema = require('./schema.js');

//mongoose.connect('mongodb://localhost/main-gallery');

// TODO:
// 1) Take out hardcoded data and create helper functions to generate inputs.
// 2) Drop database before wrtiting to again.


function createRecord(listingID, topHeader, address, price, bed, bath, images) {
  const listing = {
    listing_id: listingID,
    topHeader: 'For Sale',
    address: '123 MyHome Way',
    price: 100999,
    bed: 3,
    bath: 2,
    images: 'https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/Outside1/outside-1.jpg'
  }
  return listing;
}

function seedDB(entries) {
 let created = 1;
 while (created <= 5) {
   Schema.write(createRecord(created), (err, data) => {
     if (err) {
       console.log('insert failed', err)
     } else {
       console.log('insert success');
     }
   })
   created ++;
 }
}

seedDB();