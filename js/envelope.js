window.App = window.App || {};

(function initEnvelope(App) {
  function openEnvelope() {
    App.dom.envelope.classList.add('open');

    setTimeout(() => {
      App.dom.readLetterBtn.classList.add('show');
      App.dom.readLetterBtn.focus();
    }, 850);
  }

  function resetEnvelope() {
    App.dom.envelope.classList.remove('open');
    App.dom.readLetterBtn.classList.remove('show');
  }

  App.envelope = {
    openEnvelope,
    resetEnvelope
  };
})(window.App);
