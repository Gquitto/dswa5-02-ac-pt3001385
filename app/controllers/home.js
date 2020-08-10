module.exports = function () {
	let controller = {};
	controller.index = function(req, res) {
		//Retorna a página index.ejs
		res.render('index', {nome: 'ExpressJS'});
	};
	return controller;
}