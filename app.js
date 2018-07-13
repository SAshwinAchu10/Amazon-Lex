var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function (req, res)
{
    res.render('index.html');
});
app.get('/settings', function (req, res)
{
    res.render('settings.html');
});
app.get('/dashboard', function (req, res)
{
    res.render('dashboard.html');
});
app.get('/shipping', function (req, res)
{
    res.render('shipping.html');
});
app.get('/default', function (req, res)
{
    res.render('default.html');
});

app.listen(3003);
