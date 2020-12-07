CREATE KEYSPACE IF NOT EXISTS mainphotos WITH replication = {'class':'SimpleStrategy', 'replication_factor':'1'};

DROP TABLE IF EXISTS mainphotos.property_listings;
CREATE TABLE mainphotos.property_listings (
  listing_id int,
  neighborhood_id int,
  address varchar,
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
  event_description varchar,
  price float,
  PRIMARY KEY(listing_id)
);

DROP TABLE IF EXISTS mainphotos.property_images;
CREATE TABLE mainphotos.property_images (
  image_id uuid,
  listing_id int,
  image_url varchar,
  PRIMARY KEY(listing_id, image_id)
);

DROP TABLE IF EXISTS mainphotos.neighborhoods;
CREATE TABLE mainphotos.neighborhoods (
  neighborhood_id int,
  top_right_longitude decimal,
	top_right_latitude decimal,
	top_left_longitude decimal,
	top_left_latitude  decimal,
  bottom_right_longitude decimal,
  bottom_right_latitude decimal,
	bottom_left_longitude decimal,
	bottom_left_latitude decimal,
  PRIMARY KEY(neighborhood_id)
);

DROP TABLE IF EXISTS mainphotos.businesses;
CREATE TABLE mainphotos.businesses (
  business_id uuid,
  neighborhood_id int,
  name varchar,
  type varchar,
  address varchar,
  PRIMARY KEY(neighborhood_id, business_id)
);

DROP TABLE IF EXISTS mainphotos.crimes;
CREATE TABLE mainphotos.crimes (
  crime_id uuid,
  neighborhood_id int,
  "type" varchar,
  crime_title varchar,
  description text,
  PRIMARY KEY(neighborhood_id, crime_id)
);

DROP TABLE IF EXISTS mainphotos.schools;
CREATE TABLE mainphotos.schools (
  school_id uuid,
  neighborhood_id int,
  name varchar,
  address varchar,
  PRIMARY KEY(neighborhood_id, school_id)
);


