const fs = require('fs');
const path = require('path');
const read = require('readline');

function addUUID(fileName) {
  const lineReader = read.createInterface({
    input: fs.createReadStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', `${fileName}.csv`)),
  });
  // const inStream = fs.createReadStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', 'property_listings.csv'));
  const out = fs.createWriteStream(path.join('/home2/VSCode/SDC', 'csvs', 'cassandra-specific', `${fileName}_uuid.csv`));
  let index = 0;
  lineReader.on('line', (line) => {
    let newLine = line;
    if (index > 0) {
      newLine = newLine.concat(`,${index} \n`);
    } else {
      newLine = newLine.concat(`\n`);
    }
    out.write(newLine);
    index += 1;
  });
}


addUUID();