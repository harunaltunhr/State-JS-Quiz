'use strict';

console.log('--- loading handler: setNextQuestion');


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }