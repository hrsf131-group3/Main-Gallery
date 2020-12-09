/* eslint-disable no-loop-func */
const propertyListings = require('./propertyListings.js');
const neighborhoods = require('./neighborhoods.js');

function writeIntoCSV(writeStream, entryType, amt, cb, addPropFunc = () => { }) {
  const entryTypes = {
    neighborhoods: neighborhoods.createNeighborhood,
    crimes: neighborhoods.createCrimeListing,
    schools: neighborhoods.createSchool,
    businesses: neighborhoods.createBusiness,
    propertyListings: propertyListings.createListing,
    imageURLs: propertyListings.createImageURL,
    priceHistories: propertyListings.createPriceHistory,
    priceHistoriesCass: propertyListings.createPriceHistoryCass,
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
module.exports = {
  writeIntoCSV,
  getHeaderTitles,
};
