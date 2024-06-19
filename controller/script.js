function incrementScore(scoreId) {
  const scoreElement = document.getElementById(scoreId);
  let currentScore = parseInt(scoreElement.innerText);
  scoreElement.innerText = currentScore + 1;
  updateDisplay(scoreId, currentScore + 1);
}

function decrementScore(scoreId) {
  const scoreElement = document.getElementById(scoreId);
  let currentScore = parseInt(scoreElement.innerText);
  if (currentScore > 0) {
      scoreElement.innerText = currentScore - 1;
      updateDisplay(scoreId, currentScore - 1);
  }
}

function resetScores() {
  document.getElementById('score1').innerText = '0';
  document.getElementById('score2').innerText = '0';
  updateDisplay('score1', 0);
  updateDisplay('score2', 0);
}

let timerInterval;
let timeLeft = 1800; // 30 minutes in seconds

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('timer').innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  localStorage.setItem('timer', document.getElementById('timer').innerText);
}

function startTimer() {
  if (!timerInterval) {
      timerInterval = setInterval(() => {
          if (timeLeft > 0) {
              timeLeft -= 1;
              updateTimerDisplay();
          } else {
              clearInterval(timerInterval);
              timerInterval = null;
          }
      }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  timeLeft = 1800;
  updateTimerDisplay();
}

function updateDisplay(id, value) {
  localStorage.setItem(id, value);
}

document.addEventListener('DOMContentLoaded', () => {
  updateTimerDisplay();
  localStorage.setItem('score1', '0');
  localStorage.setItem('score2', '0');
});
