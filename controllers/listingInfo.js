const db = require('../db/postgreSQLConnection.js');

const listingInfo = (req, res) => {
  const queryStr = `SELECT a.*,c.sale,c.pending,c.new,c.construction,d.image_id,d.url FROM mainphotos.property_listings AS a INNER JOIN mainphotos.status AS c ON a.listing_id = c.listing_id INNER JOIN mainphotos.property_images AS d ON c.listing_id = d.listing_id WHERE c.listing_id = ${req.params.id}`;
  db.pool.connect()
    .then((client) => (
      client.query(queryStr)
      // db.client.query(queryStr)
        .then((response) => {
          const listingInfo = {
            topHeader: {
              sale: response.rows[0].sale,
              pending: response.rows[0].pending,
              new: response.rows[0].new,
              construction: response.rows[0].construction,
            },
            address: response.rows[0].address,
            listing_id: req.params.id,
            price: response.rows[0].price,
            bed: response.rows[0].bedrooms,
            bath: response.rows[0].baths,
            images: [],
          };
          response.rows.forEach((obj) => listingInfo.images.push(`https://hrsf131-sdc.s3-us-west-1.amazonaws.com${obj.url}`));
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Content-Type', 'application/json');
          res.send([listingInfo]);
          client.release();
        })
        .catch((err) => console.error(err))
    ));
};

module.exports = {
  listingInfo,
};
