// Set up required paths

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// To routes folder.  Index file and task api to be created with mongo.db
var index = require('./routes/index');
var tasks = require('./tasks/index');

// Server port
var port = 3000;

// Main app variable
var app = express();

// View Engine

//folder to use for views/ tells system that our views are going to be in the views folder
app.set('views', path.join(_dirname, 'views'));

// Tell where the engine is / letting it know that I am using ejs

app.set('view engine', 'ejs');

// Render files with html extension

app.engine('html', require('ejs').renderFile);

// Static folder to set angular info.. will go into client folder

app.use(express.static(path.join(_dirname, 'client')));

// Body Parser Middle Ware

app.use(bodyParser.json());

// passed object extended false
app.use(bodyParser.urlencoded({extended: false}));

// create routes

// associates home page with index
app.use('/', index);

// tasks url will be /api
app.use('/api', tasks);

// Listen  with call back function to console log server started
app.listen(port, function() {
console.log('server started on port '+port)
});



