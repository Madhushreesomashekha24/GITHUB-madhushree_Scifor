"use strict";

var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var quizBox = document.getElementById("quiz-box");
var questionText = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var startScreen = document.getElementById("start-screen");
var resultScreen = document.getElementById("result-screen");
var scoreText = document.getElementById("score-text");
var currentQuestionIndex = 0;
var score = 0;
var questions = [{
  question: "What is the capital of France?",
  answers: [{
    text: "Paris",
    correct: true
  }, {
    text: "Rome",
    correct: false
  }, {
    text: "Madrid",
    correct: false
  }, {
    text: "Berlin",
    correct: false
  }]
}, {
  question: "Who painted the Mona Lisa?",
  answers: [{
    text: "Vincent van Gogh",
    correct: false
  }, {
    text: "Leonardo da Vinci",
    correct: true
  }, {
    text: "Pablo Picasso",
    correct: false
  }, {
    text: "Claude Monet",
    correct: false
  }]
}, {
  question: "Which planet is known as the Red Planet?",
  answers: [{
    text: "Mars",
    correct: true
  }, {
    text: "Jupiter",
    correct: false
  }, {
    text: "Saturn",
    correct: false
  }, {
    text: "Venus",
    correct: false
  }]
}, {
  question: "How many continents are there on Earth?",
  answers: [{
    text: "5",
    correct: false
  }, {
    text: "6",
    correct: false
  }, {
    text: "7",
    correct: true
  }, {
    text: "8",
    correct: false
  }]
}, {
  question: "What is H2O commonly known as?",
  answers: [{
    text: "Oxygen",
    correct: false
  }, {
    text: "Salt",
    correct: false
  }, {
    text: "Water",
    correct: true
  }, {
    text: "Hydrogen",
    correct: false
  }]
}, {
  question: "Which language is primarily spoken in Brazil?",
  answers: [{
    text: "Spanish",
    correct: false
  }, {
    text: "Portuguese",
    correct: true
  }, {
    text: "English",
    correct: false
  }, {
    text: "French",
    correct: false
  }]
}, {
  question: "How many sides does a hexagon have?",
  answers: [{
    text: "5",
    correct: false
  }, {
    text: "6",
    correct: true
  }, {
    text: "7",
    correct: false
  }, {
    text: "8",
    correct: false
  }]
}, {
  question: "What is the largest mammal in the world?",
  answers: [{
    text: "Elephant",
    correct: false
  }, {
    text: "Blue Whale",
    correct: true
  }, {
    text: "Giraffe",
    correct: false
  }, {
    text: "Great White Shark",
    correct: false
  }]
}, {
  question: "Who wrote 'Romeo and Juliet'?",
  answers: [{
    text: "Charles Dickens",
    correct: false
  }, {
    text: "William Shakespeare",
    correct: true
  }, {
    text: "Jane Austen",
    correct: false
  }, {
    text: "Mark Twain",
    correct: false
  }]
}, {
  question: "Which gas do plants absorb from the atmosphere?",
  answers: [{
    text: "Oxygen",
    correct: false
  }, {
    text: "Carbon Dioxide",
    correct: true
  }, {
    text: "Nitrogen",
    correct: false
  }, {
    text: "Helium",
    correct: false
  }]
}, {
  question: "Which country is famous for pizza and pasta?",
  answers: [{
    text: "France",
    correct: false
  }, {
    text: "Mexico",
    correct: false
  }, {
    text: "Italy",
    correct: true
  }, {
    text: "India",
    correct: false
  }]
}, {
  question: "In which sport is the term 'love' used?",
  answers: [{
    text: "Football",
    correct: false
  }, {
    text: "Basketball",
    correct: false
  }, {
    text: "Tennis",
    correct: true
  }, {
    text: "Cricket",
    correct: false
  }]
}, {
  question: "How many legs does a spider have?",
  answers: [{
    text: "6",
    correct: false
  }, {
    text: "8",
    correct: true
  }, {
    text: "10",
    correct: false
  }, {
    text: "12",
    correct: false
  }]
}, {
  question: "What is the boiling point of water in Celsius?",
  answers: [{
    text: "90°C",
    correct: false
  }, {
    text: "100°C",
    correct: true
  }, {
    text: "110°C",
    correct: false
  }, {
    text: "120°C",
    correct: false
  }]
}, {
  question: "Which bird is known for imitating sounds?",
  answers: [{
    text: "Crow",
    correct: false
  }, {
    text: "Parrot",
    correct: true
  }, {
    text: "Owl",
    correct: false
  }, {
    text: "Pigeon",
    correct: false
  }]
}, {
  question: "Which ocean is the largest?",
  answers: [{
    text: "Atlantic",
    correct: false
  }, {
    text: "Indian",
    correct: false
  }, {
    text: "Arctic",
    correct: false
  }, {
    text: "Pacific",
    correct: true
  }]
}, {
  question: "What is the square root of 64?",
  answers: [{
    text: "6",
    correct: false
  }, {
    text: "8",
    correct: true
  }, {
    text: "10",
    correct: false
  }, {
    text: "12",
    correct: false
  }]
}, {
  question: "Who is known as the Father of Computers?",
  answers: [{
    text: "Alan Turing",
    correct: false
  }, {
    text: "Charles Babbage",
    correct: true
  }, {
    text: "Bill Gates",
    correct: false
  }, {
    text: "Steve Jobs",
    correct: false
  }]
}, {
  question: "Which is the smallest planet in our solar system?",
  answers: [{
    text: "Mercury",
    correct: true
  }, {
    text: "Mars",
    correct: false
  }, {
    text: "Earth",
    correct: false
  }, {
    text: "Venus",
    correct: false
  }]
}, {
  question: "What color do you get by mixing red and white?",
  answers: [{
    text: "Pink",
    correct: true
  }, {
    text: "Purple",
    correct: false
  }, {
    text: "Orange",
    correct: false
  }, {
    text: "Brown",
    correct: false
  }]
}];
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", function () {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    setNextQuestion();
  } else {
    showResult();
  }
});

function startQuiz() {
  startScreen.classList.add("hide");
  quizBox.classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  var currentQuestion = questions[currentQuestionIndex];
  questionText.innerText = currentQuestion.question;
  currentQuestion.answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", function () {
      return selectAnswer(answer);
    });
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextBtn.classList.add("hide");
  answerButtons.innerHTML = "";
}

function selectAnswer(answer) {
  if (answer.correct) score++;
  nextBtn.classList.remove("hide");
  Array.from(answerButtons.children).forEach(function (button) {
    if (button.innerText === answer.text) {
      button.style.backgroundColor = answer.correct ? "green" : "red";
    }

    button.disabled = true;
  });
}

function showResult() {
  quizBox.classList.add("hide");
  resultScreen.classList.remove("hide");
  scoreText.innerText = "You scored ".concat(score, " out of ").concat(questions.length, "!");
}