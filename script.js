'use strict';

const againTag = document.querySelector('.again');
const numberTag = document.querySelector('.number');
const guessTag = document.querySelector('.guess');
const checkTag = document.querySelector('.check');
const messageTag = document.querySelector('.message');
const scoreTag = document.querySelector('.score');
const highscoreTag = document.querySelector('.highscore');

let score = 20;
let highscore = 0;

let secretNumber = Math.floor(Math.random() * 20) + 1;

checkTag.onclick = () => {
  let guess = Number(guessTag.value);

  if (!guess) {
    messageTag.textContent = '⛔ Give appropriate number';
  } 
  else if (guess === secretNumber) {
    messageTag.textContent = '🎉 Correct guess';
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberTag.textContent = secretNumber;
    numberTag.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      highscoreTag.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    score--;
    if (score > 0) {
      messageTag.textContent =
        guess > secretNumber ? '📈Too High!' : '📉Too Low!';
      scoreTag.textContent = score;
    } else {
      messageTag.textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor = '#FF1E00';
    }
  }
};

againTag.onclick = () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  messageTag.textContent = 'Start Guessing....';
  document.querySelector('body').style.backgroundColor = '#222';
  numberTag.textContent = '?';
  numberTag.style.width = '15rem';
  guessTag.value = '';
  score = 20;
  scoreTag.textContent = score;
};
