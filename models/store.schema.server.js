var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var storeSchema = new Schema({
	storeName: String,
	storeUrl: String,
	storeEmail: String,
	passwordLink: String,
	password: String
})

mongoose.model('Store',storeSchema)