/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');
const _ = require('./helpers.js');

function createListing() {
  const fake = faker.address;
  return {
    address: `${fake.streetAddress()} ${fake.state()} USA ${fake.zipCode()}`,
    price: _.getRandomInt(500000, 5000000),
    bedrooms: _.getRandomInt(1, 20) * 0.5,
    baths: _.getRandomInt(1, 20) * 0.5,
    sqFootage: _.getRandomInt(500, 5000),
  };
}

function createImageURL() {
  const randomInt = _.getRandomInt(0, 1000);
  return {
    url: `https://hrsf131-sdc.s3-us-west-1.amazonaws.com/${randomInt}.jpg`,
  };
}

function createPriceHistory() {
  return {
    eventDate: faker.date.past().toLocaleString('default', { dateStyle: 'short', timeStyle: 'short' }).replace(',', ''),
    eventDescription: faker.lorem.words(_.getRandomInt(1, 4)),
    price: _.getRandomInt(100000, 4000000),
  };
}

function createPriceHistoryCass() {
  return {
    eventDate: faker.date.past().toISOString(),
    eventDescription: faker.lorem.words(_.getRandomInt(1, 4)),
    price: _.getRandomInt(100000, 4000000),
  };
}

function createStatus() {
  const boolBank = [true, false];
  return {
    sale: boolBank[_.getRandomInt(0, 1)],
    pending: boolBank[_.getRandomInt(0, 1)],
    new: boolBank[_.getRandomInt(0, 1)],
    construction: boolBank[_.getRandomInt(0, 1)],
  };
}
module.exports = {
  createListing,
  createImageURL,
  createPriceHistory,
  createPriceHistoryCass,
  createStatus,
};
