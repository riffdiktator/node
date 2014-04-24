var mysql = require('mysql')

var globalConf = {
  "host" : "localhost",
  "username" : "root",
  "password" : "root",
  "database" : "nodejs"
}

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'nodejs'
});

connection.connect();

module.exports = connection;
