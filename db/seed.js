let mongoose = require('mongoose');
let Schema = require('./schema.js');
let faker = require('faker');


//mongoose.connect('mongodb://localhost/main-gallery');

// TODO:
// 1) Take out hardcoded data and create helper functions to generate inputs.
// 2) Drop database before wrtiting to again.


function createRecord(listingID, address, images) {
  const listing = {
    listing_id: listingID,
    topHeader: {
      sale: 1,
      pending: 0,
      new: 0,
      construction: 0,
    },
    address: address,
    price: 100999,
    bed: getRandomInt(2, 8),
    bath: getRandomInt(2, 4),
    images: images,
  }
  return listing;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function listingGalleryGenerator(currentFolder) {
  let images = [];
  if(currentFolder === 1) {
    let counter = 1;
    while(counter <= 153) {
      let url = `https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/Inside1/inside-1-${counter}.jpg`
      images.push(url)
      counter++;
    }
  } else {
    if(currentFolder === 2) {
      let counter = 1;
      while(counter <= 204) {
      let url = `https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/Inside2/inside-2-${counter}.jpg`
      images.push(url)
      counter++;
      }
    } else {
    if(currentFolder === 3) {
      let counter = 1;
      while(counter <= 204) {
        let url = `https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/Inside3/inside-3-${counter}.jpg`
        images.push(url)
        counter++;
        }
      }
    }
  }
  return images;
};

function seedDB(entries) {
  let created = 1;
  let folder = 1;
  while (created <= 100) {
    // Image folder assignment and url generator
    let images = listingGalleryGenerator(folder);
    if(folder === 3) {
      folder = 0;
    }
    // Faker address
    var address = faker.address.streetAddress();
    // Call to write to database
    Schema.write(createRecord(created, address, images), (err, data) => {
      if (err) {
       console.log('insert failed', err)
     } else {
       console.log('insert success');
     }
    })
    folder++;
    created ++;
  }
}

seedDB();