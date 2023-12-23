// 'http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}'
// API KEY: 1f36615869f94a8f85264242232212

import { createWeatherData, loadWeatherData } from "./api_functions"

const API_KEY = '1f36615869f94a8f85264242232212'

const CITY_NAME = document.querySelector('#city')
const MAIN_ICON = document.querySelector('#mainicon')
const MAIN_TEMP = document.querySelector('#todaytemp')
const TODAY_HILO = document.querySelector('#todayhighlow')
const FEELS_LIKE = document.querySelector('#feelslike')
const HUMIDITY = document.querySelector('#humidity')
const WIND_SPEED = document.querySelector('#windspeed')

let weatherData;

let todayWeather = {
    name: CITY_NAME,
    icon: MAIN_ICON,
    temp: MAIN_TEMP,
    hilo: TODAY_HILO,
    feelsLike: FEELS_LIKE,
    humidity: HUMIDITY,
    windSpeed: WIND_SPEED
}

let city = 'denver'
const SEARCH_BUTTON = document.querySelector('#searchbutton')
const SEARCH_BAR = document.querySelector('#input')

SEARCH_BUTTON.addEventListener('click', async () => {
    city = SEARCH_BAR.value
    SEARCH_BAR.value = '';
    let rawData = await loadWeatherData(API_KEY, city);
    weatherData = createWeatherData(rawData);
    console.log(weatherData);
});
