/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const fs = require('fs');
const path = require('path');
const neighborhoods = require('./neighborhoods');
const propertyListings = require('./propertyListings');
const _ = require('./helpers');

function writeNeighborhoods(amt) {
  const neighborhoodsCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'neighborhoods.csv'));
  const header = _.getHeaderTitles(neighborhoods.createNeighborhood());
  const addPropFunc = (neighborhoodEntry, index) => {
    neighborhoodEntry.neighborhood_id = index + 1;
  };
  neighborhoodsCSV.write(header, 'utf8');
  _.writeIntoCSV(neighborhoodsCSV, 'neighborhoods', amt, () => {
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
  const header = _.getHeaderTitles(propertyListings.createListing());
  propertiesCSV.write(header);
  _.writeIntoCSV(propertiesCSV, 'propertyListings', amt, () => {
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
