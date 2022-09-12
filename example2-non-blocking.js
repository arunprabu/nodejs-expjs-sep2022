// Non-Blocking I/O 
// Reading file from file system -- asynchronously 
// So, it's called as non-blocking I/O 

console.log('Program Started');
const fs = require('fs');

fs.readFile('./sample.txt', (err, data) => { // TO LEARN callback fn in nodejs
  if(!err){
    console.log(data.toString());
  }else{
    console.log(err);
  }
});

console.log('Program Ended');


