"use strict";
let score =  document.querySelector(".score").textContent = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");

const displayModal = function (message) {
  document.querySelector(".modal-message").textContent = message;
  modal.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayModal("👎No number!");
  } else if (guess === secretNumber) {
    displayModal("🎉Correct number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".score").textContent = score;
    score++;
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayModal(guess > secretNumber ? "📈 Too high" : "📉 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayModal("You lost the game 😧");
      document.querySelector(".score").textContent = 0;
    }
  }
});

const resetGame = function() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".highscore").textContent = 0;
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#7a7777";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  score = 20;
};

document.querySelector(".again").addEventListener("click", resetGame);
  

