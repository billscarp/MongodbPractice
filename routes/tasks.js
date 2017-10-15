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
    //searches for tasks / function looks for tasks in the mongo database or throws err  / gets all tasks
    db.tasks.find(function(err, tasks) {
        if(err){
            // if err, return error
            res.send(err);
        }   // if not, return json file
            res.json(tasks);


    });
});

// Get single tasks
 // changes tasks to task/ Id is placeholder, because it changes/ 
router.get('/task/:id', function(req, res, next){
// use findOne to find one object.  Used Object ID to look at mongojs
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
        if(err){
            // if err, return error
            res.send(err);
        }   // if not, return json file
            res.json(task);


    });
});

// Save tasks

router.post('/task', function(req, res, next){
    var task = req.body;
    if (! task.title || (task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.tasks.save(task, function (err, task) {
            if(err) {
                res.send(err);
            }
                res.json(task);
        })
    }

});

// Delete a task
router.delete('/task/:id', function(req, res, next){
    
        db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
            if(err){
                // if err, return error
                res.send(err);
            }   // if not, return json file
                res.json(task);
    
    
        });
    });











// exports for access from other files
module.exports = router;