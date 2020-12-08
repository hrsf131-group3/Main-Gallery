/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const neighborhoods = require('./neighborhoods.js');
const propertyListings = require('./propertyListings.js');
const _ = require('./helpers.js');
const csv = require('./csvHelpers.js');

function writeNeighborhoods(amt) {
  const neighborhoodsCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'neighborhoods.csv'));
  const addPropFunc = (neighborhoodEntry, index) => {
    neighborhoodEntry.neighborhood_id = index + 1;
  };
  const tempEntry = neighborhoods.createNeighborhood();
  tempEntry.neighborhood_id = 0;
  const header = csv.getHeaderTitles(tempEntry);
  neighborhoodsCSV.write(header, 'utf8');
  csv.writeIntoCSV(neighborhoodsCSV, 'neighborhoods', amt, () => {
    neighborhoodsCSV.end();
    console.log('Finished writing neighborhoods (Cassandra)');
  }, addPropFunc);
}
function writeCrimeListings(amt, neighborhoodEntriesNum) {
  const crimesCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'crimes.csv'));
  const addPropFunc = (crimeEntry) => {
    crimeEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
    crimeEntry.crime_id = uuid.v4();
  };
  const tempEntry = neighborhoods.createCrimeListing();
  addPropFunc(tempEntry);
  const header = csv.getHeaderTitles(tempEntry);
  crimesCSV.write(header);
  csv.writeIntoCSV(crimesCSV, 'crimes', amt, () => {
    crimesCSV.end();
    console.log('Finished writing crimes');
  }, addPropFunc);
}
function writeSchoolListings(amt, neighborhoodEntriesNum) {
  const schoolsCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'schools.csv'));
  const addPropFunc = (schoolEntry) => {
    schoolEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
    schoolEntry.school_id = uuid.v4();
  };
  const tempEntry = neighborhoods.createSchool();
  addPropFunc(tempEntry);
  const header = csv.getHeaderTitles(tempEntry);
  schoolsCSV.write(header);
  csv.writeIntoCSV(schoolsCSV, 'schools', amt, () => {
    schoolsCSV.end();
    console.log('Finished writing schools');
  }, addPropFunc);
}
function writeBusinessListings(amt, neighborhoodEntriesNum) {
  const businessesCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'businesses.csv'));
  const addPropFunc = (businessEntry) => {
    businessEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
    businessEntry.business_id = uuid.v4();
  };
  const tempEntry = neighborhoods.createBusiness();
  addPropFunc(tempEntry);
  const header = csv.getHeaderTitles(tempEntry);
  businessesCSV.write(header);
  csv.writeIntoCSV(businessesCSV, 'businesses', amt, () => {
    businessesCSV.end();
    console.log('Finished writing businesses');
  }, addPropFunc);
}
function writePropertyListings(amt, neighborhoodEntriesNum) {
  const propertiesCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'property_listings.csv'));
  const addPropFunc = (propertyEntry, index) => {
    propertyEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
    propertyEntry.listing_id = index + 1;
  };
  const tempEntry = propertyListings.createListing();
  tempEntry.neighborhood_id = 0;
  tempEntry.listing_id = 0;
  const header = csv.getHeaderTitles(tempEntry);
  propertiesCSV.write(header);
  csv.writeIntoCSV(propertiesCSV, 'propertyListings', amt, () => {
    propertiesCSV.end();
    console.log('Finished writing property listings (Cassandra)');
  }, addPropFunc);
}
function writeImage(amt, propertyEntriesNum) {
  const imagesCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'images.csv'));
  const addPropFunc = (imageEntry) => {
    imageEntry.listing_id = _.getRandomInt(1, propertyEntriesNum);
    imageEntry.image_id = uuid.v4();
  };
  const newEntry = propertyListings.createImageURL();
  addPropFunc(newEntry);
  const header = csv.getHeaderTitles(newEntry);
  imagesCSV.write(header);
  csv.writeIntoCSV(imagesCSV, 'imageURLs', amt, () => {
    imagesCSV.end();
    console.log('Finished writing images');
  }, addPropFunc);
}
function writePriceHistory(amt) {
  const priceHistoryCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'price_histories.csv'));
  const addPropFunc = (priceHistoryEntry, index) => {
    priceHistoryEntry.listing_id = index + 1;
  };
  const tempEntry = propertyListings.createPriceHistory();
  addPropFunc(tempEntry);
  const header = csv.getHeaderTitles(tempEntry);
  priceHistoryCSV.write(header);
  csv.writeIntoCSV(priceHistoryCSV, 'priceHistories', amt, () => {
    priceHistoryCSV.end();
    console.log('Finished writing price histories');
  }, addPropFunc);
}
function writeStatuses(amt) {
  const statusCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'statuses.csv'));
  const addPropFunc = (statusEntry, index) => {
    statusEntry.listing_id = index + 1;
  };
  const tempEntry = propertyListings.createStatus();
  addPropFunc(tempEntry);
  const header = csv.getHeaderTitles(tempEntry);
  statusCSV.write(header);
  csv.writeIntoCSV(statusCSV, 'statuses', amt, () => {
    statusCSV.end();
    console.log('Finished writing statuses');
  }, addPropFunc);
}
function writeCassandraSpecificCSV(amt) {
  const neighborhoodAmt = amt / 5;
  writeNeighborhoods(neighborhoodAmt);
  writeCrimeListings(neighborhoodAmt * 4, neighborhoodAmt);
  writeSchoolListings(neighborhoodAmt * 2, neighborhoodAmt);
  writeBusinessListings(neighborhoodAmt * 8, neighborhoodAmt);
  writePropertyListings(amt, neighborhoodAmt);
  writeImage(amt * 8, amt);
  writePriceHistory(amt);
  writeStatuses(amt);
}

writeCassandraSpecificCSV(process.argv[2]);
