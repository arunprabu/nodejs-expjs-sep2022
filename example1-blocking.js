// Blocking I/O 
// Reading file from file system -- synchronously 
// So, it's called as blocking I/O 

console.log('Program Started');
const fs = require('fs'); // importing fs module

// let's read a file sync'ly 
const data = fs.readFileSync('./sample.txt');
console.log(data.toString());

console.log('Program Ended');