/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["end"],{

/***/ "./src/modules/end.js":
/*!****************************!*\
  !*** ./src/modules/end.js ***!
  \****************************/
/***/ (() => {

eval("const username = document.querySelector('#username');\nconst saveScoreBtn = document.querySelector('#saveScoreBtn');\nconst finalScore = document.querySelector('#finalScore');\nconst mostRecentScore = localStorage.getItem('mostRecentScore');\nfinalScore.innerText = mostRecentScore;\n\nusername.addEventListener('keyup', () => {\n  saveScoreBtn.disabled = !username.value;\n});\n\nconst saveHighScore = (e) => {\n  e.preventDefault();\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/end.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/end.js"));
/******/ }
]);