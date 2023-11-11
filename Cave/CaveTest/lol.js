const gameBoard = document.getElementById('game-board');

for (let i = 0; i < 48; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click', () => {
      showRectangle();
    });
    gameBoard.appendChild(square);
  
}



const but = document.getElementById('build');
but.addEventListener('click', () => {
  showField();
});

function showField() {
  var F = document.getElementById("game-board");
  F.style.display = "flex";
}
const cl = document.getElementById('esc');
cl.addEventListener('click', () => {
  HideRectangle();
});

function showRectangle() {
  var rectangle = document.getElementById("rectangle");
  rectangle.style.display = "block";
}

function HideRectangle() {
  var rectangle = document.getElementById("rectangle");
  rectangle.style.display = "none";
}

