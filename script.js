'use strict';

// Define secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initialize score variable
let score = 20;

// Initialize highscore variable
let highscore = 0;

// Code Refactoring
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener

// The function(eventHandler) will only be called as soon as the event happens.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When we get something from the user interface i.e. the inut field it usually always is a string
  console.log(guess, typeof guess);

  // First scenario: No input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
  }
  // Successful guess (win)
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Implementing Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // Guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset the game

document.querySelector('.again').addEventListener('click', function () {
  // Create new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  // Reset score variable
  score = 20;
  document.querySelector('.score').textContent = score;
  // Reset guess input field
  document.querySelector('.guess').value = '';
  // Reset message
  displayMessage('Start guessing...');
  // Reset css
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
