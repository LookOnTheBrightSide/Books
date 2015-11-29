var express = require("express");
var app = express()
var server = require("http").Server(app);
var io = require("socket.io")(server);
app.use(express.static('app'));
// app.get('/',function(req,res){
// 	res.send("hello world");
// 	console.log("connected to express")
// })

io.on('connection',function(socket){
	console.log("socket initialized");
	socket.emit("msgs",["hello","boys","girls"]);
})
server.listen(3000,function(){
	console.log("http://localhost:3000");
})



























