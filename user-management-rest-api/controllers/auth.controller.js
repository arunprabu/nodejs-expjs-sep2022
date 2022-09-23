const passport = require('passport');
const Account = require('../models/account.model');

exports.signup = (req, res) => {
  console.log(req.body);

  // generate salt and hash out of the p/w 
  const accountDao = new Account(req.body);
  accountDao.encryptPassword(req.body.password);
  console.log(accountDao);
  // TODO: remove the password from the dao object -- how to remove prop from obj
  accountDao.save( (err, data) => {
    if(!err){
      console.log(data);

      // you can send email to verify email using sendgrid - try later
      res.status(201).json({
        status:'Account Created Successfully'
      });
    }else{
      console.log(err);
      res.json(err);
    }
  });
}

exports.login = (req, res) => {
  console.log(req.body);
  // check the auth creds in db 
  // send token

  // will auth using passport's local strategy
  passport.authenticate('local', function(err, account, info) {
    
    // if passport throws error 
    if(err){
      res.json(err);
    }

    // if account is found 
    if(account){
      // generate token and send it in res 
      const authToken = account.generateJWT();
      res.json({
        status: 'Loggin Successfully!',
        token: authToken
      });
    }else{
      res.json({
        status: info.message
      });
    }
  })(req, res);
}