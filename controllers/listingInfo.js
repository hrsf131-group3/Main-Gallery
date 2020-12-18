const db = require('../db/postgreSQLConnection.js');

const listingInfo = (req, res) => {
  // const queryStr = `SELECT a.*,c.sale,c.pending,c.new,c.construction,d.image_id,d.url FROM mainphotos.property_listings AS a INNER JOIN mainphotos.status AS c ON a.listing_id = c.listing_id INNER JOIN mainphotos.property_images AS d ON c.listing_id = d.listing_id WHERE c.listing_id = ${req.params.id}`;
  const queryStr = `SELECT json_build_object('listing_id',min(query.listing_id),'neighborhood_id',min(query.neighborhood_id),'address',min(query.address),'price',min(query.price),'bedrooms',min(query.bedrooms),'baths',min(query.baths),'sq_footage',min(query.sq_footage),'sale',every(query.sale),'pending',every(query.pending),'new',every(query.new),'construction',every(query.construction),'url',json_agg(query.url)) FROM (SELECT a.*,c.sale,c.pending,c.new,c.construction,d.image_id,concat('https://hrsf131-sdc.s3-us-west-1.amazonaws.com',d.url) AS url FROM mainphotos.property_listings AS a INNER JOIN mainphotos.status AS c ON a.listing_id = c.listing_id INNER JOIN mainphotos.property_images AS d ON c.listing_id = d.listing_id WHERE c.listing_id = ${req.params.id}) AS query;`;

  db.pool.connect()
    .then((client) => (
      client.query(queryStr)
        // db.client.query(queryStr)
        .then((response) => {
          client.release();
          const listingInfo = {
            topHeader: {
              sale: response.rows[0].json_build_object.sale,
              pending: response.rows[0].json_build_object.pending,
              new: response.rows[0].json_build_object.new,
              construction: response.rows[0].json_build_object.construction,
            },
            address: response.rows[0].json_build_object.address,
            listing_id: req.params.id,
            price: response.rows[0].json_build_object.price,
            bed: response.rows[0].json_build_object.bedrooms,
            bath: response.rows[0].json_build_object.baths,
            images: response.rows[0].json_build_object.url,
          };
          // response.rows.forEach((obj) => listingInfo.images.push(`https://hrsf131-sdc.s3-us-west-1.amazonaws.com${obj.url}`));
          // res.setHeader('Access-Control-Allow-Origin', '*');
          // res.setHeader('Content-Type', 'application/json');
          // res.send([listingInfo]);
          res.status(200).send([listingInfo]);
        })
        .catch((err) => res.status(500).send(err))
    ));
};

module.exports = {
  listingInfo,
};
