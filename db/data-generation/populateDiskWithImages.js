const fs = require('fs');
const https = require('https');
const axios = require('axios');

function saveImageToDisk(url, id) {
  const file = fs.createWriteStream(`/home/chris/Downloads/stockphotos/${id}.jpg`);
  https.get(url, (response) => {
    response.pipe(file)
      .on('finish', () => console.log(`Image ${id} created`))
      .on('error', () => console.error(`ERROR: Image ${id} failed to create`));
  });
}
function saveImagesToDisk(amt) {
  for (let count = 0; count < amt; count += 1) {
    axios.get('https://loremflickr.com/json/800/800/house')
      .then((res) => {
        saveImageToDisk(res.data.file, count);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

module.exports = {
  saveImagesToDisk,
};
