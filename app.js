// Pierwsza aplikacja w nodejs i expressjs, która nie robi nic sensownego
//
//
// v. 0.0.1
//
// Copyright RiffDiktator.com 2014

var express          = require('express'),
    path             = require('path'),
    mainPage         = require('./routes/index'),
    page             = require('./routes/page'),
    mysql            = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'nodejs'
});
connection.connect();


connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();


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