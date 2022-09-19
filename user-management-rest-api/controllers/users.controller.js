// Create a new User 
exports.createUser = (req, res) => {
  console.log(req.body);

  /* 
  1. get the req.body 
  2. connect with db
  3. insert the above data into db 
  4. get the confirmation from db and send it back 
  */
  const userData = {
    id: 999,
    ...req.body
  }
  res.json(userData);
}

// Get Users  (listing users )
exports.getUsers =  (req, res) => {
  const userList = [{
    id: 1, 
    name: 'John',
    phone: '+91-234242233',
    email: 'j@k.com'
  }];
  res.status(200).json(userList);
}

// Get User Details 
exports.getUserById = (req, res) => { // userId is URL Param

  // reading url param 
  console.log(req.params.userId);
  const userData = {
    id: req.params.userId, 
    name: 'John',
    phone: '+91-234242233',
    email: 'j@k.com'
  }

  res.status(200).json(userData);
}

// Update User
exports.updateUserById = (req, res) => { // userId is URL Param

  // reading url param 
  console.log(req.params.userId);

  // let's read the form data-- req.body
  console.log(req.body);

  const updatedUserData = {
    id: req.params.userId, 
    ...req.body
  }

  res.status(201).json(updatedUserData);
}

// TODO: Delete User 


