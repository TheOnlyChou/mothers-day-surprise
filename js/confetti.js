window.App = window.App || {};

(function initConfetti(App) {
  function launchConfetti() {
    App.dom.confetti.innerHTML = '';

    for (let i = 0; i < 46; i += 1) {
      const piece = document.createElement('span');

      piece.style.left = `${Math.random() * 100}%`;
      piece.style.animationDelay = `${Math.random() * 0.8}s`;
      piece.style.transform = `rotate(${Math.random() * 180}deg)`;

      App.dom.confetti.appendChild(piece);
    }
  }

  function resetConfetti() {
    App.dom.confetti.innerHTML = '';
  }

  App.confetti = {
    launchConfetti,
    resetConfetti
  };
})(window.App);
