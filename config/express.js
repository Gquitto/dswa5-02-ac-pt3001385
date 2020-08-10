const express = require('express');
const bodyParser = require('body-parser');
const load = require('express-load');

module.exports = function(){
	//Instância do Express
	let app = express();

	//Middleware
	app.use(express.static('./public'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

    //Definir Engine para a View
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

    //Carregar pastas
	load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);

	return app;
};