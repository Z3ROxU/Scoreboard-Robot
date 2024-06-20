function incrementScore(scoreId) {
  const scoreElement = document.getElementById(scoreId)
  let currentScore = parseInt(scoreElement.innerText)
  scoreElement.innerText = currentScore + 1
  updateDisplay(scoreId, currentScore + 1)
  updateTotalScore(scoreId)
}

function incrementScoreGreen(scoreId) {
  incrementColorScore(scoreId, 1)
}

function incrementScorePurple(scoreId) {
  incrementColorScore(scoreId, 5)
}

function incrementScoreYellow(scoreId) {
  incrementColorScore(scoreId, 10)
}

function incrementScoreBlue(scoreId) {
  incrementColorScore(scoreId, 15)
}

function incrementColorScore(scoreId, increment) {
  const scoreElement = document.getElementById(scoreId)
  let currentScore = parseInt(scoreElement.innerText)
  scoreElement.innerText = currentScore + increment
  updateDisplay(scoreId, currentScore + increment)
  updateTotalScore(scoreId)
}

function updateTotalScore(scoreId) {
  let teamTotalId
  if (scoreId.startsWith('score1')) {
    teamTotalId = 'score1'
  } else if (scoreId.startsWith('score2')) {
    teamTotalId = 'score2'
  }
  let teamTotal = 0
  const colors = ['green', 'purple', 'yellow', 'blue']
  colors.forEach((color) => {
    const colorScoreId = `${teamTotalId}${color}`
    const colorScore = parseInt(document.getElementById(colorScoreId).innerText)
    teamTotal += colorScore
  })
  document.getElementById(teamTotalId).innerText = teamTotal
}

function decrementScore(scoreId) {
  const scoreElement = document.getElementById(scoreId)
  let currentScore = parseInt(scoreElement.innerText)
  if (currentScore > 0) {
    scoreElement.innerText = currentScore - 1
    updateDisplay(scoreId, currentScore - 1)
    updateTotalScore(scoreId)
  }
}

function resetScores() {
  ;['score1', 'score2'].forEach((team) => {
    document.getElementById(team).innerText = '0'
    ;['green', 'purple', 'yellow', 'blue'].forEach((color) => {
      document.getElementById(`${team}${color}`).innerText = '0'
    })
    updateDisplay(team, 0)
  })
}

function updateDisplay(id, value) {
  localStorage.setItem(id, value)
}

document.addEventListener('DOMContentLoaded', () => {
  updateTimerDisplay()
  ;['score1', 'score2'].forEach((team) => {
    localStorage.setItem(team, '0')
    ;['green', 'purple', 'yellow', 'blue'].forEach((color) => {
      localStorage.setItem(`${team}${color}`, '0')
    })
  })
})

let timerInterval
let timeLeft = 1800 // 30 minutes in seconds

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  document.getElementById('timer').innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`
  localStorage.setItem('timer', document.getElementById('timer').innerText)
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft -= 1
        updateTimerDisplay()
      } else {
        clearInterval(timerInterval)
        timerInterval = null
      }
    }, 1000)
  }
}

function stopTimer() {
  clearInterval(timerInterval)
  timerInterval = null
}

function resetTimer() {
  stopTimer()
  timeLeft = 1800
  updateTimerDisplay()
}
