(function initApp(App) {
  const { dom, scenes, utils, gift, envelope, question, confetti } = App;

  function goToFinalScene() {
    scenes.showScene(5);
    confetti.launchConfetti();
  }

  function resetExperience() {
    question.resetQuestion();
    gift.resetGift();
    envelope.resetEnvelope();
    confetti.resetConfetti();

    scenes.showScene(0);
  }

  dom.startBtn.addEventListener('click', () => scenes.showScene(1));

  dom.gift.addEventListener('click', gift.openGift);
  dom.gift.addEventListener('keydown', (event) => {
    utils.handleKeyboardOpen(event, gift.openGift);
  });

  dom.envelope.addEventListener('click', envelope.openEnvelope);
  dom.envelope.addEventListener('keydown', (event) => {
    utils.handleKeyboardOpen(event, envelope.openEnvelope);
  });

  dom.readLetterBtn.addEventListener('click', () => scenes.showScene(3));
  dom.letterBtn.addEventListener('click', () => scenes.showScene(4));
  dom.yesBtn.addEventListener('click', goToFinalScene);
  dom.noBtn.addEventListener('click', question.handleNoClick);
  dom.restartBtn.addEventListener('click', resetExperience);

  scenes.showScene(0);
})(window.App);
