const timerElement = document.getElementById('timer');

let countdownSeconds = parseInt(timerElement.textContent, 10);

function updateTimer() {
   countdownSeconds--;
   timerElement.textContent = countdownSeconds;
   if (countdownSeconds <= 0) {
      clearInterval(intervalId);
      alert('Вы победили в конкурсе!');
    }
}

const intervalId = setInterval(updateTimer, 1000);