let Listing = require('../db/schema.js');

/* eslint-disable array-callback-return */
const schema = require('../db/schema.js');
const mongo = require('../db/mongo');

module.exports = {
  get: (req, res) => {
    mongo.connect();
    query.findOne((err, data) => {
      if (err) {
        res.status(404);
      } else {
        res.status(200).send(data);
        mongo.db.close();
      }
    });
  },
  getAll: (req, res) => {
    mongo.connect();
    schema.getAllListings.find((err, data) => {
      if (err) {
        res.status(404);
      } else {
        res.status(200).send(data);
        mongo.db.close();
      }
    });
  },
};