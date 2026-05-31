window.App = window.App || {};

(function initGift(App) {
  function openGift() {
    App.dom.gift.classList.add('open');

    setTimeout(() => {
      App.scenes.showScene(2);
    }, 900);
  }

  function resetGift() {
    App.dom.gift.classList.remove('open');
  }

  App.gift = {
    openGift,
    resetGift
  };
})(window.App);
