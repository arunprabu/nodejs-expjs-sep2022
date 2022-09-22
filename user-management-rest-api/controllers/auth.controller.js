const Account = require('../models/account.model');

exports.signup = (req, res) => {
  console.log(req.body);
  res.json({msg: 'Signup Successful!'});
}

exports.login = (req, res) => {
  console.log(req.body);
  res.json({msg: 'Login Successful!'});
}