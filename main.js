/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loader */ \"./src/modules/loader.js\");\n\nconst generalInfoDiv = document.querySelector('.general-info');\nconst searchInput = document.querySelector('.searchBar');\nconst submitButton = document.querySelector('.submit-btn');\nconst weatherIcon = document.querySelector('.image');\nconst toggleButton = document.getElementById('toggleButton');\nconst checkbox = document.getElementById('checkbox');\n\nlet isCelsius = true;\n\nfetch('https://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=London&aqi=no')\n    .then(function(response){\n       return response.json();\n    })\n    .then(function(data){\n        console.log(data);\n    })\n    .catch(function(err){\n        console.error(\"Error fetching weather data\" , err);\n})\n\n\nasync function getWeatherData(city){\n    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=8ee0f6a8d54b4bf7aae205606241905&q=${city}&aqi=no`, {mode: \"cors\"});\n    if(response.ok){\n        const weatherData = await response.json();\n        return weatherData;\n    }else{\n        return Promise.reject(\"Enter a valid location\");\n    }\n}\n\nfunction capitalizeFirstLetter(str){\n    return str.toLowerCase().replace(/\\b\\w/g, function(char){\n        return char.toUpperCase();\n    })\n}\n\nfunction clearSearch(){\n    searchInput.value = \"\";\n}\n\nfunction delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nfunction setCustomWeather(value){\n    const loader = new _modules_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    const MINIMUM_LOADING_TIME = 900; // minimum loading time in milliseconds\n    const startTime = Date.now();\n\n    getWeatherData(capitalizeFirstLetter(value))\n        .then(weatherData => {\n            const elapsedTime = Date.now() - startTime;\n            if (elapsedTime < MINIMUM_LOADING_TIME) {\n                return delay(MINIMUM_LOADING_TIME - elapsedTime).then(() => weatherData);\n            }\n            return weatherData;\n        })\n        .then(weatherData => {\n            const searchResult = document.querySelector('#main-weather-display');\n            searchResult.classList.add(\"active\");\n\n            const weatherLocation = document.querySelector('.location');\n            const weatherCondition = document.querySelector('.condition');\n            const weatherDegrees = document.querySelector('.degrees');\n            const weatherFeelsLike = document.querySelector('.feels-like');\n            const weatherWindMph = document.querySelector('.wind-mph');\n            const weatherHumidity = document.querySelector('.humidity');\n            const currentCondition = weatherData.current;\n\n            weatherCondition.textContent = `${weatherData.current.condition.text}`;\n            weatherLocation.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;\n\n            checkedBoxFuction(currentCondition);\n            weatherWindMph.textContent = `Wind : ${weatherData.current.wind_kph} Km/h`;\n            weatherHumidity.textContent = `Humidity : ${weatherData.current.humidity}`;\n            weatherIcon.src = weatherData.current.condition.icon;\n        })\n        .catch(err => {\n            alert(err);\n        })\n        .finally(() => {\n            loader.hide();\n            loader.remove();\n        });\n    \n}\n\nfunction toggleDegrees(){\n    isCelsius = !isCelsius;\n    const currentCondition = JSON.parse(checkbox.getAttribute('data-condition'));\n    checkedBoxFuction(currentCondition);\n}\n\nfunction toggleSwitchEvent(){\n    checkbox.addEventListener(\"change\", (e) =>{\n        e.preventDefault();\n        toggleDegrees();\n    })\n}\n\n\nfunction checkedBoxFuction(obj){\n    const weatherFeelsLike = document.querySelector('.feels-like');\n    const weatherDegrees = document.querySelector('.degrees');\n\n        if(checkbox.checked){\n            console.log(\"Checked\");\n            weatherDegrees.textContent = `${obj.temp_f} °F`\n            weatherFeelsLike.textContent = `Feels like: ${obj.feelslike_f} °F`\n        }else{\n            console.log(\"unchecked\");\n            weatherFeelsLike.textContent = `Feels like: ${obj.feelslike_c} °C`\n            weatherDegrees.textContent = `${obj.temp_c} °C`\n        }\n        checkbox.setAttribute('data-condition', JSON.stringify(obj));\n}\n\n\nsubmitButton.addEventListener(\"click\" ,  (e) => {\n    e.preventDefault();\n    if(searchInput.value === \"\")return;\n    setCustomWeather(searchInput.value);\n    clearSearch();\n})\n\ndocument.addEventListener(\"DOMContentLoaded\" , () =>{\n    setCustomWeather(\"London\");\n    toggleSwitchEvent();\n})\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Loader)\n/* harmony export */ });\nclass Loader {\n    constructor() {\n        this.loader = this.createLoader();\n    }\n\n    createLoader() {\n        const loaderDiv = document.createElement('div');\n        loaderDiv.className = 'loader';\n        document.body.appendChild(loaderDiv);\n        return loaderDiv;\n    }\n\n    show() {\n        const loader = document.querySelector('.loader');\n        loader.classList.remove(\"loader-hidden\");\n    }\n\n    hide() {\n        const loader = document.querySelector('.loader');\n        loader.classList.add(\"loader-hidden\");\n    }\n\n    remove() {\n        this.loader.remove();\n    }\n}\n\n//# sourceURL=webpack://weather-app/./src/modules/loader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;