/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const fs = require('fs');
const path = require('path');
const neighborhoods = require('./neighborhoods.js');
const propertyListings = require('./propertyListings.js');
const _ = require('./helpers.js');
const csv = require('./csvHelpers.js');

function writeNeighborhoods(amt) {
  const neighborhoodsCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'neighborhoods.csv'));
  const header = csv.getHeaderTitles(neighborhoods.createNeighborhood());
  const addPropFunc = (neighborhoodEntry, index) => {
    neighborhoodEntry.neighborhood_id = index + 1;
  };
  neighborhoodsCSV.write(header, 'utf8');
  csv.writeIntoCSV(neighborhoodsCSV, 'neighborhoods', amt, () => {
    neighborhoodsCSV.end();
    console.log('Finished writing neighborhoods (Cassandra)');
  }, addPropFunc);
}

function writePropertyListings(amt, neighborhoodEntriesNum) {
  const propertiesCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'property_listings.csv'));
  const addPropFunc = (propertyEntry, index) => {
    propertyEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
    propertyEntry.listing_id = index + 1;
  };
  const header = csv.getHeaderTitles(propertyListings.createListing());
  propertiesCSV.write(header);
  csv.writeIntoCSV(propertiesCSV, 'propertyListings', amt, () => {
    propertiesCSV.end();
    console.log('Finished writing property listings (Cassandra)');
  }, addPropFunc);
}

function writeCassandraSpecificCSV(amt) {
  const neighborhoodAmt = amt / 5;
  writeNeighborhoods(neighborhoodAmt);
  writePropertyListings(amt, neighborhoodAmt);
}

writeCassandraSpecificCSV(process.argv[2]);
