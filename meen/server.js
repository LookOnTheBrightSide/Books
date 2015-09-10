var express = require('express');

var exphbs  = require('express-handlebars');
var morgan = require('morgan');
var bodyParser     = require('body-parser');
var env = process.env.NODE_ENV || 'development';

var app = express();

// if ('development' == env) {
//     // configure stuff here
//     app.set('views', __dirname + '/server/views');
//     app.set('view engine', 'exphs');
// }
//app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                     // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }))    // parse application/x-www-form-urlencoded
app.use(bodyParser.json())  
//view engine 
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('server/views'));
app.use(express.static('/public'));

//all routes
app.get('/*', function(req, res) {
    res.render('index')
})

app.listen(3009, function() {
    console.log("http://localhost:3009");
})