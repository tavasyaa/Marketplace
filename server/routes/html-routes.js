const mysql = require('mysql');

module.exports = function(app, connection) {
	// if no matching routes, default to index.html
	app.get('/', function(req, res) {
		//res.send('Hello!');
		connection.query('select * from items', function(err, data){
			err? res.send(err) : res.json({users: data});
		});
	});
};