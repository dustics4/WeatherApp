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

async function fetchWeather(city){
    
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=${city}&aqi=no`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if(data.success != undefined && data.success === false){
            throw new Error(data.error.info)
        }
        
        const weatherLocation = document.querySelector('.location');
        const weatherCondition = document.querySelector('.condition');
        const weatherDegrees = document.querySelector('.degrees');
        console.log(data.location.name);
        
        weatherCondition.textContent = `Condition : ${data.current.condition.text}`;
        weatherLocation.textContent = `Weather in ${data.location.name}, ${data.location.country}`
        weatherDegrees.textContent = `${data.current.temp_c} °C`
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
   
}

fetchWeather("London");