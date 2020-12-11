\c mainphotos

SET search_path to mainphotos, public;

COPY neighborhoods(top_right_longitude, top_right_latitude, top_left_longitude, top_left_latitude,
bottom_right_longitude, bottom_right_latitude, bottom_left_longitude, bottom_left_latitude)
FROM '/home2/VSCode/SDC/csvs/neighborhoods.csv'
DELIMITER ',' CSV HEADER;

COPY crimes(type, crime_title, description, neighborhood_id)
FROM '/home2/VSCode/SDC/csvs/crimes.csv'
DELIMITER ',' CSV HEADER;

COPY businesses(type,name,address,neighborhood_id) FROM '/home2/VSCode/SDC/csvs/businesses.csv' DELIMITER ',' CSV HEADER;

COPY schools(name,address,neighborhood_id)
FROM '/home2/VSCode/SDC/csvs/schools.csv'
DELIMITER ',' CSV HEADER;

COPY property_listings(address,price,bedrooms,baths,sq_footage,neighborhood_id)
FROM '/home2/VSCode/SDC/csvs/property_listings.csv'
DELIMITER ',' CSV HEADER;

COPY price_history(event_date, event_description, price, listing_id)
FROM '/home2/VSCode/SDC/csvs/price_histories.csv'
DELIMITER ',' CSV HEADER;

COPY property_images(url, listing_id)
FROM '/home2/VSCode/SDC/csvs/images.csv'
DELIMITER ',' CSV HEADER;

COPY status(sale,pending,new,construction,listing_id)
FROM '/home2/VSCode/SDC/csvs/statuses.csv'
DELIMITER ',' CSV HEADER;
