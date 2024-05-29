//Go through what you need, create a checklist
//When working with API's go through the previous project you made to display gifs
//explain how you can use smaller functions like the below to make it easer and more understandable code
//Learn how to implement weather API in to your code
//research functions how to use them again

//need to get some icons
//start with simple
// then move to harder functions
// as an easy exercise to start
// create a function, that can take a location and return weather data from that location
//console log the information


//learn how to implement loading, at the end.


//functions like
//store objects like weather location etc
//create a function for searching
//take users input for search
//use async await.


// <------------ Fetching API request ----------------->//

const generalInfoDiv = document.querySelector('.general-info');
const searchInput = document.querySelector('.searchBar');
const submitButton = document.querySelector('.submit-btn');
const weatherIcon = document.querySelector('.image');
const toggleButton = document.getElementById('toggleButton');
const checkbox = document.getElementById('checkbox');

let isCelsius = true;

fetch('http://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=London&aqi=no')
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
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=${city}&aqi=no`, {mode: "cors"});
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

function setCustomWeather(value){
    const weatherData = getWeatherData(capitalizeFirstLetter(value));
    weatherData.then((data) => {
        const searchResult = document.querySelector('#main-weather-display');
        searchResult.classList.add("active");

        const weatherLocation = document.querySelector('.location');
        const weatherCondition = document.querySelector('.condition');
        const weatherDegrees = document.querySelector('.degrees');
        const weatherFeelsLike = document.querySelector('.feels-like');
        const weatherWindMph = document.querySelector('.wind-mph');
        const weatherHumidity = document.querySelector('.humidity');
        const currentCondition = data.current;

        
        weatherCondition.textContent = `Condition : ${data.current.condition.text}`;
        weatherLocation.textContent = `Weather in ${data.location.name}, ${data.location.country}`
       
        checkedBoxFuction(currentCondition);
        weatherWindMph.textContent = `Wind : ${data.current.wind_kph} Km/h`
        weatherHumidity.textContent = `Humidity : ${data.current.humidity}`
        weatherIcon.src = data.current.condition.icon;
    }).catch((err) => {
        alert(err);
    })
}

/*function updateWeatherDisplay(obj){
    const weatherFeelsLike = document.querySelector('.feels-like');
    const weatherDegrees = document.querySelector('.degrees');
    toggleButton.classList.add('celsius');

        if (isCelsius) {
            toggleButton.textContent = '°F';
            weatherDegrees.textContent = `${obj.temp_f} °F`
            weatherFeelsLike.textContent = `Feels like: ${obj.feelslike_f} °F`
            toggleButton.classList.add('fahrenheit'); 
            toggleButton.classList.remove('celsius');
        } else {
            toggleButton.textContent = '°C';
            weatherFeelsLike.textContent = `Feels like: ${obj.feelslike_c} °C`
            weatherDegrees.textContent = `${obj.temp_c} °C`
            toggleButton.classList.add('celsius');
            toggleButton.classList.remove('fahrenheit');  
        }
        checkbox.setAttribute('data-condition', JSON.stringify(obj));
}*/

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
