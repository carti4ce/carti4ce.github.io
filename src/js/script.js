// 'http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}'
// API KEY: 1f36615869f94a8f85264242232212

import { createWeatherData, loadWeatherData } from "./api_functions"

const API_KEY = '1f36615869f94a8f85264242232212'

const CITY_NAME = document.querySelector('#city')
const TIME = document.querySelector('#time')
const CONDITION_TEXT = document.querySelector('#conditiontext')
const MAIN_ICON = document.querySelector('#iconimg')
const MAIN_TEMP = document.querySelector('#todaytemp')
const FEELS_LIKE = document.querySelector('#feelslike')
const HUMIDITY = document.querySelector('#humidity')
const WIND_SPEED = document.querySelector('#windspeed')
const COUNTRY = document.querySelector('#country')

let city = 'denver'
let tempUnit = ' °F'

let weatherData;

let todayWeather = {
    name: CITY_NAME,
    country: COUNTRY,
    time: TIME,
    condition: CONDITION_TEXT,
    icon: MAIN_ICON,
    temp: MAIN_TEMP,
    feelsLike: FEELS_LIKE,
    humidity: HUMIDITY,
    windSpeed: WIND_SPEED
}

const SEARCH_BUTTON = document.querySelector('#searchbutton')
const SEARCH_BAR = document.querySelector('#input')

SEARCH_BUTTON.addEventListener('click', async () => {
    city = SEARCH_BAR.value
    SEARCH_BAR.value = '';
    let rawData = await loadWeatherData(API_KEY, city);
    weatherData = createWeatherData(rawData);
    console.log(weatherData);
    updateText(weatherData);
});

async function startUp() {
    let rawData = await loadWeatherData(API_KEY, city);
    let startData = createWeatherData(rawData);
    updateText(startData);
}

function updateText(weatherData) {
    todayWeather.name.textContent = weatherData.todayWeather.name;
    todayWeather.country.textContent = weatherData.todayWeather.country;
    todayWeather.time.textContent = weatherData.todayWeather.time;
    todayWeather.condition.textContent = weatherData.todayWeather.condition;
    todayWeather.icon.src = weatherData.todayWeather.icon;
    todayWeather.temp.textContent = weatherData.todayWeather.temp_f + tempUnit;
    todayWeather.feelsLike.textContent = 'Feels Like: ' + weatherData.todayWeather.feelslike_f + tempUnit;
    todayWeather.humidity.textContent = 'Humidity: ' + weatherData.todayWeather.humidity + ' %';
    todayWeather.windSpeed.textContent = 'Wind Speed: ' + weatherData.todayWeather.windspeed + ' mph';
}


startUp();