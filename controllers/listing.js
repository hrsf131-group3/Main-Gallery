let Listing = require('../db/schema.js');

getListings = (req, res) => {
  Listing.getAllListings( (err, listings) => {
   if (err) {
      res.status(400).json({
       success: false,
       error: err
     })
   }
     return res.status(200).json({
       success: true,
       data: listings
     })
     .catch(err => console.log(err))
   }
 )
}

module.exports = {
  getListings
}