var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  const userList = [{
    id: 1, 
    name: 'John',
    phone: '+91-234242233',
    email: 'j@k.com'
  }];
  res.status(200).json(userList);
});

/* POST add user */
router.post('/', (req, res, next) => {
  // we need to grab the data from front end 
  console.log(req.body);

  const savedUserInfo = {
    id: 999,
    ...req.body
  }

  res.status(201).json(savedUserInfo);
});

/* GET to get user details of specific user id */
router.get('/:userId', (req, res, next) => { // userId is URL Param

  // reading url param 
  console.log(req.params.userId);
  const userData = {
    id: req.params.userId, 
    name: 'John',
    phone: '+91-234242233',
    email: 'j@k.com'
  }

  res.status(200).json(userData);
});

/* PUT to update user details of specific user id */
router.put('/:userId', (req, res, next) => { // userId is URL Param

  // reading url param 
  console.log(req.params.userId);

  // let's read the form data-- req.body
  console.log(req.body);

  const updatedUserData = {
    id: req.params.userId, 
    ...req.body
  }

  res.status(201).json(updatedUserData);
});




module.exports = router;
