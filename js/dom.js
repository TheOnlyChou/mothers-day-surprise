window.App = window.App || {};

window.App.dom = {
  scenes: Array.from(document.querySelectorAll('.scene')),
  dots: Array.from(document.querySelectorAll('.dot')),

  startBtn: document.getElementById('startBtn'),
  gift: document.getElementById('gift'),
  envelope: document.getElementById('envelope'),
  readLetterBtn: document.getElementById('readLetterBtn'),
  letterBtn: document.getElementById('letterBtn'),
  yesBtn: document.getElementById('yesBtn'),
  noBtn: document.getElementById('noBtn'),
  questionMascot: document.getElementById('questionMascot'),
  questionReactionCard: document.getElementById('questionReactionCard'),
  questionReactionImage: document.getElementById('questionReactionImage'),
  noMessage: document.getElementById('noMessage'),
  restartBtn: document.getElementById('restartBtn'),
  confetti: document.getElementById('confetti')
};
