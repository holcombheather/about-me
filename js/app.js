'use strict';


// Greeting

let userName = prompt('What is your name?');
alert(`Hello ${userName}! Welcome to my site! Take a short quiz to test what you think you know about me!`);

// 5 Questions about Me

const questions = [
  {
    question: 'Does Heather currently work in the field that she studied in college? Type "Yes" or "No"',
    answer: 'no',
  },
  {
    question: 'Has Heather identified a specific job title and niche area of expertise to pursue long term? Type "Yes" or "No"',
    answer: 'no',
  },
  {
    question: 'Has Heather expressed interest in going back to school to obtain a higher degree or certification to advance her career? Type "Yes" or "No"',
    answer: 'yes',
  },
  {
    question: 'Is Heather planning to change her career path or industry in the near future? Type "Yes" or "No"',
    answer: 'yes',
  },
  {
    question: 'Does Heather want a career where she feels a strong sense of purpose in the work she does and aligns with her personal values and goals? Type "Yes" or "No"',
    answer: 'yes',
  },
];
let quizScore = 0;
function quiz() {

  for (let i = 0; i < questions.length; i++) {

    const response = prompt(questions[i].question).toLowerCase();

    if (response === questions[i].answer) {

      console.log('Correct');
      alert('Correct');
      quizScore++;

    } else {

      console.log('Wrong');
      alert('Sorry that is not correct');

    }

  }
}
quiz();


// Question #6 Guess a Number

function askMany(question, attempts = 4) {
  const answerSix = 10;
  while (attempts > 0) {
    const questionSix = prompt(question);
    if (parseInt(questionSix) === answerSix) {
      console.log('Correct ' + questionSix);
      alert('That\'s correct!');
      quizScore++;
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
}

askMany('Guess how many years I\'ve had \'Learn to Code\' on my bucket list?');


// Question #7 Multiple Correct Answers

// Set up the question and its possible answers
function codeQuiz() {
  const question = {
    prompt: 'What are some programming languages I want to learn?',
    answers: ['JAVASCRIPT', 'PYTHON', 'C++']
  };

  // Set up the number of attempts allowed to 6 and track the initial score
  const maxAttempts = 6;

  // Loop through each question and ask the user for their guess
  let attempts2 = 0;
  let isCorrect = false;
  while (attempts2 < maxAttempts && !isCorrect) {
    let guess = prompt(`${question.prompt} You have ${maxAttempts - attempts2} attempts left.`).toUpperCase();

    if (question.answers.includes(guess)) {
      alert('Correct!');
      isCorrect = true;
      quizScore++;
    } else {
      attempts2++;
      alert('Incorrect. Try again.');
    }
  }
  alert(`The possible correct answers are: ${question.answers.join(", ")}.`);
}

codeQuiz();
// Final Score + Thank you Message
// Question 7 was worked on until it was too late and will be looked at later

alert(`You got ${quizScore} out of 7 questions correct. Thanks ${userName} for playing and I hope you learned a little more about me.`);




