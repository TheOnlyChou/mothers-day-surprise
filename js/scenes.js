window.App = window.App || {};

(function initScenes(App) {
  let currentScene = 0;

  function showScene(index) {
    currentScene = index;

    App.dom.scenes.forEach((scene, i) => {
      scene.classList.toggle('active', i === index);
    });

    App.dom.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === Math.min(index, App.dom.dots.length - 1));
    });
  }

  function getCurrentScene() {
    return currentScene;
  }

  App.scenes = {
    showScene,
    getCurrentScene
  };
})(window.App);
