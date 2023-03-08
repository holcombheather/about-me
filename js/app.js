'use strict';

let userName = prompt('What is your name?');
alert('Hello ' + userName + '! Welcome to my site! Take a short quiz to test what you think you know about me!');

let questionOne = prompt('Does Heather currently work in the field that she studied in college? Type "Yes" or "No" ').toLowerCase();

if (questionOne === 'no') {
//   console.log('Correct');
  alert(questionOne + ' is correct!');
} else {
//   console.log('Wrong');
  alert('Sorry that is not correct');
}

let questionTwo = prompt('Has Heather identified a specific job title and niche area of expertise to pursue long term? Type "Yes" or "No" ').toLowerCase();

if (questionTwo === 'no') {
//   console.log('Correct');
  alert(questionTwo + ' is correct!');
} else {
//   console.log('Wrong');
  alert('Sorry that is not correct');
}

let questionThree = prompt('Has Heather expressed interest in going back to school to obtain a higher degree or certification to advance her career? Type "Yes" or "No" ').toLowerCase();

if (questionThree === 'yes') {
//   console.log('Correct');
  alert(questionThree + ' is correct!');
} else {
//   console.log('Wrong');
  alert('Sorry that is not correct');
}

let questionFour = prompt('Is Heather planning to change her career path or industry in the near future? Type "Yes" or "No" ').toLowerCase();

if (questionFour === 'yes') {
//   console.log('Correct');
  alert(questionFour + ' is correct!');
} else {
//   console.log('Wrong');
  alert('Sorry that is not correct');
}

let questionFive = prompt('Does Heather want a career where she feels a strong sense of purpose in the work she does and aligns with her personal values and goals? Type "Yes" or "No" ').toLowerCase();

if (questionFive === 'yes') {
//   console.log('Correct');
  alert(questionFive + ' is correct!');
} else {
//   console.log('Wrong');
  alert('Sorry that is not correct');
}

alert('Thanks ' + userName + ' for playing and I hope you learned a little more about me.');

