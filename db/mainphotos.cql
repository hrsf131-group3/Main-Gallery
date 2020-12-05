CREATE KEYSPACE IF NOT EXISTS mainphotos WITH replication = {'class':'SimpleStrategy', 'replication_factor':'1'};



DROP TABLE IF EXISTS mainphotos.property_listings;
CREATE TABLE mainphotos.property_listings (
  listing_id int,
  neighborhood_id int,
  address ascii,
  price float,
  bedrooms float,
  bath float,
  sq_footage int,
  PRIMARY KEY(listing_id)
);

DROP TABLE IF EXISTS mainphotos.property_status;
CREATE TABLE mainphotos.property_status (
  listing_id int,
  sale boolean,
  pending boolean,
  new boolean,
  construction boolean,
  PRIMARY KEY(listing_id)
);

DROP TABLE IF EXISTS mainphotos.price_history;
CREATE TABLE mainphotos.price_history (
  listing_id int,
  event_date date,
  event_description ascii,
  price float,
  PRIMARY KEY(listing_id)
);

DROP TABLE IF EXISTS mainphotos.property_images;
CREATE TABLE mainphotos.property_images (
  image_id int,
  listing_id int,
  image_url ascii,
  PRIMARY KEY(image_id)
);

DROP TABLE IF EXISTS mainphotos.neighborhoods;
CREATE TABLE mainphotos.neighborhoods (
  neighborhood_id int,
  name ascii,
  PRIMARY KEY(neighborhood_id)
);

DROP TABLE IF EXISTS mainphotos.businesses;
CREATE TABLE mainphotos.businesses (
  business_id int,
  neighborhood_id int,
  name ascii,
  type ascii,
  address ascii,
  PRIMARY KEY(business_id)
);

DROP TABLE IF EXISTS mainphotos.crimes;
CREATE TABLE mainphotos.crimes (
  crime_id int,
  neighborhood_id int,
  "type" ascii,
  crime_title ascii,
  description ascii,
  PRIMARY KEY(crime_id)
);

DROP TABLE IF EXISTS mainphotos.schools;
CREATE TABLE mainphotos.schools (
  school_id int,
  neighborhood_id int,
  name ascii,
  address ascii,
  PRIMARY KEY(school_id)
);


