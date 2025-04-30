(() => {
  let playing = true,
      activeHole = null,
      deadCount = 0,
      lostCount = 0;

  const stop = () => playing = false,
        getHole = index => document.getElementById(`hole${index}`),
        deactivateHole = index => getHole(index).className = 'hole',
        activateHole = index => getHole(index).className = 'hole hole_has-mole',
        next = () => setTimeout(() => {
          if (!playing) {
            return;
          }
          deactivateHole(activeHole);
          activeHole = Math.floor(1 + Math.random() * 9);
          activateHole(activeHole);
          next();
        }, 800);

  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
      if (!playing) return;

      if (this.classList.contains('hole_has-mole')) {
        deadCount++;
        document.getElementById('dead').textContent = deadCount;

        if (deadCount === 10) {
          alert('Вы победили!');
          resetGame();
        }
      } else {
        lostCount++;
        document.getElementById('lost').textContent = lostCount;

        if (lostCount === 5) {
          alert('Вы проиграли!');
          resetGame();
        }
      }
    };
  }

  const resetGame = () => {
    playing = false;
    deadCount = 0;
    lostCount = 0;
    document.getElementById('dead').textContent = deadCount;
    document.getElementById('lost').textContent = lostCount;
    deactivateHole(activeHole);
    activeHole = null;
  };

  next();
})();