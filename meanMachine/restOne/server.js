var express = require('express');
var app = express();
var morgan = require('morgan');
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//handle cors requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});




app.use(morgan('dev'));

app.get('/',function(req,res) {
	res.send('Welcome to the home page!')
});

var apiRouter = express.Router();

apiRouter.get('/',function(req,res) {
	res.json({message: "Yay, welcome to the api!"});
})
app.use('/api',apiRouter);


app.listen(port,function() {
	console.log('http://localhost:'+port)
})

































