window.App = window.App || {};

(function initQuestion(App) {
  let noCount = 0;
  let yesScale = 1;
  let surpriseTimeoutId = null;

  function handleNoClick() {
    const { noTexts, maxYesScale, yesScaleStep } = App.config;

    App.dom.noMessage.textContent = noTexts[noCount % noTexts.length];
    noCount += 1;

    if (App.dom.questionReactionCard) {
      App.dom.questionReactionCard.classList.add('is-visible');
    }

    yesScale = Math.min(maxYesScale, yesScale + yesScaleStep);
    App.dom.yesBtn.style.transform = `scale(${yesScale})`;

    const x = Math.floor(Math.random() * 120) - 60;
    const y = Math.floor(Math.random() * 40) - 20;
    App.dom.noBtn.style.transform = `translate(${x}px, ${y}px)`;

    if (App.dom.questionMascot) {
      App.dom.questionMascot.classList.add('is-surprised');

      if (surpriseTimeoutId) {
        clearTimeout(surpriseTimeoutId);
      }

      surpriseTimeoutId = setTimeout(() => {
        App.dom.questionMascot.classList.remove('is-surprised');
        surpriseTimeoutId = null;
      }, 450);
    }
  }

  function resetQuestion() {
    noCount = 0;
    yesScale = 1;
    if (surpriseTimeoutId) {
      clearTimeout(surpriseTimeoutId);
      surpriseTimeoutId = null;
    }

    if (App.dom.questionReactionCard) {
      App.dom.questionReactionCard.classList.remove('is-visible');
    }

    App.dom.noMessage.textContent = '';
    App.dom.yesBtn.style.transform = 'scale(1)';
    App.dom.noBtn.style.transform = 'translate(0, 0)';
    App.dom.questionMascot?.classList.remove('is-surprised');
  }

  App.question = {
    handleNoClick,
    resetQuestion
  };
})(window.App);
