var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config');
var bcrypt = require('bcrypt-nodejs');
var mongoose  = require('mongoose');
var app = express();
mongoose.connect(config.database, function(err){
	if (err) {
		console.log(err);
	}else{
		console.log('connected to database')
	}
})
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname,'public')));

var api =  require('./app/routes/api')(app, express);
app.use('/api', api);

app.get('*', function(req,res){
	res.sendFile(__dirname + '/public/app/views/index.html')
})

app.listen(config.port, function(err){
	if(err){
		console.log(err)
	}else{
		console.log('http://localhost:',config.port)
	}

})