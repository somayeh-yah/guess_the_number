'use strict';
//DOM står för "document object model"; strukterad represenation av vår html dokument
//dom är en koppling mellan html document och javascript kod.


let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //här kontrollerar vi om det inte finns någon gissnig så ska ett meddelande visas i webbläsaren
    //when there is no input
    displayMessage("👎No number!")
    //when user gusses right
  } else if (guess === secretNumber) {
   displayMessage("🎉Correct number!")
    //här ändrar vi bakgrundsfärgen efter rätt gissning , vi manupilerar css stylen med javascript
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    score++;
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? ' 📈To high' : ' 📉To low');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
   displayMessage("You lost the game 😧");
    document.querySelector('.score').textContent = 0;
  }
});

//här återställer vi om spelet

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
