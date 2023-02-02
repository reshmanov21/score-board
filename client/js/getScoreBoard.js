

function getAllScorersData() {
	$.ajax({
		url: 'http://localhost:5000/getTopScores',
		dataType: 'json',
		type:'GET',
		cors: true ,
		success: function(data) {
		var rows = '<tr><th>ID</th><th>Name</th><th>Score</th><th>Country</th></tr>';
		for (var i = 0; i < 5; i++) {
			rows += '<tr>';
            rows += '<td>' + data[i].id + '</td>';
			rows += '<td>' + data[i].name + '</td>';
			rows += '<td>' + data[i].score + '</td>';
			rows += '<td>' + data[i].country + '</td>';
			rows += '</tr>';
		}
		document.getElementById('table').innerHTML = rows;
	}
});
}

function getMaleScorersData() {
	$.ajax({
		url: 'http://localhost:5000/getMaleTopScores',
		dataType: 'json',
		type:'GET',
		cors: true ,
		success: function(data) {
		var rows = '<tr><th>ID</th><th>Name</th><th>Score</th><th>Country</th></tr>';
		for (var i = 0; i < 5; i++) {
			rows += '<tr>';
            rows += '<td>' + data[i].id + '</td>';
			rows += '<td>' + data[i].name + '</td>';
			rows += '<td>' + data[i].score + '</td>';
			rows += '<td>' + data[i].country + '</td>';
			rows += '</tr>';
		}
		document.getElementById('table').innerHTML = rows;
	}
});
}

function getFemaleScorersData() {
	$.ajax({
		url: 'http://localhost:5000/getFemaleTopScores',
		dataType: 'json',
		type:'GET',
		cors: true ,
		success: function(data) {
		var rows = '<tr><th>ID</th><th>Name</th><th>Score</th><th>Country</th></tr>';
		for (var i = 0; i < 5; i++) {
			rows += '<tr>';
            rows += '<td>' + data[i].id + '</td>';
			rows += '<td>' + data[i].name + '</td>';
			rows += '<td>' + data[i].score + '</td>';
			rows += '<td>' + data[i].country + '</td>';
			rows += '</tr>';
		}
		document.getElementById('table').innerHTML = rows;
	}
});
	
}