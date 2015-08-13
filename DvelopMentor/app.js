var express = require('express');
var app = express();
//var path = require('path');
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
//app.use();

app.get('/', function(req, res) {
    res.render('home')
})
app.post('/form', function(req, res) {
    var item = req.body.item;
    console.log(item);
})


app.listen(3000, function() {
    console.log('http://localhost:3000')
})