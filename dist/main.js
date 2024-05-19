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

eval("//Go through what you need, create a checklist\n//When working with API's go through the previous project you made to display gifs\n//explain how you can use smaller functions like the below to make it easer and more understandable code\n//Learn how to implement weather API in to your code\n//research functions how to use them again\n\n//need to get some icons\n//start with simple\n// then move to harder functions\n// as an easy exercise to start\n// create a function, that can take a location and return weather data from that location\n//console log the information\n\n\n//learn how to implement loading, at the end.\n\n\n//functions like\n//getweather data\n//processData\n//display Data\n//fetch weather\n//display error\n//function to reset . resets form\n\n\n// <------------ Fetching API request ----------------->//\n\nconst generalInfoDiv = document.querySelector('.general-info');\n\nfetch('https://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=london', {mode: 'cors'})\n    .then(function(response){\n        console.log(response.json);\n    })\n    .then(function(response){\n        console.log(response);\n    })\n\nfunction fetchWeather(city, country){\n    \n    const apiKey = \"b8dd374dfd494fd880a213332241805\";\n\n    const apiUrl = `http://api.weatherstack.com/current?access_key=8ee0f6a8d54b4bf7aae205606241905&query=${city},${country}`;\n\n    fetch(apiUrl)\n    .then(response => response.json())\n    .then(data => {\n        if(data.success != undefined && data.success === false){\n            throw new Error(data.error.info)\n        }\n        const temperature = data.current.temperature;\n        const weatherDescription = data.current.weather_descriptions[0];\n        const weatherElement = document.getElementById('weather');\n        const generalInfoDiv = document.querySelector('.general-info');\n\n\n        weatherElement.textContent = `Weather in ${city}, ${country}: ${weatherDescription}, Temperature: ${temperature}°C`\n    })\n    .catch(error => {\n        console.error('Error fetching weather data:', error);\n    });\n   \n}\n\nfetchWeather(\"london\", \"united kingdom\");\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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