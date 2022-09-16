var express = require('express');
var router = express.Router(); 

/* GET about page. */ 
router.get('/', (req, res, next) => {
  console.log(req.url);
  
  res.render('about', { title: 'About Page' });
});

module.exports = router;
