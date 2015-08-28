var express = require('express');
var app = express();
var posts = require('./posts/post.json')

app.get('/',function(req,res){
	res.send("<h3>Hello express</h3>")
})
app.get('/blog/:title?', function(req,res){
	var title = req.params.title;
	if (title === undefined) {
		res.status(503)
		res.send('<h2>Nothing to see here!</h2>')
	}else{
		var post = posts[title]
		res.send(post)
	}
	
})


app.listen(3000, function(){
	console.log('http://localhost:3000',"run node-inspector and nodemon --debug app.js" )
})



































