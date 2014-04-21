exports.list = function(req, res) {
  res.render('page', {title : "Lista podstron"});
};

exports.show = function(req, res) {
  res.render('page', {title : "Konkretna podstrona", id : req.params.id});
}

exports.edit = function(req, res) {
  
  var mysql = require('mysql');
  
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'nodejs'
  });
  connection.connect();


  connection.query('SELECT * FROM users', function(err, rows, fields) {
    if (err) throw err;

    console.log('Ilość wyników: ', rows.length);
  });

  connection.end();

  res.render('page', {title : "Akcja na podstronie", id : req.params.id, action : req.params.action});
}