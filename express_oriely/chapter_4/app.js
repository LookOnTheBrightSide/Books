var express = require('express');
var app = express();
var fortune = require('./lib/fortune.js')
app.use(express.static(__dirname + '/public'));

var handlebars = require('express-handlebars')
    .create({
        defaultLayout: 'main'
    });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');
// app.use(express.static('views'));
// app.use(express.static('public'));
app.use(function(req,res,next){
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
})

app.set('port', process.env.PORT || 3000);



app.get('/', function(req, res) {
    res.render('home');
});
app.get('/about', function(req, res) {
    res.render('about', {
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/tests-about.js'
    });
});
// 404 catch-all handler (middleware)
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});
// 500 error handler (middleware)
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});
// custom 404 page
app.use(function(req, res, next) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
app.listen(app.get('port'), function() {
    console.log('Express on http://localhost:' + app.get('port'))
});