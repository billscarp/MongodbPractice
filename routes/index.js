// calls in express

var express = require('express');

// uses the express router
var router = express.Router();

// sets router to accept get request from home page
router.get('/', function(req, res, next){
    // res.send sends what I tell it to the index page  changing to res.render so that I can use ejs
    res.render('index.html');
});


// exports for access from other files
module.exports = router;

