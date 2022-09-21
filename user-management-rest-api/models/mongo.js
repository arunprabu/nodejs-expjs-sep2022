const mongoose = require('mongoose');
const mongoConfig = require('../config/mongo.config.json');

const dbURI = mongoConfig.url;
const dbOptions = mongoConfig.options;

mongoose.connect(dbURI, dbOptions);

// when successfully connected
mongoose.connection.on('connected', () => {
  console.log(`Mongoose Connection opened to ${dbURI}`);
});

// when connection throws an error
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose Connection Error: ${err}`);
});

// when the connection with mongodb disconnected
mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose Connection disconnected`);
});

// If the Node Process ends, close the connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log(`Mongoose Connection Closed When app terminated`);
    process.exit(0);
  });
});

module.exports = mongoose;
