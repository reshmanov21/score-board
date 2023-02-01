const uri = 'https://randomuser.me/api/?results=5';

const initDetails = {
    method: 'get',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    mode: "cors"
}

function getData() {

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
                }
                )
                .then( myJson =>
                {
                    console.log( JSON.stringify( myJson ) );
                } )
                .catch( err =>
                {
                    console.log( 'Fetch Error :-S', err );
                } );

}