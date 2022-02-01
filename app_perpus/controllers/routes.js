var app_perpus = require('../models/app_perpus');

module.exports = {
	configure: function(app) {
		app.get('/perpus', function(req,res) {
			app_perpus.get(res);
		});
		app.get('/perpus/:id',function(req,res) {
			app_perpus.getByID(req.params.id,res);
		});
		app.post('/perpus',function(req,res) {
			app_perpus.create(req.body,res);
		});
		app.put('/perpus/:id',function(req,res) {
			app_perpus.update(req.body.judul,req.params.id,res);
		});
		app.delete('/perpus/:id',function(req,res) {
			app_perpus.delete(req.params.id,res);
		});
	}
};