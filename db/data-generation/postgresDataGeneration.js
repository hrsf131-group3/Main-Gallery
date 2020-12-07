/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
const fs = require('fs');
const path = require('path');
const neighborhoods = require('./neighborhoods');
const propertyListings = require('./propertyListings');
const _ = require('./helpers');

function writeIntoCSV(writeStream, entryType, amt, cb, addPropFunc = () => {}) {
  const entryTypes = {
    neighborhoods: neighborhoods.createNeighborhood,
    crimes: neighborhoods.createCrimeListing,
    schools: neighborhoods.createSchool,
    businesses: neighborhoods.createBusiness,
    propertyListings: propertyListings.createListing,
    imageURLs: propertyListings.createImageURL,
    priceHistories: propertyListings.createPriceHistory,
    statuses: propertyListings.createStatus,
  };
  let count = amt;
  let index = 0;
  let entry;
  let keys;
  let data;
  function write() {
    let error = false;
    while (count > 0 && !error) {
      entry = entryTypes[entryType]();
      addPropFunc(entry, index);
      keys = Object.keys(entry);
      data = keys.reduce((acc, key, keysIndex) => {
        let newEntry = acc.concat(entry[key]);
        if (keysIndex === keys.length - 1) {
          newEntry = newEntry.concat('\n');
        } else {
          newEntry = newEntry.concat(',');
        }
        return newEntry;
      }, '');
      if (count === 1) {
        writeStream.write(data, cb);
      } else {
        error = !writeStream.write(data);
      }
      count -= 1;
      index += 1;
      if (count % 500000 === 0) {
        console.log(`${entryType}: ${count}`);
      }
    }
    if (error) {
      writeStream.once('drain', write);
    }
  }
  write();
}
function getHeaderTitles(entry) {
  const keys = Object.keys(entry);
  const header = keys.reduce((acc, key, keysIndex) => {
    let newEntry = acc.concat(keys[keysIndex]);
    if (keysIndex === keys.length - 1) {
      newEntry = newEntry.concat('\n');
    } else {
      newEntry = newEntry.concat(',');
    }
    return newEntry;
  }, '');
  return header;
}
function writeNeighborhoods(amt) {
  const neighborhoodsCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'neighborhoods.csv'));
  const header = getHeaderTitles(neighborhoods.createNeighborhood());
  neighborhoodsCSV.write(header, 'utf8');
  writeIntoCSV(neighborhoodsCSV, 'neighborhoods', amt, () => {
    neighborhoodsCSV.end();
    console.log('Finished writing neighborhoods');
  });
}

function writeCrimeListings(amt, neighborhoodEntriesNum) {
  const crimesCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'crimes.csv'));
  const addPropFunc = (crimeEntry) => {
    crimeEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  };
  const header = getHeaderTitles(neighborhoods.createCrimeListing());
  crimesCSV.write(header);
  writeIntoCSV(crimesCSV, 'crimes', amt, () => {
    crimesCSV.end();
    console.log('Finished writing crimes');
  }, addPropFunc);
}

function writeSchoolListings(amt, neighborhoodEntriesNum) {
  const schoolsCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'schools.csv'));
  const addPropFunc = (schoolEntry) => {
    schoolEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  };
  const header = getHeaderTitles(neighborhoods.createSchool());
  schoolsCSV.write(header);
  writeIntoCSV(schoolsCSV, 'schools', amt, () => {
    schoolsCSV.end();
    console.log('Finished writing schools');
  }, addPropFunc);
}

function writeBusinessListings(amt, neighborhoodEntriesNum) {
  const businessesCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'businesses.csv'));
  const addPropFunc = (businessEntry) => {
    businessEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  };
  const header = getHeaderTitles(neighborhoods.createBusiness(amt));
  businessesCSV.write(header);
  writeIntoCSV(businessesCSV, 'businesses', amt, () => {
    businessesCSV.end();
    console.log('Finished writing businesses');
  }, addPropFunc);
}

function writePropertyListings(amt, neighborhoodEntriesNum) {
  const propertiesCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'property_listings.csv'));
  const addPropFunc = (propertyEntry) => {
    propertyEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  };
  const header = getHeaderTitles(propertyListings.createListing());
  propertiesCSV.write(header);
  writeIntoCSV(propertiesCSV, 'propertyListings', amt, () => {
    propertiesCSV.end();
    console.log('Finished writing property listings');
  }, addPropFunc);
}

function writeImage(amt, propertyEntriesNum) {
  const imagesCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'images.csv'));
  const addPropFunc = (imageEntry) => {
    imageEntry.listing_id = _.getRandomInt(1, propertyEntriesNum);
  };
  const header = getHeaderTitles(propertyListings.createImageURL());
  imagesCSV.write(header);
  writeIntoCSV(imagesCSV, 'imageURLs', amt, () => {
    imagesCSV.end();
    console.log('Finished writing images');
  }, addPropFunc);
}

function writePriceHistory(amt) {
  const priceHistoryCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'price_histories.csv'));
  const addPropFunc = (priceHistoryEntry, index) => {
    priceHistoryEntry.listing_id = index + 1;
  };
  const header = getHeaderTitles(propertyListings.createPriceHistory());
  priceHistoryCSV.write(header);
  writeIntoCSV(priceHistoryCSV, 'priceHistories', amt, () => {
    priceHistoryCSV.end();
    console.log('Finished writing price histories');
  }, addPropFunc);
}
function writeStatuses(amt) {
  const statusCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'statuses.csv'));
  const addPropFunc = (statusEntry, index) => {
    statusEntry.listing_id = index + 1;
  };
  const header = getHeaderTitles(propertyListings.createStatus());
  statusCSV.write(header);
  writeIntoCSV(statusCSV, 'statuses', amt, () => {
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
  writePriceHistory(amt);
  writeStatuses(amt);
}

writePostgresCSV(process.argv[2]);
