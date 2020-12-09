const path = require('path');
const db = require('../postgreSQLConnection.js');

const fileLocs = {
  neighborhoods: path.join('/home2/VSCode/SDC', 'csvs', 'neighborhoods.csv'),
  crimes: path.join('/home2/VSCode/SDC', 'csvs', 'crimes.csv'),
  businesses: path.join('/home2/VSCode/SDC', 'csvs', 'businesses.csv'),
  schools: path.join('/home2/VSCode/SDC', 'csvs', 'schools.csv'),
  property_listings: path.join('/home2/VSCode/SDC', 'csvs', 'property_listings.csv'),
  price_histories: path.join('/home2/VSCode/SDC', 'csvs', 'price_histories.csv'),
  property_images: path.join('/home2/VSCode/SDC', 'csvs', 'images.csv'),
  statuses: path.join('/home2/VSCode/SDC', 'csvs', 'statuses.csv'),
};

function insert(tableFields, csvPath) {
  db.client.query(
    `COPY ${tableFields} FROM '${csvPath}' DELIMITER ',' CSV HEADER;`,
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`${tableFields.split('(')[0]} inserted`);
      }
    },
  );
}

function insertAllTables() {
  // insert(`mainphotos.neighborhoods(top_right_longitude, top_right_latitude, top_left_longitude, top_left_latitude,
  //   bottom_right_longitude, bottom_right_latitude, bottom_left_longitude, bottom_left_latitude)`,
  // fileLocs.neighborhoods);
  // insert('mainphotos.crimes(type, crime_title, description, neighborhood_id)', fileLocs.crimes);
  // insert('mainphotos.businesses(type,name,address,neighborhood_id)', fileLocs.businesses);
  // insert('mainphotos.schools(name,address,neighborhood_id)', fileLocs.schools);
  // insert('mainphotos.property_listings(address,price,bedrooms,baths,sq_footage,neighborhood_id)', fileLocs.property_listings);
  insert('mainphotos.price_history(event_date, event_description, price, listing_id)', fileLocs.price_histories);
  insert('mainphotos.property_images(url, listing_id)', fileLocs.property_images);
  insert('mainphotos.status(sale,pending,new,construction,listing_id)', fileLocs.statuses);
}

insertAllTables();
