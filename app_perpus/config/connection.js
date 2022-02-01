var mysql = require('mysql');

function Connection() {
	this.pool = null;

	this.init = function() {
		this.pool = mysql.createPool({
			// connectionLimit: 10,
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'perrpus'
		});
	};

	this.acquire = function(callback) {
	this.pool.getConnection(function(err, Connection) {
		callback(err, Connection);
	});
  };	
}

module.exports = new Connection();