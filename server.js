const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'novakdjokovic1',
	database: 'marketplace'
});

connection.connect(function(err){
	(err)? console.log(err): console.log(connection);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
	connection.query('select * from items', function(err, data){
		err ? res.send(err) : res.send({express: data})
	})
})