var express = require('express');
var app =  express();
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.get('/home',function(req,res){
	res.send("Hello World!")
}).listen(process.argv[2])