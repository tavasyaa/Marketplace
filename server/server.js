const express = require('express');
const mysql = require('mysql');

const port = 4000;

const app = express();

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'marketplace'
});

connection.connect(function(err){
	(err)? console.log(err): console.log(connection);
});

require('./routes/html-routes')(app, connection);

app.listen(port, () => {
	console.log('App running on port %d', port);
});