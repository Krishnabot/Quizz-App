"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["game"],{

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\n/* eslint-disable no-use-before-define */\nconst question = document.getElementById(\"question\");\nconst choices = Array.from(document.getElementsByClassName(\"choice-text\"));\nconst progressText = document.getElementById(\"progressText\");\nconst scoreText = document.getElementById(\"score\");\nconst progressBarFull = document.getElementById(\"progressBarFull\");\nlet currentQuestion = {};\nlet acceptingAnswers = false;\nlet score = 0;\nlet questionCounter = 0;\nlet availableQuesions = [];\n\nconst questions = [\n  {\n    question: \"Inside which HTML element do we put the JavaScript??\",\n    choice1: \"<script>\",\n    choice2: \"<javascript>\",\n    choice3: \"<js>\",\n    choice4: \"<scripting>\",\n    answer: 1,\n  },\n  {\n    question:\n      \"What is the correct syntax for referring to an external script called 'xxx.js'?\",\n    choice1: \"<script href='xxx.js'>\",\n    choice2: \"<script name='xxx.js'>\",\n    choice3: \"<script src='xxx.js'>\",\n    choice4: \"<script file='xxx.js'>\",\n    answer: 3,\n  },\n  {\n    question: \" How do you write 'Hello World' in an alert box?\",\n    choice1: \"msgBox('Hello World');\",\n    choice2: \"alertBox('Hello World');\",\n    choice3: \"msg('Hello World');\",\n    choice4: \"alert('Hello World');\",\n    answer: 4,\n  },\n];\n\n// CONSTANTS\nconst CORRECT_BONUS = 10;\nconst MAX_QUESTIONS = 3;\n\nconst startGame = () => {\n  questionCounter = 0;\n  score = 0;\n  availableQuesions = [...questions];\n  getNewQuestion();\n};\n\nconst getNewQuestion = () => {\n  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {\n    localStorage.setItem(\"mostRecentScore\", score);\n    // go to the end page\n    return window.location.assign(\"/end.html\");\n  }\n  questionCounter++;\n  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;\n  // Update the progress bar\n  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;\n\n  const questionIndex = Math.floor(Math.random() * availableQuesions.length);\n  currentQuestion = availableQuesions[questionIndex];\n  question.innerText = currentQuestion.question;\n\n  choices.forEach((choice) => {\n    const { number } = choice.dataset;\n    choice.innerText = currentQuestion[`choice${number}`];\n  });\n\n  availableQuesions.splice(questionIndex, 1);\n  acceptingAnswers = true;\n};\n\nchoices.forEach((choice) => {\n  choice.addEventListener(\"click\", (e) => {\n    if (!acceptingAnswers) return;\n\n    acceptingAnswers = false;\n    const selectedChoice = e.target;\n    const selectedAnswer = selectedChoice.dataset.number;\n\n    const classToApply =\n      selectedAnswer == currentQuestion.answer ? \"correct\" : \"incorrect\";\n\n    if (classToApply === \"correct\") {\n      incrementScore(CORRECT_BONUS);\n    }\n\n    selectedChoice.parentElement.classList.add(classToApply);\n\n    setTimeout(() => {\n      selectedChoice.parentElement.classList.remove(classToApply);\n      getNewQuestion();\n    }, 1000);\n  });\n});\n\nconst incrementScore = (num) => {\n  score += num;\n  scoreText.innerText = score;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/game.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/game.js"));
/******/ }
]);