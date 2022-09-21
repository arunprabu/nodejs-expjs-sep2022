const mongoose = require('./mongo');

const { Schema } = mongoose;

// Let's have schema for the collection
// building a collection with field and datatype 
const User = new Schema({
  name: String,
  phone: String,
  email: { 
    type: String,
    unique: true, // unique email 
    required: true // mandatory field
  },
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
  updatedBy: String,
  updatedOn: { type: Date, default: Date.now } 
}, {
  strict: false // anything other than the above fields can also be saved
})

module.exports = mongoose.model('User', User);