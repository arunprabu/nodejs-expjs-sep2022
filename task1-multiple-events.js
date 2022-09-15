// define event 'loginSuccess' 

// upon loginSuccess, start reading the file async'ly 

// after file read successfully, emit the event 'fileReadingSuccess' 

// upon fileReadingSuccess, display the content of the file

const events = require('events');
const fs = require('fs');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('fileReadingSuccess', (data) => {
  console.log("Print the Content: ", data.toString());
});

eventEmitter.on('loginSuccess', () => {
  fs.readFile('./sample.txt', (error, data) => { // TO LEARN callback fn in nodejs
    if (!error) {
      eventEmitter.emit('fileReadingSuccess', data);
    } else {
      console.log(error);
    }
  });
});
eventEmitter.emit('loginSuccess')