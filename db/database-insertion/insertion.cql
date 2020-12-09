USE mainphotos;

COPY mainphotos.neighborhoods(top_left_latitude,top_left_longitude,top_right_latitude,top_right_longitude,bottom_left_latitude,bottom_left_longitude,bottom_right_latitude,bottom_right_longitude, neighborhood_id) FROM '/home2/VSCode/SDC/csvs/cassandra-specific/neighborhoods.csv' WITH HEADER = TRUE AND delimiter = ',';

COPY mainphotos.property_listings(address,price,bedrooms,bath,sq_footage,neighborhood_id,listing_id) FROM '/home2/VSCode/SDC/csvs/cassandra-specific/property_listings.csv' WITH HEADER = TRUE AND delimiter = ',';

COPY mainphotos.businesses(type, name, address, neighborhood_id, business_id) FROM '/home2/VSCode/SDC/csvs/cassandra-specific/businesses.csv' WITH HEADER = TRUE AND delimiter = ',';

COPY mainphotos.crimes(type, crime_title, description, neighborhood_id, crime_id) FROM '/home2/VSCode/SDC/csvs/cassandra-specific/crimes.csv' WITH HEADER = TRUE AND delimiter = ',';

COPY mainphotos.property_images(image_url,listing_id,image_id) FROM '/home2/VSCode/SDC/csvs/cassandra-specific/images.csv' WITH HEADER = TRUE AND delimiter = ',';

COPY mainphotos.schools(name, address, neighborhood_id, school_id) FROM '/home2/VSCode/SDC/csvs/cassandra-specific/schools.csv' WITH HEADER = TRUE AND delimiter = ',';

COPY mainphotos.property_status(sale,pending,new,construction,listing_id) FROM '/home2/VSCode/SDC/csvs/cassandra-specific/statuses.csv' WITH HEADER = TRUE AND delimiter = ',';

COPY mainphotos.price_history(event_date,event_description,price,listing_id) FROM '/home2/VSCode/SDC/csvs/cassandra-specific/price_histories.csv' WITH HEADER = TRUE AND delimiter = ',';