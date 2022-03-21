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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/contact.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nfunction contact() {\n    console.log('Are you talking to me?');\n\n    const content = document.querySelector('#content');\n\n    const background = document.createElement('div');\n    background.id = 'backgroundContact';\n    background.innerHTML = 'Contact Us Here!';\n    content.appendChild(background);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _assets_hero_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/hero.svg */ \"./src/assets/hero.svg\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/homePage.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nfunction homePage() {\n    console.log('I\\'m home!');\n\n    const content = document.querySelector('#content');\n\n    const background = document.createElement('div');\n    background.id = 'backgroundHome';\n    background.innerHTML = 'Home Page is Here!';\n    content.appendChild(background);\n\n    const heroImg = document.createElement('img');\n    heroImg.id = 'hero';\n    heroImg.src = _assets_hero_svg__WEBPACK_IMPORTED_MODULE_0__;\n    heroImg.alt = 'Pizza';\n    content.appendChild(heroImg);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconsole.log('Hello world!');\nconst content = document.getElementById(\"content\");\n\ncreateNav();\n//homePage(); // console.log's \"I'm home!\" - module works!\n//menu();\n//contact();\n\nfunction createNav() {\n    const navBar = document.createElement('div');\n    navBar.classList.add('header');\n\n    const logo = document.createElement('div');\n    logo.classList.add('logo');\n    logo.textContent = 'Tony\\'s Pizza';\n\n    const nav = document.createElement('div');\n    nav.classList.add('nav');\n\n    const goHome = document.createElement('div');\n    goHome.classList.add('button-nav');\n    goHome.id = 'homeButton';\n    goHome.textContent = 'Home';\n    goHome.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveButton(goHome);\n        (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    const goMenu = document.createElement('div');\n    goMenu.classList.add('button-nav');\n    goMenu.id = 'menuButton';\n    goMenu.textContent = 'Menu';\n    goMenu.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveButton(goMenu);\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    const goContact = document.createElement('div');\n    goContact.classList.add('button-nav');\n    goContact.id = 'contactButton';\n    goContact.textContent = 'Contact';\n    goContact.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveButton(goContact);\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    content.appendChild(navBar);\n    navBar.appendChild(logo);\n    navBar.appendChild(nav);\n    nav.appendChild(goHome);\n    nav.appendChild(goMenu);\n    nav.appendChild(goContact);\n    console.log('Where to?');\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll('.button-nav');\n\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove('active');\n        }\n    });\n\n    button.classList.add('active');\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/menu.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nfunction menu() {\n    console.log('Look at the menu!');\n\n    const content = document.querySelector('#content');\n\n    const background = document.createElement('div');\n    background.id = 'backgroundMenu';\n    background.innerHTML = 'Menu is Here!';\n    content.appendChild(background);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/hero.svg":
/*!*****************************!*\
  !*** ./src/assets/hero.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"df5d11799ec3438f88f0.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/hero.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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