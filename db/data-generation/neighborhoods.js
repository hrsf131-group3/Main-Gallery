const faker = require('faker');
const _ = require('./helpers.js');

function createNeighborhood(amt) {
  const neighborhoods = [];
  for (let count = 0; count < amt; count += 1) {
    neighborhoods.push({
      topLeft: [faker.address.latitude(), faker.address.longitude()],
      topRight: [faker.address.latitude(), faker.address.longitude()],
      bottomLeft: [faker.address.latitude(), faker.address.longitude()],
      bottomRight: [faker.address.latitude(), faker.address.longitude()],
    });
  }
  return neighborhoods;
}
function createCrimeListing(amt) {
  const crimes = [];
  for (let count = 0; count < amt; count += 1) {
    crimes.push({
      type: faker.lorem.words(_.getRandomInt(1, 3)),
      crimeTitle: faker.lorem.words(_.getRandomInt(2, 4)),
      description: faker.lorem.sentences(_.getRandomInt(1, 5)),
    });
  }
  return crimes;
}

function createSchools(amt) {
  const schools = [];
  const fake = faker.address;
  for (let count = 0; count < amt; count += 1) {
    const school = {};
    school.name = faker.lorem.words(_.getRandomInt(1, 3));
    school.address = `${fake.streetAddress()}, ${fake.state()}, USA ${fake.zipCode()}`;
    schools.push(school);
  }
  return schools;
}

function createBusinesses(amt) {
  const businesses = [];
  const fake = faker.address;
  const types = ['Restaurants', 'Groceries', 'Nightlife', 'Cafes', 'Shopping', 'Fitness'];
  for (let count = 0; count < amt; count += 1) {
    businesses.push({
      type: types(_.getRandomInt(0, types.length - 1)),
      name: faker.company.companyName(),
      address: `${fake.streetAddress()}, ${fake.state()}, USA ${fake.zipCode()}`,
    });
  }
  return businesses;
}
console.log(createSchools(5));
module.exports = {
  createNeighborhood,
  createCrimeListing,
  createSchools,
  createBusinesses,
};
