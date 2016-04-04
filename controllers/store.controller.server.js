var mongoose = require('mongoose'),
	Store = mongoose.model('Store'),
	mail = require('./mail.controller.server'),
	q = require('q');

module.exports.createStore = function(req,res){
	var store = new Store(req.body);

	store.passwordLink = Math.random()*10e20;
	store.save(function(err){
		if(err){
			res.send({err:true,message:'Unable to save Store'})
			return
		}
		var mailData ={
			to : req.body.storeEmail,
			from : 'sparsh@doitloud.in',
			subject: 'Create your password',
			body : 'Create your password at http://localhost:8080/create-password/'+store.passwordLink
		};

		q.when(mail.sendMail(mailData),function(data){
			console.log(data)
		},function(err){
			console.log(err)
		})
		
		res.send(store)
	})
}

module.exports.savePassword = function(req,res){
	var passwordLink = req.body.passwordLink
	var password = req.body.password
	var query = {passwordLink:passwordLink}
	var update = {$set:{password:password}}
	var options = {new:true}
	Store.findOneAndUpdate(query,update,options,function(err,store){
		if(err){
			res.send({error:true,message:'Unable to update password'})
			return
		}
		res.send({error:false,store:store})

	})
}


