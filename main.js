/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//Go through what you need, create a checklist\n//When working with API's go through the previous project you made to display gifs\n//explain how you can use smaller functions like the below to make it easer and more understandable code\n//Learn how to implement weather API in to your code\n//research functions how to use them again\n\n//need to get some icons\n//start with simple\n// then move to harder functions\n// as an easy exercise to start\n// create a function, that can take a location and return weather data from that location\n//console log the information\n\n\n//learn how to implement loading, at the end.\n\n\n//functions like\n//store objects like weather location etc\n//create a function for searching\n//take users input for search\n//use async await.\n\n\n// <------------ Fetching API request ----------------->//\n\nconst generalInfoDiv = document.querySelector('.general-info');\n\nfetch('http://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=London&aqi=no')\n    .then(function(response){\n       return response.json();\n    })\n    .then(function(data){\n        console.log(data);\n    })\n    .catch(function(err){\n        console.error(\"Error fetching weather data\" , err);\n})\n\n\nasync function getWeatherData(city){\n    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=${city}&aqi=no`, {mode: \"cors\"});\n    if(response.ok){\n        const weatherData = await response.json();\n        return weatherData;\n    }else{\n        return Promise.reject(\"Enter a valid location\");\n    }\n}\n\nfunction capitalizeFirstLetter(str){\n    return str.toLowerCase().replace(/\\b\\w/g, function(char){\n        return char.toUpperCase();\n    })\n}\n\nfunction setCustomeWeather(value){\n    const weatherData = getWeatherData(capitalizeFirstLetter(value));\n    weatherData.then((data) => {\n        const searchResult = document.querySelector('#main-weather-display');\n        searchResult.classList.add(\"active\");\n\n        const weatherLocation = document.querySelector('.location');\n        const weatherCondition = document.querySelector('.condition');\n        const weatherDegrees = document.querySelector('.degrees');\n        const weatherFeelsLike = document.querySelector('.feels-like');\n        const weatherWindMph = document.querySelector('.wind-mph');\n        const weatherHumidity = document.querySelector('.humidity');\n\n        \n        weatherCondition.textContent = `Condition : ${data.current.condition.text}`;\n        weatherLocation.textContent = `Weather in ${data.location.name}, ${data.location.country}`\n        weatherDegrees.textContent = `${data.current.temp_c} °C`\n        weatherFeelsLike.textContent = `Feels like: ${data.current.feelslike_c} °C`\n        weatherWindMph.textContent = `Wind : ${data.current.wind_kph} Km/h`\n        weatherHumidity.textContent = `Humidity : ${data.current.humidity}`\n    }).catch((err) => {\n        alert(err);\n    })\n}\n\n\nasync function fetchWeather(city){\n    const apiUrl = await `http://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=${city}&aqi=no`;\n\n    fetch(apiUrl)\n    .then(response => response.json())\n    .then(data => {\n        if(data.success != undefined && data.success === false){\n            throw new Error(data.error.info)\n        }\n\n        const searchResult = document.querySelector('#main-weather-display');\n        searchResult.classList.add(\"active\");\n\n        const weatherLocation = document.querySelector('.location');\n        const weatherCondition = document.querySelector('.condition');\n        const weatherDegrees = document.querySelector('.degrees');\n        const weatherFeelsLike = document.querySelector('.feels-like');\n        const weatherWindMph = document.querySelector('.wind-mph');\n        const weatherHumidity = document.querySelector('.humidity');\n\n        \n        weatherCondition.textContent = `Condition : ${data.current.condition.text}`;\n        weatherLocation.textContent = `Weather in ${data.location.name}, ${data.location.country}`\n        weatherDegrees.textContent = `${data.current.temp_c} °C`\n        weatherFeelsLike.textContent = `Feels like: ${data.current.feelslike_c} °C`\n        weatherWindMph.textContent = `Wind : ${data.current.wind_kph} Km/h`\n        weatherHumidity.textContent = `Humidity : ${data.current.humidity}`\n    })\n    .catch(error => {\n        console.error('Error fetching weather data:', error);\n    });\n   \n}\n\n\n\nlet searchInput = document.querySelector('.searchBar');\nlet submitButton = document.querySelector('.submit-btn');\n\n\n\nsubmitButton.addEventListener(\"click\" ,  () => {\n    //if(searchInput.value === \"\")return;\n    console.log(\"hello world\");\n    setCustomeWeather(searchInput.value);\n})\n\ndocument.addEventListener(\"DOMContentLoaded\" , () =>{\n    setCustomeWeather(\"London\");\n})\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;