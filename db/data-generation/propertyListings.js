const faker = require('faker');
const _ = require('./helpers.js');

function createListings(amt) {
  const listings = [];
  const fake = faker.address;
  for (let count = 0; count < amt; count += 1) {
    listings.push({
      address: `${fake.streetAddress()}, ${fake.state()}, USA ${fake.zipCode()}`,
      price: _.getRandomInt(500000, 5000000),
      bedrooms: _.getRandomInt(1, 20) * 0.5,
      baths: _.getRandomInt(1, 20) * 0.5,
      sqFootage: _.getRandomInt(500, 5000),
    });
  }
  return listings;
}

function createImageURLs(amt) {
  const images = [];
  for (let count = 0; count < amt; count += 1) {
    const randomInt = _.getRandomInt(0, 1000);
    images.push({
      url: `https://hrsf131-sdc.s3-us-west-1.amazonaws.com/${randomInt}.jpg`,
    });
  }
  return images;
}

function createPriceHistory(amt) {
  const priceHistories = [];
  for (let count = 0; count < amt; count += 1) {
    priceHistories.push({
      eventDate: faker.date.past(),
      eventDescription: faker.lorem.words(_.getRandomInt(1, 4)),
      price: _.getRandomInt(100000, 4000000),
    });
  }
  return priceHistories;
}
module.exports = {
  createListings,
  createImageURLs,
  createPriceHistory,
};
