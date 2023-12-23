


function loadWeatherData(API_KEY, loc) {
    return fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${loc}&days=3`, {mode: 'cors'})
        .then(function(response) {
            return response.json()
        }).then(function(response) {
            //grab info from object
            let today = {
                name: response.location.name,
            }
            return today;
        }).catch(function(response) {
            alert('Please Enter a Valid City or Zip Code')
        })
}



export {
    loadWeatherData,
}