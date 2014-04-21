exports.list = function(req, res) {
  res.render('page', {title : "Lista podstron"});
};

exports.show = function(req, res) {
  res.render('page', {title : "Konkretna podstrona", id : req.params.id});
}

exports.edit = function(req, res) {
  res.render('page', {title : "Akcja na podstronie", id : req.params.id, action : req.params.action});
}