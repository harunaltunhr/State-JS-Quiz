window.onload = () => {
  // what else should happen when the app is initialized?
  //  ie. before the user can use it
  //  often this will be rendering state to the UI


  // log the initial state
  log.push({
    state: deepClone(state)
  });
  // this log will always
  console.log(log);
};
// Start logging pressing button
function startLog()  {
const startLog = {
action: 'Quiz Started', 
remainingTime: `${timer.innerHTML}`,
}
log.push(startLog);
startLog.state= deepClone(state);
}
// Logging username
function userNameLog() {
  
  const userNameLog = {UserName: `${userNameEl.value}`};
  log.push(userNameLog);
  userNameLog.state = deepClone(state)
}
// Logging questions and times
function questionLog() {
const questionLog = {
  action: `Question: ${questionElement.innerHTML}` ,
  remainingTime: `${timer.innerHTML}`
}
state.quiz.questions += 1;
log.push(questionLog);
questionLog.state= deepClone(state);
}
// Logging user answers, If true; correct and score +1
function answerLog(){
  debugger;
let answerIndex= 1+questions.indexOf(questionElement.innerHTML);
const answer = event.target;
let trueAnswer = answer.dataset.correct;
if(trueAnswer){
  state.quiz.correct += 1;
  state.quiz.answered += 1;
  state.quiz.score += 1;
}else{
  state.quiz.answered += 1;
}
const answerLog = {
  action: `Answered: ${questionElement.innerHTML}` ,
  answer: `${answer.innerText}`,
  remainingTime: `${timer.innerHTML}`
}
log.push(answerLog);
answerLog.state= deepClone(state);
}
//Control times. If finished logging
function remainingTimeLog() {
const noTime= timer.innerHTML;
  if(noTime==`Time's up!!`){
    const remainingTimeLog = {
      action: `Time Finished` ,
    }
    log.push(remainingTimeLog);
    remainingTimeLog.state= deepClone(state);
      
  }
}

function finalLog() {
  let testTime = 300-timer.innerHTML;
  if(Boolean(testTime)){
    testTime = testTime
  }
  else{
    testTime = 300
  }
  const finalLog = {
    action: `Test Finished` ,
    totalTime: `${testTime} seconds`,  
  }
  log.push(finalLog);
  finalLog.state= deepClone(state);  
}