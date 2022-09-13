const path = require('path');

const fileName = __filename; // filename incl dir 

// get the extn of the file
const fileExtn = path.extname(fileName);
console.log(fileExtn);

// want only the file name? 
const baseName = path.basename(fileName);
console.log(baseName);

