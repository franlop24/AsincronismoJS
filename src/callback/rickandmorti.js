let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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