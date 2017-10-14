// calls in express

var express = require('express');

// uses the express router
var router = express.Router();

// sets router to accept get request from home page
router.get('/tasks', function(req, res, next){
    res.send('TASK API');
});


// exports for access from other files
module.exports = router;