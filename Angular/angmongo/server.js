var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var app = express();
// serve static /bower_components
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/',function(req,res){
	res.send('index.html')
})

app.listen(3000,function(){
	console.log('http://localhost:3000');
})