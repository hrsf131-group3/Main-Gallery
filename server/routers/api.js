const express = require('express');
const controller = require('./../../controllers/listing.js');

const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// });
router.post('/v1/homes', (req, res) => {
  res.send('post');
});
router.get('/v1/homes/:id', controller.getListings);
router.patch('/v1/homes/:id', (req, res) => {
  res.send('patch');
});
router.delete('/v1/homes/:id', (req, res) => {
  res.send('delete');
});

module.exports = router;
