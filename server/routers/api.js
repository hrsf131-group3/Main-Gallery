const express = require('express');
const controller = require('./../../controllers/listing.js');
const router = express.Router();

router.post('/homes', (req, res) => {
  res.send('post')
});
router.get('/homes/:id', controller.getListings);
router.patch('/homes/:id', (req, res) => {
  res.send('patch')
});
router.delete('/homes/:id', (req,res) => {
  res.send('delete')
});

module.exports = router;