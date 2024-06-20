function updateScoreDisplay() {
  document.getElementById('score1-display').innerText = localStorage.getItem('score1')
  document.getElementById('score2-display').innerText = localStorage.getItem('score2')
  document.getElementById('timer-display').innerText = localStorage.getItem('timer')

  // Update individual color scores for Team A
  document.getElementById('score1green-display').innerText = localStorage.getItem('score1green')
  document.getElementById('score1purple-display').innerText = localStorage.getItem('score1purple')
  document.getElementById('score1yellow-display').innerText = localStorage.getItem('score1yellow')
  document.getElementById('score1blue-display').innerText = localStorage.getItem('score1blue')

  // Update individual color scores for Team B
  document.getElementById('score2green-display').innerText = localStorage.getItem('score2green')
  document.getElementById('score2purple-display').innerText = localStorage.getItem('score2purple')
  document.getElementById('score2yellow-display').innerText = localStorage.getItem('score2yellow')
  document.getElementById('score2blue-display').innerText = localStorage.getItem('score2blue')
}

window.addEventListener('storage', updateScoreDisplay)

document.addEventListener('DOMContentLoaded', updateScoreDisplay)
