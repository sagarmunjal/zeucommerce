var storeCtrl = require('../controllers/store.controller.server')

module.exports = function(app){
	app.post('/store/create',storeCtrl.createStore)
	app.post('/store/createpass',storeCtrl.savePassword)
}

