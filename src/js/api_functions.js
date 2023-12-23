
function createWeatherData(response_1) {

    let today = {
        name: response_1.location.name,
        country: response_1.location.country,
        temp_f: response_1.current.temp_f,
        temp_c: response_1.current.temp_c,
        feelslike_c: response_1.current.feelslike_c,
        feelslike_f: response_1.current.feelslike_f,
        windspeed: response_1.current.wind_mph,
        humidity: response_1.current.humidity,
        is_day: response_1.current.is_day,
    };
    
    let forecast = {
        day1: {
            avgTemp: response_1.forecast.forecastday[0].day.avgtemp_f,
            minTemp_c: response_1.forecast.forecastday[0].day.mintemp_c,
            minTemp_f: response_1.forecast.forecastday[0].day.mintemp_f,
            maxTemp_c: response_1.forecast.forecastday[0].day.maxtemp_c,
            maxTemp_f: response_1.forecast.forecastday[0].day.maxtemp_f,
            code: response_1.forecast.forecastday[0].day.condition.code
        },

        day2: {
            avgTemp: response_1.forecast.forecastday[1].day.avgtemp_f,
            minTemp_c: response_1.forecast.forecastday[1].day.mintemp_c,
            minTemp_f: response_1.forecast.forecastday[1].day.mintemp_f,
            maxTemp_c: response_1.forecast.forecastday[1].day.maxtemp_c,
            maxTemp_f: response_1.forecast.forecastday[1].day.maxtemp_f,
            code: response_1.forecast.forecastday[1].day.condition.code
        },

        day3: {
            avgTemp: response_1.forecast.forecastday[2].day.avgtemp_f,
            minTemp_c: response_1.forecast.forecastday[2].day.mintemp_c,
            minTemp_f: response_1.forecast.forecastday[2].day.mintemp_f,
            maxTemp_c: response_1.forecast.forecastday[2].day.maxtemp_c,
            maxTemp_f: response_1.forecast.forecastday[2].day.maxtemp_f,
            code: response_1.forecast.forecastday[2].day.condition.code
        }
    }

    return {
        todayWeather: today,
        forecastWeather: forecast,
    };
}





async function loadWeatherData(API_KEY, loc) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${loc}&days=3`, { mode: 'cors' });
        return await response.json();
    } catch (response_1) {
        alert('Please Enter a Valid City Name or Zip Code');
    }
    
}

export {
    loadWeatherData,
    createWeatherData
}