import Loader from "./modules/loader";
const generalInfoDiv = document.querySelector('.general-info');
const searchInput = document.querySelector('.searchBar');
const submitButton = document.querySelector('.submit-btn');
const weatherIcon = document.querySelector('.image');
const toggleButton = document.getElementById('toggleButton');
const checkbox = document.getElementById('checkbox');

let isCelsius = true;

fetch('https://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=London&aqi=no')
    .then(function(response){
       return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.error("Error fetching weather data" , err);
})


async function getWeatherData(city){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=${city}&aqi=no`, {mode: "cors"});
    if(response.ok){
        const weatherData = await response.json();
        return weatherData;
    }else{
        return Promise.reject("Enter a valid location");
    }
}

function capitalizeFirstLetter(str){
    return str.toLowerCase().replace(/\b\w/g, function(char){
        return char.toUpperCase();
    })
}

function clearSearch(){
    searchInput.value = "";
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setCustomWeather(value){
    const loader = new Loader();
    const MINIMUM_LOADING_TIME = 900; // minimum loading time in milliseconds
    const startTime = Date.now();

    getWeatherData(capitalizeFirstLetter(value))
        .then(weatherData => {
            const elapsedTime = Date.now() - startTime;
            if (elapsedTime < MINIMUM_LOADING_TIME) {
                return delay(MINIMUM_LOADING_TIME - elapsedTime).then(() => weatherData);
            }
            return weatherData;
        })
        .then(weatherData => {
            const searchResult = document.querySelector('#main-weather-display');
            searchResult.classList.add("active");

            const weatherLocation = document.querySelector('.location');
            const weatherCondition = document.querySelector('.condition');
            const weatherDegrees = document.querySelector('.degrees');
            const weatherFeelsLike = document.querySelector('.feels-like');
            const weatherWindMph = document.querySelector('.wind-mph');
            const weatherHumidity = document.querySelector('.humidity');
            const currentCondition = weatherData.current;

            weatherCondition.textContent = `${weatherData.current.condition.text}`;
            weatherLocation.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;

            checkedBoxFuction(currentCondition);
            weatherWindMph.textContent = `Wind : ${weatherData.current.wind_kph} Km/h`;
            weatherHumidity.textContent = `Humidity : ${weatherData.current.humidity}`;
            weatherIcon.src = weatherData.current.condition.icon;
        })
        .catch(err => {
            alert(err);
        })
        .finally(() => {
            loader.hide();
            loader.remove();
        });
    
}

function toggleDegrees(){
    isCelsius = !isCelsius;
    const currentCondition = JSON.parse(checkbox.getAttribute('data-condition'));
    checkedBoxFuction(currentCondition);
}

function toggleSwitchEvent(){
    checkbox.addEventListener("change", (e) =>{
        e.preventDefault();
        toggleDegrees();
    })
}


function checkedBoxFuction(obj){
    const weatherFeelsLike = document.querySelector('.feels-like');
    const weatherDegrees = document.querySelector('.degrees');

        if(checkbox.checked){
            console.log("Checked");
            weatherDegrees.textContent = `${obj.temp_f} °F`
            weatherFeelsLike.textContent = `Feels like: ${obj.feelslike_f} °F`
        }else{
            console.log("unchecked");
            weatherFeelsLike.textContent = `Feels like: ${obj.feelslike_c} °C`
            weatherDegrees.textContent = `${obj.temp_c} °C`
        }
        checkbox.setAttribute('data-condition', JSON.stringify(obj));
}


submitButton.addEventListener("click" ,  (e) => {
    e.preventDefault();
    if(searchInput.value === "")return;
    setCustomWeather(searchInput.value);
    clearSearch();
})

document.addEventListener("DOMContentLoaded" , () =>{
    setCustomWeather("London");
    toggleSwitchEvent();
})
