const db = require('../db/postgreSQLConnection.js');

const listingInfo = (req, res) => {
  const queryStr = `SELECT a.*,b.entry_id,b.event_date,b.event_description,b.price,c.sale,c.pending,c.new,c.construction,d.image_id,d.url FROM property_listings AS a INNER JOIN price_history AS b ON a.listing_id = b.listing_id INNER JOIN status AS c ON b.listing_id = c.listing_id INNER JOIN property_images AS d ON c.listing_id = d.listing_id WHERE b.listing_id = ${req.params.id}`;
  db.client.query(queryStr)
    .then((response) => {
      console.log(response);
      res.sendStatus(200);
    })
    .catch((err) => console.error(err));
};

module.exports = {
  listingInfo,
};
