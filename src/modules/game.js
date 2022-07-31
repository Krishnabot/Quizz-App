const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice-text');
let score = 0;
const scoreText = document.querySelector('#score');
const questionCounterText = document.querySelector('#questionCounter');
let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuesions = [];

// static Questions

const questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript??',
    choice1: '<script>',
    choice2: '<javascript>',
    choice3: '<js>',
    choice4: '<scripting>',
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },
];

const MAX_QUESTIONS = 3;
const CORRECT_REWARD = 10;

const getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign('/end.html');
  }
  questionCounter += 1;
  questionCounterText.innerHTML = `${questionCounter}/${MAX_QUESTIONS}`;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const { number } = choice.dataset;
    choice.innerText = currentQuestion[`choice${number}`];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

const startGame = () => {
  availableQuesions = [...questions];
  getNewQuestion();
};

choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset.number;

    let classToApply = 'incorrect';
    // eslint-disable-next-line eqeqeq
    if (selectedAnswer == currentQuestion.answer) {
      classToApply = 'correct';
    }
    if (classToApply === 'correct') {
      IncreamentScore(CORRECT_REWARD);
    }
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

const IncreamentScore = (num) => {
  score += num;
  scoreText.innerHTML = score;
};

export default startGame;
