/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
const fs = require('fs');
const path = require('path');
const neighborhoods = require('./neighborhoods');
const propertyListings = require('./propertyListings');
const _ = require('./helpers');
const csv = require('./csvHelpers.js');

function writeNeighborhoods(amt) {
  const neighborhoodsCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'neighborhoods.csv'));
  const header = csv.getHeaderTitles(neighborhoods.createNeighborhood());
  neighborhoodsCSV.write(header, 'utf8');
  csv.writeIntoCSV(neighborhoodsCSV, 'neighborhoods', amt, () => {
    neighborhoodsCSV.end();
    console.log('Finished writing neighborhoods');
  });
}

function writeCrimeListings(amt, neighborhoodEntriesNum) {
  const crimesCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'crimes.csv'));
  const addPropFunc = (crimeEntry) => {
    crimeEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  };
  const newEntry = neighborhoods.createCrimeListing();
  addPropFunc(newEntry);
  const header = csv.getHeaderTitles(newEntry);
  crimesCSV.write(header);
  csv.writeIntoCSV(crimesCSV, 'crimes', amt, () => {
    crimesCSV.end();
    console.log('Finished writing crimes');
  }, addPropFunc);
}

function writeSchoolListings(amt, neighborhoodEntriesNum) {
  const schoolsCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'schools.csv'));
  const addPropFunc = (schoolEntry) => {
    schoolEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  };
  const newEntry = neighborhoods.createSchool();
  addPropFunc(newEntry);
  const header = csv.getHeaderTitles(newEntry);
  schoolsCSV.write(header);
  csv.writeIntoCSV(schoolsCSV, 'schools', amt, () => {
    schoolsCSV.end();
    console.log('Finished writing schools');
  }, addPropFunc);
}

function writeBusinessListings(amt, neighborhoodEntriesNum) {
  const businessesCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'businesses.csv'));
  const addPropFunc = (businessEntry) => {
    businessEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  };
  const newEntry = neighborhoods.createBusiness();
  addPropFunc(newEntry);
  const header = csv.getHeaderTitles(newEntry);
  businessesCSV.write(header);
  csv.writeIntoCSV(businessesCSV, 'businesses', amt, () => {
    businessesCSV.end();
    console.log('Finished writing businesses');
  }, addPropFunc);
}

function writePropertyListings(amt, neighborhoodEntriesNum) {
  const propertiesCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'property_listings.csv'));
  const addPropFunc = (propertyEntry) => {
    propertyEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  };
  const newEntry = propertyListings.createListing();
  addPropFunc(newEntry);
  const header = csv.getHeaderTitles(newEntry);
  propertiesCSV.write(header);
  csv.writeIntoCSV(propertiesCSV, 'propertyListings', amt, () => {
    propertiesCSV.end();
    console.log('Finished writing property listings');
  }, addPropFunc);
}

function writeImage(amt, propertyEntriesNum) {
  const imagesCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'images.csv'));
  const addPropFunc = (imageEntry) => {
    imageEntry.listing_id = _.getRandomInt(1, propertyEntriesNum);
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

function writePriceHistory(amt, propertyEntriesNum) {
  const priceHistoryCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'price_histories.csv'));
  const addPropFunc = (priceHistoryEntry) => {
    priceHistoryEntry.listing_id = _.getRandomInt(1, propertyEntriesNum);
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
  const statusCSV = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'statuses.csv'));
  const addPropFunc = (statusEntry, index) => {
    statusEntry.listing_id = index + 1;
  };
  const newEntry = propertyListings.createStatus();
  addPropFunc(newEntry);
  const header = csv.getHeaderTitles(newEntry);
  statusCSV.write(header);
  csv.writeIntoCSV(statusCSV, 'statuses', amt, () => {
    statusCSV.end();
    console.log('Finished writing statuses');
  }, addPropFunc);
}

function writePostgresCSV(amt) {
  const neighborhoodAmt = amt / 5;
  writeNeighborhoods(neighborhoodAmt);
  writeCrimeListings(neighborhoodAmt * 4, neighborhoodAmt);
  writeSchoolListings(neighborhoodAmt * 2, neighborhoodAmt);
  writeBusinessListings(neighborhoodAmt * 8, neighborhoodAmt);
  writePropertyListings(amt, neighborhoodAmt);
  writeImage(amt * 8, amt);
  writePriceHistory(amt * 3, amt);
  writeStatuses(amt);
}

writePostgresCSV(process.argv[2]);
