/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
const fs = require('fs');
const path = require('path');
const neighborhoods = require('./neighborhoods');
const propertyListings = require('./propertyListings');
const _ = require('./helpers');

function writeIntoCSV(writeStream, entries, cb) {
  let count = entries.length - 1;
  let index = 0;
  const keys = Object.keys(entries[0]);
  function write() {
    let error = false;
    while (count >= 0 && !error) {
      const data = keys.reduce((acc, key, keysIndex) => {
        let newEntry = acc.concat(entries[index][key]);
        if (keysIndex === keys.length - 1) {
          newEntry = newEntry.concat('\n');
        } else {
          newEntry = newEntry.concat(',');
        }
        return newEntry;
      }, '');
      if (count === 0) {
        writeStream.write(data, cb);
      } else {
        error = !writeStream.write(data);
      }
      count -= 1;
      index += 1;
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
  const neighborhoodEntries = neighborhoods.createNeighborhood(amt);
  const neighborhoodsCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'neighborhoods.csv'));
  const header = getHeaderTitles(neighborhoodEntries[0]);
  neighborhoodsCSV.write(header, 'utf8');
  writeIntoCSV(neighborhoodsCSV, neighborhoodEntries, () => {
    neighborhoodsCSV.end();
    console.log('Finished writing neighborhoods');
  });
}

function writeCrimeListings(amt, neighborhoodEntriesNum) {
  const crimeEntries = neighborhoods.createCrimeListings(amt);
  const crimesCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'crimes.csv'));
  crimeEntries.forEach((crimeEntry) => {
    crimeEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  });
  const header = getHeaderTitles(crimeEntries[0]);
  crimesCSV.write(header);
  writeIntoCSV(crimesCSV, crimeEntries, () => {
    crimesCSV.end();
    console.log('Finished writing crimes');
  });
}

function writeSchoolListings(amt, neighborhoodEntriesNum) {
  const schoolEntries = neighborhoods.createSchools(amt);
  const schoolsCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'schools.csv'));
  schoolEntries.forEach((schoolEntry) => {
    schoolEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  });
  const header = getHeaderTitles(schoolEntries[0]);
  schoolsCSV.write(header);
  writeIntoCSV(schoolsCSV, schoolEntries, () => {
    schoolsCSV.end();
    console.log('Finished writing schools');
  });
}

function writeBusinessListings(amt, neighborhoodEntriesNum) {
  const businessEntries = neighborhoods.createBusinesses(amt);
  const businessesCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'businesses.csv'));
  businessEntries.forEach((businessEntry) => {
    businessEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  });
  const header = getHeaderTitles(businessEntries[0]);
  businessesCSV.write(header);
  writeIntoCSV(businessesCSV, businessEntries, () => {
    businessesCSV.end();
    console.log('Finished writing businesses');
  });
}

function writePropertyListings(amt, neighborhoodEntriesNum) {
  const propertyEntries = propertyListings.createListings(amt);
  const propertiesCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'property_listings.csv'));
  propertyEntries.forEach((propertyEntry) => {
    propertyEntry.neighborhood_id = _.getRandomInt(1, neighborhoodEntriesNum);
  });
  const header = getHeaderTitles(propertyEntries[0]);
  propertiesCSV.write(header);
  writeIntoCSV(propertiesCSV, propertyEntries, () => {
    propertiesCSV.end();
    console.log('Finished writing property listings');
  });
}

function writeImage(amt, propertyEntriesNum) {
  const imageEntries = propertyListings.createImageURLs(amt);
  const imagesCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'images.csv'));
  imageEntries.forEach((imageEntry) => {
    imageEntry.listing_id = _.getRandomInt(1, propertyEntriesNum);
  });
  const header = getHeaderTitles(imageEntries[0]);
  imagesCSV.write(header);
  writeIntoCSV(imagesCSV, imageEntries, () => {
    imagesCSV.end();
    console.log('Finished writing images');
  });
}

function writePriceHistory(amt) {
  const priceHistoryEntries = propertyListings.createPriceHistory(amt);
  const priceHistoryCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'price_histories.csv'));
  priceHistoryEntries.forEach((priceHistoryEntry, index) => {
    priceHistoryEntry.listing_id = index + 1;
  });
  const header = getHeaderTitles(priceHistoryEntries[0]);
  priceHistoryCSV.write(header);
  writeIntoCSV(priceHistoryCSV, priceHistoryEntries, () => {
    priceHistoryCSV.end();
    console.log('Finished writing price histories');
  });
}
function writeStatuses(amt) {
  const statusEntries = propertyListings.createStatuses(amt);
  const statusCSV = fs.createWriteStream(path.join(__dirname, 'csvs', 'statuses.csv'));
  statusEntries.forEach((statusEntry, index) => {
    statusEntry.listing_id = index + 1;
  });
  const header = getHeaderTitles(statusEntries[0]);
  statusCSV.write(header);
  writeIntoCSV(statusCSV, statusEntries, () => {
    statusCSV.end();
    console.log('Finished writing statuses');
  });
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
