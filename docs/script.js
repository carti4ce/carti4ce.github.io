// 'http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}'
// API KEY: 1f36615869f94a8f85264242232212

const API_KEY = '1f36615869f94a8f85264242232212'
let city = 'denver'

fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`, {
    mode: 'cors'
}).then(function(response) {
    return response.json()
}).then(function(response) {
    console.log(response.location.name)
}).catch(function(response) {
    console.log(response)
});