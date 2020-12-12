var listings = require('../db_old/schema.js');
var mongo = require('../db_old/mongo.js');

/* eslint-disable array-callback-return */
// const schema = require('../db/schema.js');

getListings = (req, res) => {
  // if(typeof req.params.id !== "number") {
  //   res.sendStatus(403)
  // }
  const query = listings.ListingsModel.where({ listing_id: req.params.id });
  mongo.connect();
  query.find((err, listings) => {
    if (err) {
      res.status(404)
      console.log(err.message);
      mongo.db.close();
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(listings, 0, 2));
      mongo.db.close();
    }
  }
  )
}
module.exports = {
  getListings
}



























// module.exports = {
//   get: (req, res) => {
//     mongo.connect();
//     const query = schema.Listing.where({ id: req.params.id });
//     query.findOne((err, data) => {
//       if (err) {
//         res.status(404);
//         mongo.db.close();
//       } else {
//         res.status(200).send(data);
//         mongo.db.close();
//       }
//     });
//   },
//   getAll: (req, res) => {
//     mongo.connect();
//     schema.getAllListings.find((err, data) => {
//       if (err) {
//         res.status(404);
//       } else {
//         res.status(200).send(data);
//         mongo.db.close();
//       }
//     });
//   },
// };


