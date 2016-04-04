var q = require('q')
var sendgrid  = require('sendgrid')('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');

module.exports.sendMail = function(obj){
	if(!obj.to || !obj.from || !obj.subject || !obj.body){
		return new Error("Invalid Object")
	}
	var deferred = q.defer();
	sendgrid.send({
		to: obj.to,
		from: obj.from,
		subject:obj.subject,
		text : obj.body
	},function(err, json) {
  		if (err) { 
  			deferred.reject(err)
  		}
  		deferred.resolve(json)
	})
	return deferred.promise
}