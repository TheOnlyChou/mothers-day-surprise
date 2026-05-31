window.App = window.App || {};

window.App.utils = {
  handleKeyboardOpen(event, callback) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  }
};
