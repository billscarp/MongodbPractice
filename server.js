// Set up required paths

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// To routes folder.  Index file and task api to be created with mongo.db
var index = require('./routes/index');
var tasks = require('./tasks/index');

// Main app variable
var app = express();

// View Engine