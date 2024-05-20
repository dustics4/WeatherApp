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

eval("//Go through what you need, create a checklist\n//When working with API's go through the previous project you made to display gifs\n//explain how you can use smaller functions like the below to make it easer and more understandable code\n//Learn how to implement weather API in to your code\n//research functions how to use them again\n\n//need to get some icons\n//start with simple\n// then move to harder functions\n// as an easy exercise to start\n// create a function, that can take a location and return weather data from that location\n//console log the information\n\n\n//learn how to implement loading, at the end.\n\n\n//functions like\n//getweather data\n//processData\n//display Data\n//fetch weather\n//display error\n//function to reset . resets form\n\n\n// <------------ Fetching API request ----------------->//\n\nconst generalInfoDiv = document.querySelector('.general-info');\n\nfetch('http://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=London&aqi=no')\n    .then(function(response){\n       return response.json();\n    })\n    .then(function(data){\n        console.log(data);\n    })\n    .catch(function(err){\n        console.error(\"Error fetching weather data\" , err);\n    })\n\nfunction fetchWeather(city){\n    \n    const apiKey = \"8ee0f6a8d54b4bf7aae205606241905\";\n\n    const apiUrl = `https://api.weatherapi.com/v1/current.json?${apiKey}&q=${city}`;\n\n    fetch(\"http://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=London&aqi=no\")\n    .then(response => response.json())\n    .then(data => {\n        if(data.success != undefined && data.success === false){\n            throw new Error(data.error.info)\n        }\n        \n        const weatherElement = document.getElementById('location');\n        const generalInfoDiv = document.querySelector('.general-info');\n        console.log(data.location.name);\n\n        weatherElement.textContent = `Weather in ${data.location.name},   °C`\n    })\n    .catch(error => {\n        console.error('Error fetching weather data:', error);\n    });\n   \n}\n\nfetchWeather(\"london\");\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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