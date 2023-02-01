var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000;
  
  
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require("path");



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port);

app.get('/getUsers',(req,res) => {
	console.log(__dirname + "***" + path.resolve(__dirname, "db.json"));
	fs.readFile(path.resolve(__dirname, "db.json"), 'utf8', function(err, data){
		data = JSON.parse(data);
		res.send(data);
	});
});


app.get('/getTopScores',(req,res) => {
	console.log(__dirname + "***" + path.resolve(__dirname, "db.json"));
	fs.readFile(path.resolve(__dirname, "db.json"), 'utf8', function(err, data){
		data = JSON.parse(data);
		for (var i = 0; i < data.results.length; i++) {
			console.log("***");
			console.log(data.results[i].dob.age);
		}
		json = data.results;
		json.sort(function(a, b){
			return a.dob.age - b.dob.age;
		});
		
		res.send(json);
	});
});



console.log('todo list RESTful API server started on: ' + port);