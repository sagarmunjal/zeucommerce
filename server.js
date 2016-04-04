var express = require('express'),
	mongoose = require('./mongoose.js'),
	bodyParser = require('body-parser')


// Initializing DB

mongoose.loadModels();
mongoose.connect();

var app = express()
app.use(bodyParser.json())

//Serving public folder

app.use('/public',express.static('./public'))

app.engine('html',require('ejs').renderFile)
app.set('views',__dirname+'/public/views')
app.set('view engine','html')

require('./routes/main.js')(app);

app.get('/*',function(req,res){
	res.render('index.html');
})


app.listen(8080)