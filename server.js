var express = require('express')

var app = express()
app.get('/',function(req,res){
	res.send("i have learnt to make an express server, all what you are seeing i have made on my own, go to '/createstore' to see the form")
})

app.engine('html',require('ejs').renderFile)
app.set('views',__dirname+'/views')
app.set('view engine','html')

app.get('/createstore',function(req,res){
	res.render('createstore.html');
})

app.listen(8080)