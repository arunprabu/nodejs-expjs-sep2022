const { validationResult } = require('express-validator');
const User = require('../models/users.model');

// Create a new User 
exports.createUser = (req, res) => {
  console.log(req.body);
  /* 
  1. get the req.body  [DONE]
  2. connect with db [DONE]
  3. insert the above data into db 
  4. get the confirmation from db and send it back 
  */
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400)
              .json({ 
                errors: errors.array() 
              });
  }
  
  // creating DAO 
  const userDao = new User(req.body);
  // saving to create a new document by folowing syntax of mongoose
  userDao.save( (err, data) => {
    if(!err){
      console.log(data);
      res.status(201).json(data);
    }else{
      console.log(err);
      res.json(err);
    }
  });  
}

// Get Users  (listing users )
exports.getUsers =  (req, res) => {
  User.find({}, (err, data) => {
    if(!err){
      res.status(200).json(data);
    }else{
      res.json(err);
    }
  });
}

// Get User Details 
exports.getUserById = (req, res) => { // userId is URL Param

  // reading url param 
  console.log(req.params.userId);
  User.findOne({_id: req.params.userId}, (err, data) => {
    if(!err){
      res.status(200).json(data);
    }else{
      res.json(err);
    }
  });
}

// Update User
exports.updateUserById = (req, res) => { // userId is URL Param

  // reading url param 
  console.log(req.params.userId);

  // let's read the form data-- req.body
  console.log(req.body);

  // also try findOneAndUpdate - and find the difference
  User.updateOne({_id: req.params.userId}, req.body, (err, data) => {
    if(!err){
      res.status(201).json(data);
    }else{
      res.json(err);
    }
  });
}

// TODO: Delete User 


