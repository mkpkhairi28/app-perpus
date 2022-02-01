var connection = require ('../config/connection');

function app_perpus() {
	this.get = function(res) {
		connection.acquire(function(err,con) {
			con.query('select * from buku', function(err,result) {
				con.release();
				res.send(result);
				console.log("get successful");
			});
		});
	};
	this.getByID = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('select * from buku where id_buku = ?', id, function(err,result) {
				con.release();
				res.send(result);
				console.log("get by ID successful");
			});
		});
	};
	this.create = function(app_perpus,res) {
		connection.acquire(function(err,con) {
			con.query('insert into buku set ?', app_perpus, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'perpus creation fail'});
				} else {
					res.send({status:0, message:'perpus creation succes'});
					console.log("Post Succesful");
				}
			});
		});
	};
	this.update = function(app_perpus,id,res) {
		connection.acquire(function(err,con) {
			con.query('UPDATE buku SET judul = ?, pengarang = ?, penerbit = ?, id_kategori = ? WHERE id_buku = ?', [app_perpus, id], function(err,result) {
				con.release();
				if(err) {
					res.send({status:1, message:'perpus update fail'});
				}else{
					res.send({status:0, message:'perpus update succes'});
					console.log("Put successful");
				}
			});
		});
	};
	this.delete = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('delete from buku where id_buku = ?', id, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'perpus delete fail'})
				} else {
					res.send({status:0, message:'perpus delete succes'});
					console.log("delete successful");
				}
			});
		});
	};
};
module.exports = new app_perpus ();
