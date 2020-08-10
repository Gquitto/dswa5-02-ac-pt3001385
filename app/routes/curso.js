module.exports = function(app){
	const controller = app.controllers.curso;
	app.get('/cursos', controller.listaCurso);
	app.get('/cursos/:id', controller.obtemCurso);
};