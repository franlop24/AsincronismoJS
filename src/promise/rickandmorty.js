const fetchData = require('../utils/fetchData');
const urlAPI = "https://rickandmortyapi.com/api/character/";

fetchData(urlAPI)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${urlAPI}${data.results[0].id}`);
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch( err => console.log(err));