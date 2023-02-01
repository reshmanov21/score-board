const uri = 'https://score-board.onrender.com/getUsers';

const initDetails = {
    method: 'get',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    mode: "no-cors"
}

function getData2() {

    fetch( uri, initDetails )
        .then( response =>
        {
            console.log("&&&&&");
            console.log(response);
			
            if ( response.status !== 200 )
            {
                console.log( 'Looks like there was a problem. Status Code: ' +
                response.status );
                return;
            }

            console.log( response.headers.get( "Content-Type" ) );
			document.getElementById('scoreboard').innerHTML=response.json();
            return response.json();
        })
    .then( myJson =>
    {
        console.log( JSON.stringify( myJson ) );
        } )
    .catch( err =>
    {
            console.log( 'Fetch Error :-S', err );
    });

}

async function getData1() {
	
	const response = await fetch(uri);
	console.log("$$$");
	console.log(response);
	var data = await response.json();
	console.log(data);
}

function getAllScorersData() {
	$.ajax({
		url: 'http://localhost:5000/getTopScores',
		dataType: 'json',
		type:'GET',
		cors: true ,
		success: function(data) {
		console.log(data);
		var rows = '';
		for (var i = 0; i < 5; i++) {
			rows += '<tr>';
            rows += '<td>' + data[i].id + '</td>';
			rows += '<td>' + data[i].name + '</td>';
			rows += '<td>' + data[i].score + '</td>';
			rows += '<td>' + data[i].country + '</td>';
			rows += '</tr>';
		}
		document.getElementById('table').innerHTML += rows;
	}
});
}

function getMaleScorersData() {
	$.ajax({
		url: 'http://localhost:5000/getTopScores',
		dataType: 'json',
		type:'GET',
		cors: true ,
		success: function(data) {
		console.log(data);
		var rows = '';
		for (var i = 0; i < data.length; i++) {
			rows += '<tr>';
            rows += '<td>' + data[i].id + '</td>';
			rows += '<td>' + data[i].name + '</td>';
			rows += '<td>' + data[i].score + '</td>';
			rows += '<td>' + data[i].country + '</td>';
			rows += '</tr>';
		}
		document.getElementById('table').innerHTML += rows;
	}
});
}

function getFemaleScorersData() {
	$.ajax({
		url: 'http://localhost:5000/getTopScores',
		dataType: 'json',
		type:'GET',
		cors: true ,
		success: function(data) {
		console.log(data);
		var rows = '';
		for (var i = 0; i < data.length; i++) {
			rows += '<tr>';
            rows += '<td>' + data[i].id + '</td>';
			rows += '<td>' + data[i].name + '</td>';
			rows += '<td>' + data[i].score + '</td>';
			rows += '<td>' + data[i].country + '</td>';
			rows += '</tr>';
		}
		document.getElementById('table').innerHTML += rows;
	}
});
	
}