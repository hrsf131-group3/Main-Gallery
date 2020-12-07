/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');
const _ = require('./helpers.js');

function createNeighborhood() {
  return {
    topLLat: faker.address.latitude(),
    topLLong: faker.address.longitude(),
    topRLat: faker.address.latitude(),
    topRLong: faker.address.longitude(),
    botLLat: faker.address.latitude(),
    botLLong: faker.address.longitude(),
    botRLat: faker.address.latitude(),
    botRLong: faker.address.longitude(),
  };
}
function createCrimeListing() {
  return {
    type: faker.lorem.words(_.getRandomInt(1, 3)),
    crimeTitle: faker.lorem.words(_.getRandomInt(2, 4)),
    description: faker.lorem.sentences(_.getRandomInt(1, 5)),
  };
}

function createSchool() {
  const fake = faker.address;
  return {
    name: faker.lorem.words(_.getRandomInt(1, 3)),
    address: `${fake.streetAddress()} ${fake.state()} USA ${fake.zipCode()}`,
  };
}

function createBusiness() {
  const fake = faker.address;
  const types = ['Restaurants', 'Groceries', 'Nightlife', 'Cafes', 'Shopping', 'Fitness'];
  return {
    type: types[_.getRandomInt(0, types.length - 1)],
    name: faker.lorem.words((_.getRandomInt(1, 3))),
    address: `${fake.streetAddress()} ${fake.state()} USA ${fake.zipCode()}`,
  };
}
module.exports = {
  createNeighborhood,
  createCrimeListing,
  createSchool,
  createBusiness,
};
