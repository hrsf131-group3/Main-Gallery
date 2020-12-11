DROP DATABASE IF EXISTS mainphotos;
CREATE DATABASE mainphotos;

\c mainphotos

CREATE SCHEMA IF NOT EXISTS mainphotos;
SET search_path TO mainphotos, public;

CREATE TABLE mainphotos.neighborhoods (
  neighborhood_id INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
  top_right_longitude decimal,
	top_right_latitude decimal,
	top_left_longitude decimal,
	top_left_latitude  decimal,
  bottom_right_longitude decimal,
  bottom_right_latitude decimal,
	bottom_left_longitude decimal,
	bottom_left_latitude decimal
);

CREATE TABLE mainphotos.property_listings (
  listing_id INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
  neighborhood_id INT NOT NULL REFERENCES mainphotos.neighborhoods( neighborhood_id ) ON DELETE RESTRICT,
  address VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  bedrooms DECIMAL(3,1) NOT NULL,
  baths DECIMAL(3,1) NOT NULL,
  sq_footage INT NOT NULL
);

CREATE TABLE mainphotos.property_images (
  image_id INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
  listing_id INT NOT NULL REFERENCES mainphotos.property_listings(listing_id) ON DELETE CASCADE,
  url VARCHAR(50) NOT NULL
);

CREATE TABLE mainphotos.property_images (
  image_id INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
  listing_id INT NOT NULL,
  url VARCHAR(50) NOT NULL
);
CREATE TABLE mainphotos.price_history (
  entry_id INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
  listing_id INT NOT NULL REFERENCES mainphotos.property_listings(listing_id) ON DELETE CASCADE,
  event_date VARCHAR(100) NOT NULL,
  event_description VARCHAR(100) NOT NULL,
  price INT NOT NULL
);

CREATE TABLE mainphotos.status (
  listing_id INT NOT NULL PRIMARY KEY REFERENCES mainphotos.property_listings(listing_id) ON DELETE CASCADE,
  sale BOOLEAN DEFAULT false NOT NULL,
  pending BOOLEAN DEFAULT false NOT NULL,
  new BOOLEAN DEFAULT false NOT NULL,
  construction BOOLEAN DEFAULT false NOT NULL
);

CREATE TABLE mainphotos.crimes (
  crime_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
  neighborhood_id INT NOT NULL REFERENCES mainphotos.neighborhoods( neighborhood_id ) ON DELETE CASCADE,
  type VARCHAR(100) NOT NULL,
  crime_title VARCHAR(100) NOT NULL,
  description VARCHAR(1000) NOT NULL
);

CREATE TABLE mainphotos.schools (
  school_id INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
  neighborhood_id INT NOT NULL REFERENCES mainphotos.neighborhoods( neighborhood_id ) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  address VARCHAR(100) NOT NULL
);
CREATE TABLE mainphotos.businesses (
  business_id INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
  neighborhood_id INT NOT NULL REFERENCES mainphotos.neighborhoods( neighborhood_id ) ON DELETE CASCADE,
  type VARCHAR(100) NOT NULL,
  name VARCHAR(70) NOT NULL,
  address VARCHAR(100) NOT NULL
);