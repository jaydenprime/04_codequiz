// Time Limit, number of questions
const timeLimit = 30;
const numQuestions = 5;

// Set initial score to 0, current question to 0, timer to time limit, and initial score to be 5
let highScore = 0;
let currentQuestion = 0;
let timer = timeLimit;
let score = 5;

// Start button for quiz
let startBtn = document.getElementById("start-button")

// Quiz questions
let quizQuestions = [  
    {    
    question: "What are other ways to write a javascript function?",
    answers: ["With []", "With =>", "With #", "With -"],
    correctAnswer: "With =>"
  },
  {
    question: "How do you return a string as an interger?",
    answers: ["parseNum()", "parseNumber()", "parseInt()", "parseInteger()"],
    correctAnswer: "parseInt()"
  },
  {    
    question: "What declaration can't be changed through reassignment?",
    answers: ["var", "const", "let", "declare"],
    correctAnswer: "const"
  },
  {    
    question: "What are required in an asynchronous function?",
    answers: ["async await", "async after", "async promise", "async awhile"],
    correctAnswer: "async await"
  },
  {    
    question: "What type of statement would you write to loop?",
    answers: ["For circle", "For square", "For oval", "For each"],
    correctAnswer: "For each"
  },
];


// Function to start the quiz
function startQuiz() {
  displayQuestion();
  startTimer();
}


// Function to display the current question
function displayQuestion() {
  let question = quizQuestions[currentQuestion].question;
  let quizContent = `
    <h1>${question}</h1>
  `;

  // Add buttons for the answer options
  for (let i = 0; i < quizQuestions[currentQuestion].answers.length; i++) {
    quizContent += `
    <button onclick="checkAnswer(event)">${quizQuestions[currentQuestion].answers[i]}</button>
    `;
  }

  // Update quiz content in the HTML
  document.querySelector('#quiz').innerHTML = quizContent;
}

// Function to start the timer
function startTimer() {
  let countdown = setInterval(function() {
    timer--;
    // If the timer has reached 0, end the quiz
    if (timer <= 0) {
      endQuiz();
      clearInterval(countdown);
    }
    document.querySelector('#timer').innerHTML = "Time remaining: " + timer + " seconds";
  }, 1000);
}

// Function to check the answer to the current question
function checkAnswer(event) {
  let answer = event.target.innerHTML;
  if (answer == quizQuestions[currentQuestion].correctAnswer) {
    score+=5;
  } else {
    timer -= 5;
  }

  // Move to the next question
  currentQuestion++;

  // If there are no more questions, end the quiz
  if (currentQuestion >= numQuestions) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

// Function to end the quiz
function endQuiz() {
  console.log("Your score: " + score + "/" + numQuestions);

  if (score > highScore) {
    highScore = score;
  }
  
  document.querySelector('#high-score').innerHTML = "High score: " + highScore;
  checkAnswer()
}


// Start the quiz
startBtn.onclick=startQuiz