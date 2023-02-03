var express = require('express'),
app = express(),
port = process.env.PORT || 5000;
  
  
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require("path");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/getPlayers',(req,res) => {
	fs.readFile(path.resolve(__dirname, "db.json"), 'utf8', function(err, data){
		data = JSON.parse(data);
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
		res.send(data);
	});
});


app.get('/getTopScores',(req,res) => {
	fs.readFile(path.resolve(__dirname, "db.json"), 'utf8', function(err, data){
		data = JSON.parse(data);
		json = data.results;
		json.sort(function(a, b){
			return b.score - a.score;
		});
		
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
		res.send(json);
	});
});



app.get('/getMaleTopScores',(req,res) => {
	fs.readFile(path.resolve(__dirname, "db.json"), 'utf8', function(err, data){
		data = JSON.parse(data);
		json = data.results;
		for (var i = 0; i < json.length; i++) {
			if(json[i].gender == "female"){
				delete json[i];
			}
		}
		json.sort(function(a, b){
			return b.score - a.score;
		});
		
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
		res.send(json);
	});
});


app.get('/getFemaleTopScores',(req,res) => {
	fs.readFile(path.resolve(__dirname, "db.json"), 'utf8', function(err, data){
		data = JSON.parse(data);
		json = data.results;
		for (var i = 0; i < json.length; i++) {
			if(json[i].gender == "male"){
				delete json[i];
			}
		}
		json.sort(function(a, b){
			return b.score - a.score;
		});
		
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
		res.send(json);
	});
});


app.post('/setPlayerScore', (req,res) => {
	fs.readFile(path.resolve(__dirname, "db.json"), 'utf8', function(err, data){
		data = JSON.parse(data);
		data = setPlayerScore(JSON.stringify(data), req.body.id, req.body.score);
		fs.writeFile(path.resolve(__dirname, "db.json"), data, 'utf8', function (err) {
			if (err) {
				console.log("An error occured while writing JSON Object to File.");
				return console.log(err);
			}	
			console.log("JSON file has been saved.");
			data = JSON.parse(data);
			res.send(data);
		});
	});
});


function setPlayerScore(jsonObj, id, score) {
	jsonObj = JSON.parse(jsonObj);
	for (var i = 0; i < jsonObj.results.length; i++) {
		if (jsonObj.results[i].id == id) {
			jsonObj.results[i].score = parseInt(jsonObj.results[i].score) + parseInt(score);
		}
	}
	return JSON.stringify(jsonObj);
}


function add (a,b){
	return a+b;
}

module.exports = app;
//export default app
