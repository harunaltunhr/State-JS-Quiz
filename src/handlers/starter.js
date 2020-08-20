'use strict';

console.log('--- loading handler: startGame');

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion();
  timer.classList.remove('hide');
  remainingTime();
};

console.log('--- loading handler: setNextQuestion');


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  };

console.log('--- loading handler: showQuestion');

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  };

console.log('--- loading handler: selectAnswer');


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  };

console.log('--- loading handler: resetState');


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  };

console.log('--- loading handler: setStatusClass');


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  };
  
console.log('--- loading handler: clearStatusClass');

  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  };

function remainingTime() {
  seconds = seconds - 1;
        if (seconds < 0) {
            // Go to result page (This part will done)//
            document.getElementById("time-control").innerHTML = `Time's up!!`;
        } else {
            // Update remaining seconds
            document.getElementById("time-control").innerHTML = seconds;
            window.setTimeout("remainingTime()", 1000);
        }
}
