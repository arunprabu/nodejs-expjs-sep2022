const mongoose = require('./mongo');

// defining the schema - with the field and datatype 
const Account = new mongoose.Schema({
  fullName: String,
  email: {
    type: String,
    unique: true
  },
  salt: String,
  hash: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
  updatedBy: String,
  updatedOn: { type: Date, default: Date.now } 
}, {
  strict: true
});

module.exports = mongoose.model('Account', Account);