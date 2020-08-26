"use strict";

console.log("--- loading handler: startGame");

function startGame() {
  remainingTime();
  userNameLog();
  startLog();
  startButton.classList.add("hide");
  nameForm.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  timer.classList.remove("hide");
}

console.log("--- loading handler: setNextQuestion");

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  questionLog();
}

console.log("--- loading handler: showQuestion");

function showQuestion(question) {
  questionElement.innerText = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

console.log("--- loading handler: selectAnswer");

function selectAnswer(e) {
  answerLog();

  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
    if (button !== e.target){
        button.setAttribute('disabled', 'true');
        button.classList.add('unselected');  
    }
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    nameForm.classList.add("hide");
    timer.classList.add("hide");
    answerButtonsElement.classList.add("hide");
    const testTime = 300 - timer.innerHTML;
    const resultText = `${userNameEl.value} finished that test in ${testTime} seconds\n Questions: ${state.quiz.questions} \n Correct: ${state.quiz.correct}\n Score: ${state.quiz.score} `;
    questionElement.innerText = resultText;
    document.body.style.backgroundColor = "orange";
    finalLog();
    const reload = document.createElement("button");
    reload.classList.add("btn");
    reload.innerHTML = "Start Again";
    questionElement.appendChild(reload);
    reload.addEventListener("click", reloadPage);
    
  }
}

console.log("--- loading handler: resetState");

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

console.log("--- loading handler: setStatusClass");

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

console.log("--- loading handler: clearStatusClass");

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function remainingTime() {
  seconds = seconds - 1;
  if (seconds < 0) {
    // Go to result page (This part will done)//
    document.getElementById("time-control").innerHTML = `Time's up!!`;
    nameForm.classList.add("hide");
    timer.classList.add("hide");
    answerButtonsElement.classList.add("hide");
    let testTime = 300 - timer.innerHTML;
    let resultText = `${userNameEl.value} finished that test in ${testTime} seconds\n Questions: ${state.quiz.questions} \n Correct: ${state.quiz.correct}\n Score: ${state.quiz.score} `;
    if (Boolean(testTime)) {
      resultText = resultText;
    } else {
      resultText = `Unfortunately ${userNameEl.value}\n Time Finished!!!\n Questions: ${state.quiz.questions} \n Correct: ${state.quiz.correct}\n Score: ${state.quiz.score} `;
    }
    questionElement.innerText = resultText;
    document.body.style.backgroundColor = "orange";
    finalLog();
    const reload = document.createElement("button");
    reload.classList.add("btn");
    reload.innerHTML = "Start Again";
    questionElement.appendChild(reload);
    reload.addEventListener("click", reloadPage);
  } else {
    // Update remaining seconds
    document.getElementById("time-control").innerHTML = seconds;
    window.setTimeout("remainingTime()", 1000);
  }
  remainingTimeLog();
}
function reloadPage() {
  location.reload();
}
