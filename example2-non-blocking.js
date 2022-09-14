// Non-Blocking I/O 
// Reading file from file system -- asynchronously 
// So, it's called as non-blocking I/O 

console.log('Program Started');
const fs = require('fs');

fs.readFile('./sample.txt', (err, data) => { // error first callback
  if (err) {
    //console.log(err);
    throw err;
  }
  console.log(data.toString());
});

console.log('Program Ended');


