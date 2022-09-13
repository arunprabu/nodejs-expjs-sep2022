// Writing file async'ly 

const fs = require('fs');

const content = 'Thanks for using Cisco Webex.';

fs.writeFile('example.txt', content, (err) => {
  if(!err){
    console.log('File Written Successfully!');
  }else{
    console.log(err);
  }
});

console.log('Program Ended');
