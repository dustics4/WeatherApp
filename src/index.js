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

function setCustomeWeather(value){
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

        
        weatherCondition.textContent = `Condition : ${data.current.condition.text}`;
        weatherLocation.textContent = `Weather in ${data.location.name}, ${data.location.country}`
        weatherDegrees.textContent = `${data.current.temp_c} °C`
        weatherFeelsLike.textContent = `Feels like: ${data.current.feelslike_c} °C`
        weatherWindMph.textContent = `Wind : ${data.current.wind_kph} Km/h`
        weatherHumidity.textContent = `Humidity : ${data.current.humidity}`
        weatherIcon.src = data.current.condition.icon;
    }).catch((err) => {
        alert(err);
    })
}

submitButton.addEventListener("click" ,  (e) => {
    e.preventDefault();
    if(searchInput.value === "")return;
    setCustomeWeather(searchInput.value);
    clearSearch();
})

document.addEventListener("DOMContentLoaded" , () =>{
    setCustomeWeather("London");
})
