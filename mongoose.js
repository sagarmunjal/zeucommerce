'use strict'

// Module Dep

var path = require('path'), 
	mongoose= require('mongoose'),
	config = require('./config')


module.exports.loadModels = function(){
	require('./models/store.schema.server.js')
}

module.exports.connect = function(){
	var db = mongoose.connect(config.db.uri,config.db.options,function(err){
		if(err){
			console.log('Error connecting to DB')
			console.log(err)
			return
		} console.log('Connected to DB')
	})
}