var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');
var adminRouter = express.Router();

app.use('/admin', adminRouter)


adminRouter.use(function(req, res, next) {
    console.log("method is :", req.method, "url is : ", req.url);
    next();
})
//=====
app.route('/login')
    .get(function(res, req) {
        res.send('this is the login')
    })
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
    })
//=====




adminRouter.get('/', function(req, res) {
    res.send('i am the dashboard')
})
adminRouter.get('/users', function(req, res) {
    res.send('these are the users')
})
adminRouter.param('name', function(req, res, next, name) {
    console.log('doing name validations on ' + name);
    req.name = name;
    next();
})
adminRouter.get('/users/:name', function(req, res) {
    res.send('hello ' + req.params.name + '!');
})

adminRouter.get('/posts', function(req, res) {
    res.send('these are the posts')
})





app.listen(3000, function() {
    console.log('http://localhost:3000')
})