/* eslint-disable linebreak-style */
//controle client autorização para uso de serviços
const admin = require('../controllers/admin.js')

module.exports = app => {
	app.post('/auth/signin', app.controllers.authenticateUser.signin)
	app.post('/auth/signup', app.controllers.users.save)
	app.post('/auth/refresh-token', app.controllers.checkerToken.VerifyToken, app.controllers.refreshToken.refresh)


	// crud Client
	app.route('/client/:id')
		.all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
		.get(app.controllers.users.getById)

	app.route('/client')
		.all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
		.get(app.controllers.users.getAllUsers)

	app.route('/client')
		.all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
		.post(app.controllers.users.save)

	app.route('/client/:id')
		.all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
		.put(app.controllers.users.updateUserId)


	app.route('/client/:id')
		.all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
		.delete(app.controllers.users.removeById)



	// crud PRONTUARIOS 
	app.route('/posts/buscas/:cpf')
		// .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
		.get(app.controllers.posts.getByCpf)

	// total de prontuarios existente
	app.route('/allposts')
		.all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
		.get(app.controllers.allCount.getAllPosts)

	app.route('/posts')
		.all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
		.post(app.controllers.posts.saveFile)


	app.route('/posts/buscas/:cpf')
		.all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
		.put(app.controllers.posts.updataFile)


	app.route('/posts/buscas/:cpf')
		.all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
		.delete(app.controllers.posts.removeByCpf)
}