// Buffer objects are used to represent a fixed-length sequence of bytes. Many Node.js APIs support Buffers.
// File Reading and writing will have to deal with only binay data (0's and 1's ). 
// So, NodeJs needs buffer. 

// Each integer in a buffer represents a byte
const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a congue lorem. Nulla facilisi. Suspendisse mauris nisi, elementum sit amet luctus vel, mollis eu sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fermentum elit nec gravida semper. Suspendisse egestas tortor odio, non accumsan nulla suscipit vitae. Praesent interdum ut nibh sed venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';

const buffer = Buffer.from(dummyText, 'utf-8'); // initializes buffer with given data
console.log(buffer); // prints the text in buffer format
console.log(buffer.toString()); // prints the text in string format

console.log(buffer.toJSON()); // shows the type and also data in an array of unicode chars 
// inside the array, you can find 76 (unicode char) -- that represents L 
// Refer: https://www.codetable.net/decimal/76

console.log('=============');
console.log(buffer[0]);

buffer.write('Hello! NodeJS is Great!'); // replaces the first few chars of the buffer
console.log(buffer.toString());

console.log('***********************');

// one more example
// Allocates a new Buffer of 5 bytes. 
const buf1 = Buffer.alloc(5);
console.log(buf1); // Prints: <Buffer 00 00 00 00 00>

console.log('***********************');
// Allocates a new Buffer of 5 bytes. 
const buf2 = Buffer.alloc(5, 'a');
console.log(buf2); // Prints: <Buffer 61 61 61 61 61>
console.log(buf2.toJSON()); // unicode char of a will be found. it is '97' 

console.log(Buffer.isBuffer(buf2)); // whether the data is buffer or not

