var express = require('express');
var mysql = require('mysql');
var app = express();
//app.set('port', process.env.PORT || 3306)

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'p#66wuRD',
	database: 'movieschema'
});



connection.connect(function(error){
	if(!!error){
		console.log('Error');	
	} else {
		console.log('Connected');
	}
	//console.log(error);
});
var title = 'fantastictest';
var movieReview = {
	title: "Fantastic Beasts",
	tweetTitle: "FantasticBeasts"
};
var tTotal = 48;
function update(){

	connection.query('update movies set totalScore = ' + tTotal + ' where tweetTitle = ?', title);
	console.log('finishing query');
//	callback();
};

function pull (){
var query = connection.query('Select * from movies WHERE tweetTitle = ?',title , function(err, result)
{
	if(err){
		console.error(err);
		return;
	}
	//console.log(query.sql);
	console.error(result);
	tTotal = result[0].totalScore + 50;
//	if(callback){
//	console.log('running call back');}
	update();
});

};
pull();
//update(pull);

//app.get('/', function(req, resp) {
	
//})

//app.listen(3306);
