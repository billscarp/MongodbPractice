// calls in express

var express = require('express');

// uses the express router
var router = express.Router();

// require mongojs

var mongojs = require('mongojs');

// create database object / added mongo driver with my username and password & Object array tasks

var db = mongojs('mongodb://billscarp:bonehead@ds113063.mlab.com:13063/mytasklist_billy', ['tasks'])

// sets router to accept get request from home page
router.get('/tasks', function(req, res, next){
    //searches for the mongo database
    db.tasks.find(function(err, tasks) {
        if(err){
            res.send(err);
        }
            res.json(tasks);


    });
});


// exports for access from other files
module.exports = router;