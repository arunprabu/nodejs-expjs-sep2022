var express = require('express');
var router = express.Router(); 

/* GET home page. */ 
router.get('/', (req, res, next) => {
  console.log(req.url);
  
  // server side rendering using template engine
  // like ejs, jade, pug
  res.render('index', { title: 'Express!!!!!' });
});

module.exports = router;
