const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Account = mongoose.model('Account');

// basic config for login using passport local 
passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(email, password, done) {
    Account.findOne({ email: email }, function (err, account) {
      if (err) { return done(err); }
      // Return if account not found in database
      if (!account) {
        return done(null, false, {
          message: 'Incorrect email or password.'
        });
      }
      // Return if password is wrong
      if (!account.validatePassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // If credentials are correct, return the account object
      return done(null, account);
    });
  }
));