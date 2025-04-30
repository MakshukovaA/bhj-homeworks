(() => {
  let clickCount = 0;
  let isIncreasing = true;
  const clickerCounter = document.getElementById('clicker__counter');
  const cookie = document.getElementById('cookie');
  const timerDisplay = document.getElementById('timer');
  
  const updateClickCounter = () => {
      clickCount++;
      clickerCounter.textContent = clickCount;

      if (isIncreasing) {
          cookie.style.width = '220px';
          cookie.style.height = '220px';
      } else {
          cookie.style.width = '200px';
          cookie.style.height = '200px';
      }
      isIncreasing = (isIncreasing + 1) % 2 === 1;
  };

  cookie.addEventListener('click', updateClickCounter);

  let timeLeft = 10;
  const timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;

      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          alert(`Время вышло! Вы сделали ${clickCount} кликов.`);
        
          clickCount = 0;
          clickerCounter.textContent = clickCount;
          timeLeft = 10;
          timerDisplay.textContent = timeLeft;
      }
  }, 1000);
})();
//