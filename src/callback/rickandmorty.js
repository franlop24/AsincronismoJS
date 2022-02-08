let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const urlBase = "https://rickandmortyapi.com/api/character/";

// readyState 	Holds the status of the XMLHttpRequest.
            // 0: request not initialized
            // 1: server connection established
            // 2: request received
            // 3: processing request
            // 4: request finished and response is ready

// status 	200: "OK"
        // 403: "Forbidden"
        // 404: "Page not found"

function fetchData(urlAPI, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = Error('Error ' + urlAPI);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

fetchData(urlBase, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(urlBase + data1.results[0].id, function (error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});