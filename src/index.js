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

function fetchWeather(city){
    
    const apiKey = "8ee0f6a8d54b4bf7aae205606241905";

    const apiUrl = `https://api.weatherapi.com/v1/current.json?${apiKey}&q=${city}`;

    fetch("http://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=London&aqi=no")
    .then(response => response.json())
    .then(data => {
        if(data.success != undefined && data.success === false){
            throw new Error(data.error.info)
        }
        
        const weatherElement = document.getElementById('location');
        const generalInfoDiv = document.querySelector('.general-info');
        console.log(data.location.name);

        weatherElement.textContent = `Weather in ${data.location.name},   °C`
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
   
}

fetchWeather("london");