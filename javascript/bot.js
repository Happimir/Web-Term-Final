var mysql = require('mysql');
var async = require('async');
var stream;
var jsdom = require('jsdom').jsdom;
var document = jsdom('<html></html>', {});
var window = document.defaultView;
var $ = require('jquery')(window);
var Twit = require('twit');
var T = new Twit({
    consumer_key: 'hWZGwXnBJYjFzeeDnHgq7BhFB',
    consumer_secret: 'WxhHEI4VIDKWYunjDq7BP5n5QBTIPJkom1OwVuTmgqH6Unln7U',
    access_token: '601026791-CAoiOxsmLF1NFYy6tXMTHqZxBDLimELeOYBe3jvl',
    access_token_secret: 'dqLUNeDtQgrkZIQ8CyzSa3YDjo6bEedc99RSdwsROvZV6'
})
//var movieList = 'fantasticbeasts, doctorstrange, arrival, arrival, underworld, inferno, mechanicresurrection, sausageparty, moana, jackreacher, snowdenthemovie, kuboandthetwostrings, hohwmovie, alliedmovie, nerve, wholetruth, nocturnalanimals, almostchristmas, hacksawridge, girlonthetrain, dreamworkstrolls ';
var movieList = " ";

var AlchemyAPI = require('./alchemyapi');
var alchemyapi = new AlchemyAPI();

//setting up sql
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p#66wuRD',
    database: 'movieschema'
});

var id = 1;

async.series([
	doConnect,
	getMovies,
	confirmStream,
	startTweet
]);

// Create tweet hashtag string from database
function doConnect(){	
	connection.connect(function (error) {
    		if (!!error) {
        		console.log('Error');
    		} else {
        		console.log('Connected');
			getMovies();
    		}
   	 	//console.log(error);
	});
}
function getMovies(){
	console.log("inside get movies");
	connection.query('SELECT tweetTitle FROM movies Where id != ?',id,function(err,rows){
		if(err) throw err;

		for(var i = 0; i< rows.length; i++){
			//console.log(rows[i].tweetTitle);
			movieList = movieList.concat(rows[i].tweetTitle);
			if((i+1) < rows.length){
				movieList = movieList.concat(', ');
			} else {
				movieList = movieList.concat(' ');
				confirmStream();
			}
		}
		});

}

function confirmStream(){		
	console.log("our movie list" + movieList);
	stream = T.stream('statuses/filter', {
    		track: movieList,
    		language: 'en'
	});
	startTweet();
}
var totalScore = 0.000;
var score = 0.000;
var tweetCount = 0.000;
var title;
var newScore;
function update(){
	if(!(isNaN(totalScore)) && !(isNaN(score)))
	{
	var query = connection.query('UPDATE movies SET totalScore = ' + totalScore + ' , score = ' + score + ' , tweetCount = ' + tweetCount +' WHERE tweetTitle = ?', title, function(err, result){
	console.log(query.sql);
}); }
}

function pull(){
	connection.query('SELECT * FROM movies where tweetTitle = ?', title, function (err, result) {
	if(err){
		console.error(err);
		return;
		
		}
	try{
		totalScore = result[0].totalScore + newScore;
		tweetCount = result[0].tweetCount + 1;
		score = totalScore/tweetCount;
		update();
	   }
	catch(error){
		console.log("SQL Pull error");
		};
		});
}		


function startTweet(){
	stream.on('tweet', function (tweet) {
	console.log("before getmovies");
   // getMovies();
    var tweetTxt = tweet.text;
    var combineTxt = movieList + "`" + tweetTxt;
    var captures = /\b(\w+)\b.*`.*\b\1\b/i.exec(combineTxt);

    alchemyapi.sentiment("text", tweetTxt, {}, function (response) {
        try {
            if (captures[1]) {
		title = captures[1];
                //console.log(captures[1] + " occurs in both strings");
                console.log(tweetTxt)
                console.log("Sentiment: " + response["docSentiment"]["type"]);
                console.log("Sentiment: " + response["docSentiment"]["score"]);
                console.log("");
		newScore = Number(response["docSentiment"]["score"]);
		pull();         
            }
        } catch (err) {
            	console.log(tweet.text);
		console.log("no match in both strings");
        };
    });


})

}
