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

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _erase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erase-page */ \"./src/erase-page.js\");\n\n\nconst contactPage = () => {\n    (0,_erase_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    \n    const page = document.querySelector('#page');\n    const header = document.createElement('h1');\n    \n\n    header.textContent = 'Contact Info';\n\n    page.appendChild(header);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact-page.js?");

/***/ }),

/***/ "./src/erase-page.js":
/*!***************************!*\
  !*** ./src/erase-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst erasePage = () => {\n    const page = document.querySelector('#page');\n    while(page.firstChild){\n        page.removeChild(page.firstChild);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (erasePage);\n\n//# sourceURL=webpack://restaurant-page/./src/erase-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _erase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erase-page */ \"./src/erase-page.js\");\n\n\nconst homePage = () => {\n    (0,_erase_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    \n    const pageDiv = document.querySelector('#page');\n    const header = document.createElement('h1');\n    const image = document.createElement('img');\n    const lorem = document.createElement('p');\n\n    header.textContent = 'Awesome Sauce';\n    \n    image.classList.add('ribs');\n    image.setAttribute('src', '../src/ribs.jpeg');\n    image.setAttribute('alt', 'some saucy ribs');\n    \n    lorem.classList.add('welcome');\n    lorem.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n\n    pageDiv.appendChild(header);\n    pageDiv.appendChild(image);\n    pageDiv.appendChild(lorem);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page */ \"./src/load-page.js\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page */ \"./src/contact-page.js\");\n\n\n\n\n\n\n(0,_load_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst homeBtn = document.querySelector('#home');\n homeBtn.addEventListener('click', function () {\n    (0,_home_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n });\n\nconst menuBtn = document.querySelector('#menu');\nmenuBtn.addEventListener('click', function () {\n    (0,_menu_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\nconst contactBtn = document.querySelector('#contact');\ncontactBtn.addEventListener('click', function () {\n    (0,_contact_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadPage = () => {\n    const content = document.querySelector('#content');\n    const pageDiv = document.createElement('div');\n    const header = document.createElement('h1');\n    const image = document.createElement('img');\n    const lorem = document.createElement('p');\n    const buttons = document.createElement('div');\n    const homeBtn = document.createElement('button');\n    const menuBtn = document.createElement('button');\n    const contactBtn = document.createElement('button');\n    \n    pageDiv.setAttribute('id', 'page');\n\n    header.textContent = 'Awesome Sauce';\n    \n    image.classList.add('ribs');\n    image.setAttribute('src', '../src/ribs.jpeg');\n    image.setAttribute('alt', 'some saucy ribs');\n    \n    lorem.classList.add('welcome');\n    lorem.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n\n    buttons.setAttribute('id', 'buttons');\n\n    homeBtn.setAttribute('id', 'home');\n    homeBtn.textContent = 'Home';\n\n    menuBtn.setAttribute('id', 'menu');\n    menuBtn.textContent = 'Menu';\n    \n    contactBtn.setAttribute('id', 'contact');\n    contactBtn.textContent = 'Contact';\n\n    buttons.appendChild(homeBtn);\n    buttons.appendChild(menuBtn);\n    buttons.appendChild(contactBtn);\n    pageDiv.appendChild(header);\n    pageDiv.appendChild(image);\n    pageDiv.appendChild(lorem);\n    content.appendChild(pageDiv);\n    content.appendChild(buttons);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/load-page.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _erase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erase-page */ \"./src/erase-page.js\");\n\n\nconst menuPage = () => {\n    (0,_erase_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    const page = document.querySelector('#page');\n    const header = document.createElement('h1');\n    \n\n    header.textContent = 'Saucy Menu ;)';\n\n    page.appendChild(header);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu-page.js?");

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