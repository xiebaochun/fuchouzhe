var express = require('express');

var app = express();

app.use('/',express.static(__dirname+'/'));

// app.get('/',function(req,res){
// 	res.send('good');
// });

app.listen(3000,function(){
	console.log('serving form 3000 port!');
});