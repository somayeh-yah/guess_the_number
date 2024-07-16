'use strict';
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
  
    displayMessage("👎No number!")
    
  } else if (guess === secretNumber) {
   displayMessage("🎉Correct number!")
  
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    score++;
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? ' 📈To high' : ' 📉To low');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
   displayMessage("You lost the game 😧");
    document.querySelector('.score').textContent = 0;
  }
});


document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  document.querySelector('.guess').value = ' ';
  displayMessage("Start guessing...");
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
