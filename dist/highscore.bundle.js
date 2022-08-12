/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["highscore"],{

/***/ "./src/modules/highscore.js":
/*!**********************************!*\
  !*** ./src/modules/highscore.js ***!
  \**********************************/
/***/ (() => {

eval("const highScoresList = document.getElementById('highScoresList');\nconst highScores = JSON.parse(localStorage.getItem('highScores')) || [];\n\nhighScoresList.innerHTML = highScores\n  .map((score) => `<li class=\"high-score\">${score.name} - ${score.score}</li>`)\n  .join('');\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/highscore.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/highscore.js"));
/******/ }
]);