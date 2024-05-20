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
//getweather data
//processData
//display Data
//fetch weather
//display error
//function to reset . resets form


// <------------ Fetching API request ----------------->//

const generalInfoDiv = document.querySelector('.general-info');

fetch('https://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=london', {mode: 'cors'})
    .then(function(response){
        console.log(response.json);
    })
    .then(function(response){
        console.log(response);
    })

function fetchWeather(city, country){
    
    const apiKey = "8ee0f6a8d54b4bf7aae205606241905";

    const apiUrl = `https://api.weatherapi.com/v1/current.json?${apiKey}&q=${city}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if(data.success != undefined && data.success === false){
            throw new Error(data.error.info)
        }
        const temperature = data.current.temperature;
        const weatherDescription = data.current.weather_descriptions[0];
        const weatherElement = document.getElementById('weather');
        const generalInfoDiv = document.querySelector('.general-info');


        weatherElement.textContent = `Weather in ${city}, ${country}: ${weatherDescription}, Temperature: ${temperature}°C`
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
   
}

fetchWeather("london", "united kingdom");