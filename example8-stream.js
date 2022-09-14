const fs = require('fs');

const readStream = fs.createReadStream('anotherBigFile.txt', 'utf8');

readStream.on('data', (chunk) => { // data is an event emitted upon successful createReadStream

  // if the file has more content you will see many chunks here
  console.log('********************');
  console.log('NEW CHUNK ARRIVED');
  console.log('********************');

  console.log(chunk);
});

readStream.on('end', () => {
  console.log('ALL CHUNKS ARRIVED');
});

readStream.on('error', (error) => {
  console.log(error);
});