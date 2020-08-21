/* Add the state in the const `questions` with 10 objects-questions with two pars keys-value:
{question: 'string';
answers: [4 objects-variants with two pairs key-value
          {text: 'string',
          correct: boolean } ]
}
*/
const state = {
    quiz: {
      // computed at the beginning of the quiz using the length of .questions
      questions: 0,
      // how many questions has the user answered?
      //  you can calculate this value by iterating through the questions
      //  is selected === -1?
      answered: 0,
      // how many correct answers has the user submitted?
      //  you can calculate this value by iterating through the questions
      //  is selected === correct?
      correct: 0,
      // how do you want to measure score?
      //  that's up to you!
      score: 0
    },
}

const questions =[
    {  question: 'Inside which HTML element do we put the JavaScript?',
       answers: [
       {text: '<scripting>', correct: false },
       {text: '<script>', correct: true },
       {text: '<javascript>', correct: false },
       {text: '<js>', correct: false }
       ]
   },
  
    {  question: 'Where is the correct place to insert a JavaScript?',
       answers: [
       {text: 'The <body> section', correct: false },
       {text: 'The <head> section', correct: false},
       {text: 'Both the <head> section and the <body> section are correct', correct: true},
       {text: 'In the beginning of separate file.js', correct: false}
       ]
   },
  
    {  question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
       answers: [
       { text: '<script name="xxx.js">', correct: false },
       {text: '<script href="xxx.js">', correct: false},
       {text: '<script src ="xxx.js">', correct: true },
       {text: '<script id="xxx.js">', correct: false }
       ]
   },
  
    {  question: 'How do you write "Hello World" in an alert box?',
       answers: [
       {text: 'alertBox("Hello World")', correct: false },
       {text: 'print("Hello World")', correct: false},
       {text: 'alert("Hello World")', correct: true},
       {text: 'consol.log("Hello World")', correct: false}
       ]
   },
  
    {  question: 'How do you create a function in JavaScript?',
       answers: [
       {text: 'function myFunction()', correct: true},
       {text: 'function: myFunction()', correct: false},
       {text: 'function = myFunction()', correct: false},
       {text: 'function -> myFunction()', correct: false}
       ]
   },
  
    {  question: 'How do you call a function named "myFunction"?',
       answers: [
       {text: 'call myFunction()', correct: false},
       {text: 'myFunction()', correct: true},
       {text: 'call function myFunction()', correct: false},
       {text: '()', correct: false}
       ]
   },
  
    {  question: 'How to write an IF statement in JavaScript?',
       answers: [
       {text: 'if i==5 then', correct: false},
       {text: 'if (i==5)', correct: true},
       {text: 'if i=5', correct: false},
       {text: 'if i=5 then ', correct: false}
       ]
   },
  
    {  question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
       answers: [
       {text: 'if i =! 5 then', correct: false},
       {text: 'if i <> 5', correct: false},
       {text: 'if (i <> 5)', correct: false},
       {text: 'if (i != 5)', correct: true}
       ]
   },
  
    {  question: 'How can you add a comment in a JavaScript?',
       answers: [
       {text:'<!--This is a comment-->', correct: false},
       {text: '//This is a comment', correct: true},
       {text: ' "This is a comment" ', correct: false},
       {text: '${This is a comment}', correct: false}
       ]
   },
  
    {  question: 'What is the correct way to write a JavaScript array?',
       answers: [
       {text: 'const colors = ["red", "green", "blue"]', correct: true},
       {text: 'const colors = [1:"red", 2:"green", 3:"blue"]', correct: false},
       {text: 'const colors = "red", "green", "blue"]', correct: false},
       {text: 'const colors = 1=("red"), 2=("green"), 3=("blue")', correct: false}
       ]
   }
  ]
  
/* This variable for remaining-time. 
When Test start it start to decrease*/

let seconds = 300;