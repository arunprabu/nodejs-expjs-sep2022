// events and event emitter example 
const events = require('events');

// Creating an obj of EventEmitter class 
const eventEmitter = new events.EventEmitter();

// Creating Custom Event using eventEmitter obj 
eventEmitter.on('onReportGenerated', (data) => { 
  // upon the the above event triggered/emitted the callback will be called
  console.log('Inside onReportGenerated');
  console.log(data);
});

console.log('Before the custom event triggered');

// Triggering/Emitting the custom event
eventEmitter.emit('onReportGenerated', 'John');

console.log('Program Ended');

