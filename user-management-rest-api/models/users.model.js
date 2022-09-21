const mongoose = require('./mongo');

const { Schema } = mongoose;

// Let's have schema for the collection
// building a collection with field and datatype 
const User = new Schema({
  name: String,
  phone: String,
  email: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
  updatedBy: String,
  updatedOn: { type: Date, default: Date.now } 
})

module.exports = mongoose.model('User', User);