exports.list = function(req, res) {
  res.render('page', {title : "Lista podstron"});
};

exports.show = function(req, res) {
  res.render('page', {title : "Konkretna podstrona", id : req.params.id});
}

exports.edit = function(req, res) {
  
  var connection = require('../modules/db');
  var result = connection.query('SELECT * FROM users', function(err, rows, fields) {
    if (err) {
      throw err;
    } else {
      res.render('page', {title : "Akcja na podstronie", id : req.params.id, action : req.params.action, rows: rows});
      //connection.end();
    }
  });
  
}