function updateScoreDisplay() {
    document.getElementById('score1-display').innerText = localStorage.getItem('score1');
    document.getElementById('score2-display').innerText = localStorage.getItem('score2');
    document.getElementById('timer-display').innerText = localStorage.getItem('timer');
}

window.addEventListener('storage', updateScoreDisplay);

document.addEventListener('DOMContentLoaded', updateScoreDisplay);
