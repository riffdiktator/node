// Pierwsza aplikacja w nodejs i expressjs, która nie robi nic sensownego
//
//
// v. 0.0.1
//
// Copyright RiffDiktator.com 2014

var express          = require('express'),
    path             = require('path'),
    mainPage         = require('./routes/index'),
    page             = require('./routes/page');




var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', mainPage.index);

app.get('/page', page.list);
app.get('/page/:id', page.show);
app.get('/page/:id/:action', page.edit);

app.get('*', mainPage.index);

var server = app.listen(3000);