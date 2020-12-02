const express = require('express');
const controller = require('./../../controllers/listing.js');

const router = express.Router();

/*
 * CRUD Routes for Properties
 */
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

/*
 * CRUD Routes for Images
 */
router.post('/v1/homes/images', (req, res) => {
  res.send('post');
});
router.get('/v1/homes/:id/images/:imageid', controller.getListings);
router.patch('/v1/homes/:id/images/:imageid', (req, res) => {
  res.send('patch');
});
router.delete('/v1/homes/:id/images/:imageid', (req, res) => {
  res.send('delete');
});

module.exports = router;
