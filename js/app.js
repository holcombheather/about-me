'use strict';


// Greeting

let userName = prompt('What is your name?');
alert('Hello ' + userName + '! Welcome to my site! Take a short quiz to test what you think you know about me!');

// 5 Questions about Me

let questionOne = prompt('Does Heather currently work in the field that she studied in college? Type "Yes" or "No" ').toLowerCase();

if (questionOne === 'no') {
  console.log('Correct');
  alert(questionOne + ' is correct!');
} else {
  console.log('Wrong');
  alert('Sorry that is not correct');
}

let questionTwo = prompt('Has Heather identified a specific job title and niche area of expertise to pursue long term? Type "Yes" or "No" ').toLowerCase();

if (questionTwo === 'no') {
  console.log('Correct');
  alert(questionTwo + ' is correct!');
} else {
  console.log('Wrong');
  alert('Sorry that is not correct');
}

let questionThree = prompt('Has Heather expressed interest in going back to school to obtain a higher degree or certification to advance her career? Type "Yes" or "No" ').toLowerCase();

if (questionThree === 'yes') {
  console.log('Correct');
  alert(questionThree + ' is correct!');
} else {
  console.log('Wrong');
  alert('Sorry that is not correct');
}

let questionFour = prompt('Is Heather planning to change her career path or industry in the near future? Type "Yes" or "No" ').toLowerCase();

if (questionFour === 'yes') {
  console.log('Correct');
  alert(questionFour + ' is correct!');
} else {
  console.log('Wrong');
  alert('Sorry that is not correct');
}

let questionFive = prompt('Does Heather want a career where she feels a strong sense of purpose in the work she does and aligns with her personal values and goals? Type "Yes" or "No" ').toLowerCase();

if (questionFive === 'yes') {
  console.log('Correct');
  alert(questionFive + ' is correct!');
} else {
  console.log('Wrong');
  alert('Sorry that is not correct');
}


// Question #6 Guess a Number

const answerSix = 10;
let attempts = 4;

while (attempts > 0) {
  const questionSix = prompt('Guess how many years I\'ve had \'Learn to Code\' on my bucket list?');
  // eslint-disable-next-line eqeqeq
  if (questionSix == answerSix) {
    console.log('Correct ' + questionSix);
    alert('That\'s correct!');
    break;
  }
  if (questionSix < answerSix) {
    console.log('Too low ' + questionSix);
    alert('Too low but try again');
  } else {
    console.log('Too high ' + questionSix);
    alert('Too high but try again');
  }
  attempts--;
}

if (attempts === 0) {
  alert('Sorry you have no more attempts. The correct answer is ' + answerSix);
}


// Question #7 Multiple Correct Answers

// Set up the question and its possible answers
const question = {
    prompt: "What are some programming languages I want to learn?",
    answers: ["JavaScript", "Python", "C++"]
  };
  
  // Set up the number of attempts allowed to 6 and track the initial score
  const maxAttempts = 6;
  let score = 0;
  
  // Loop through each question and ask the user for their guess
  let attempts2 = 0;
  let isCorrect = false;
  while (attempts2 < maxAttempts && !isCorrect) {
    let guess = prompt(`${question.prompt}. You have ${maxAttempts - attempts2} attempts left.`).toLowerCase();
    if (question.answers.includes(guess)) {
      alert("Correct!");
      isCorrect = true;
      score++;
    } else {
      attempts2++;
      alert("Incorrect. Try again.");
    }
  }
  alert(`The possible correct answers are: ${question.answers.join(", ")}.`);
  

// Final Score + Thank you Message

alert(`You got ${score} out of 7 questions correct.` 'Thanks ' + userName + ' for playing and I hope you learned a little more about me.');





// STRETCH GOAL 
// let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
// let answers = ['no', 'no', 'yes', 'yes', 'yes'];
// let response = null; 

// for (let i=0; i < questions.length; i++) {
//   response = prompt(questions[i]);
//   if (response === answers[i]) {
//     alert('correct!');
//   } else {
//     alert('Wrong :(');
//   }
// }
